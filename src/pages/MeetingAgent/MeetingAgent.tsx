import React, { useState, useEffect } from 'react';
import './MeetingAgent.css';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  MessageSquare,
  Users,
  Settings,
  Bot,
  CheckCircle,
  Clock,
  ArrowRight,
  X,
  ChevronDown,
  AlertTriangle,
  TrendingDown,
  DollarSign,
  Award
} from 'lucide-react';

interface SmartSuggestion {
  id: string;
  type: 'task' | 'insight' | 'opportunity' | 'alert';
  trigger: string;
  message: string;
  action?: {
    primary: string;
    secondary?: string;
  };
  autoComplete?: boolean;
  priority: 'high' | 'medium' | 'low';
  context?: string;
  conversationFlow?: ConversationMessage[];
  automatedAction?: {
    type: 'calendar' | 'plan' | 'email';
    content?: string;
    recipient?: string;
    subject?: string;
  };
}

interface ConversationMessage {
  id: string;
  speaker: 'customer' | 'csm';
  message: string;
  timestamp: string;
  delay: number; // milliseconds from start
}

interface MeetingSummary {
  keyPoints: string[];
  actionItems: string[];
  nextSteps: string[];
  attendees: string[];
  duration: string;
}

function MeetingAgent() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState<SmartSuggestion[]>([]);
  const [isListening, setIsListening] = useState(true);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [conversationMessages, setConversationMessages] = useState<ConversationMessage[]>([]);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [automatedActions, setAutomatedActions] = useState<string[]>([]);
  const [showMeetingSummary, setShowMeetingSummary] = useState(false);
  const [meetingEnded, setMeetingEnded] = useState(false);

  // Realistic conversation flows with nuggets
  const suggestionFlows: SmartSuggestion[] = [
    {
      id: 'email-decline',
      type: 'insight',
      trigger: "Customer mentioned email performance concerns",
      message: "Email open rate dropped 23% last month. Suggest A/B testing subject lines.",
      action: {
        primary: "Share insight",
        secondary: "Skip"
      },
      autoComplete: true,
      priority: 'high',
      context: "Email Performance Alert",
      conversationFlow: [
        {
          id: 'msg1',
          speaker: 'csm',
          message: "Hi Sarah! I noticed your email open rates dropped about 23% last month. I wanted to discuss some strategies that could help improve your engagement.",
          timestamp: '10:42',
          delay: 2000
        },
        {
          id: 'msg2',
          speaker: 'customer',
          message: "Oh wow, I didn't realize it was that much! We haven't tried A/B testing yet. What would you recommend?",
          timestamp: '10:42',
          delay: 5000
        },
        {
          id: 'msg3',
          speaker: 'csm',
          message: "I can share some templates that have worked well for similar companies in your industry. Let me send those over after our call.",
          timestamp: '10:43',
          delay: 8000
        },
        {
          id: 'msg4',
          speaker: 'customer',
          message: "That would be fantastic! We really need to get our email performance back on track.",
          timestamp: '10:43',
          delay: 11000
        }
      ]
    },
    {
      id: 'funding-congratulate',
      type: 'opportunity',
      trigger: "Customer mentioned recent funding",
      message: "Congratulate on $15M Series B. Perfect time to discuss expansion plans.",
      action: {
        primary: "Congratulate",
        secondary: "Note for later"
      },
      autoComplete: true,
      priority: 'medium',
      context: "Growth Opportunity",
      conversationFlow: [
        {
          id: 'msg5',
          speaker: 'csm',
          message: "Congratulations on closing your $15M Series B funding! That's incredible news. I'm curious about your expansion plans - are you looking to scale your team?",
          timestamp: '10:43',
          delay: 2000
        },
        {
          id: 'msg6',
          speaker: 'customer',
          message: "Thank you! Yes, we're really excited. We're planning to double our marketing team and expand internationally.",
          timestamp: '10:44',
          delay: 4500
        },
        {
          id: 'msg7',
          speaker: 'csm',
          message: "That's fantastic! For international expansion, we have some great localization features. And with doubling your marketing team, you'll definitely need more seats. I'd love to discuss our enterprise plans.",
          timestamp: '10:45',
          delay: 7500
        },
        {
          id: 'msg8',
          speaker: 'customer',
          message: "Perfect timing! We'll definitely need more seats and any international support you can offer.",
          timestamp: '10:45',
          delay: 10500
        }
      ]
    },
    {
      id: 'integration-issue',
      type: 'alert',
      trigger: "Customer mentioned technical issues",
      message: "3 overdue API integration tickets. Address timeline and next steps.",
      action: {
        primary: "Address now",
        secondary: "Schedule follow-up"
      },
      autoComplete: true,
      priority: 'high',
      context: "Critical Support Issue",
      conversationFlow: [
        {
          id: 'msg9',
          speaker: 'csm',
          message: "I wanted to address something urgent - I see you have 3 overdue API integration tickets. How is your development team handling this? I know these technical issues can be really frustrating.",
          timestamp: '10:46',
          delay: 2000
        },
        {
          id: 'msg10',
          speaker: 'customer',
          message: "Yes, our developers are getting really frustrated. We could definitely use some expert help to resolve these issues.",
          timestamp: '10:46',
          delay: 4500
        },
        {
          id: 'msg11',
          speaker: 'csm',
          message: "Let me get our senior engineer on a call with your team this week. Would Thursday afternoon work for a technical deep-dive session?",
          timestamp: '10:47',
          delay: 7000
        },
        {
          id: 'msg12',
          speaker: 'customer',
          message: "Thursday afternoon works perfectly! We really appreciate the proactive support.",
          timestamp: '10:47',
          delay: 9500
        }
      ],
      automatedAction: {
        type: 'calendar',
        recipient: 'sarah.chen@techflow.com',
        subject: 'Technical Deep-dive: API Integration Support'
      }
    },
    {
      id: 'expansion-task',
      type: 'task',
      trigger: "Customer mentioned team growth",
      message: "Discuss seat expansion and training needs for new hires.",
      action: {
        primary: "Discuss expansion",
        secondary: "Complete task"
      },
      autoComplete: true,
      priority: 'medium',
      context: "Upsell Opportunity",
      conversationFlow: [
        {
          id: 'msg13',
          speaker: 'csm',
          message: "I noticed from your recent activity that your team usage has increased significantly. Are you planning to expand your marketing team soon?",
          timestamp: '10:48',
          delay: 2000
        },
        {
          id: 'msg14',
          speaker: 'customer',
          message: "Yes, exactly! We're planning to hire 5 more people in marketing over the next quarter.",
          timestamp: '10:48',
          delay: 4500
        },
        {
          id: 'msg15',
          speaker: 'csm',
          message: "That's exciting! For the new marketing hires, would you be interested in our advanced analytics package? It includes training sessions for new users.",
          timestamp: '10:49',
          delay: 7000
        },
        {
          id: 'msg16',
          speaker: 'customer',
          message: "Yes, that sounds perfect. Training would be really valuable since they'll be using the platform heavily.",
          timestamp: '10:49',
          delay: 9500
        }
      ]
    }
  ];

  // Add warmup plan scenario
  const warmupPlanScenario: SmartSuggestion = {
    id: 'warmup-plan',
    type: 'task',
    trigger: "Customer mentioned email deliverability concerns",
    message: "Generate email warmup plan to improve sender reputation and deliverability.",
    action: {
      primary: "Generate & Send Plan",
      secondary: "Skip"
    },
    autoComplete: true,
    priority: 'medium',
    context: "Email Deliverability Solution",
    conversationFlow: [
      {
        id: 'warmup1',
        speaker: 'csm',
        message: "I also wanted to mention - I noticed some of your emails might be hitting spam folders based on your delivery metrics. Are you experiencing any deliverability issues?",
        timestamp: '10:50',
        delay: 2000
      },
      {
        id: 'warmup2',
        speaker: 'customer',
        message: "Yes, exactly! Some of our emails are going to spam and we're really concerned about it.",
        timestamp: '10:50',
        delay: 4500
      },
      {
        id: 'warmup3',
        speaker: 'csm',
        message: "I can help with that. Let me generate a customized email warmup plan for your domain. This will gradually improve your sender reputation.",
        timestamp: '10:51',
        delay: 7000
      },
      {
        id: 'warmup4',
        speaker: 'customer',
        message: "That would be fantastic! We really need to fix this issue.",
        timestamp: '10:51',
        delay: 9500
      }
    ],
    automatedAction: {
      type: 'plan',
      content: `Email Warmup Plan - 6 Week Strategy

Week 1-2: Foundation (50 emails/day)
• Send to highly engaged subscribers only
• Focus on welcome series and re-engagement
• Monitor bounce rates (<2%)

Week 3-4: Gradual Increase (200 emails/day)
• Expand to moderately engaged segments
• Include promotional content (20% max)
• Track spam complaints (<0.1%)

Week 5-6: Full Volume (500+ emails/day)
• Resume normal sending patterns
• Monitor deliverability metrics daily
• Maintain consistent sending schedule

Key Metrics to Track:
✓ Inbox placement rate (>90%)
✓ Open rates (industry benchmark)
✓ Spam complaint rate (<0.1%)
✓ Bounce rate (<2%)`,
      recipient: 'sarah.chen@techflow.com',
      subject: 'Custom Email Warmup Plan - TechFlow Solutions'
    }
  };


  // Update suggestion flows to include warmup scenario
  const allSuggestionFlows = [
    ...suggestionFlows,
    warmupPlanScenario
  ];

  const meetingSummary: MeetingSummary = {
    keyPoints: [
      "Email open rates declined 23% - discussed A/B testing strategies",
      "Congratulated on $15M Series B funding round",
      "3 overdue API integration tickets causing developer frustration",
      "Planning to double marketing team and expand internationally",
      "Need email deliverability warmup plan for better sender reputation"
    ],
    actionItems: [
      "Send email template examples from similar industry companies",
      "Schedule technical deep-dive with senior engineer (Thursday)",
      "Prepare enterprise plan proposal for 5 additional seats",
      "Send customized email warmup plan",
      "Follow up on API integration ticket resolution"
    ],
    nextSteps: [
      "Technical support session scheduled for Thursday 2 PM",
      "Enterprise proposal to be sent by tomorrow",
      "Email warmup plan implementation to begin next week",
      "Monthly check-in scheduled for progress review"
    ],
    attendees: ["Sarah Chen (TechFlow Solutions)", "You (CSM)"],
    duration: "45 minutes"
  };
  // Auto-play conversation flows
  useEffect(() => {
    if (!isListening || currentSuggestionIndex >= allSuggestionFlows.length || meetingEnded) return;

    const currentSuggestion = allSuggestionFlows[currentSuggestionIndex];

    // Show the suggestion first
    const suggestionTimeout = setTimeout(() => {
      setActiveSuggestions([currentSuggestion]);
    }, 1500);

    // Play the conversation
    if (currentSuggestion.conversationFlow) {
      currentSuggestion.conversationFlow.forEach((message) => {
        setTimeout(() => {
          setConversationMessages(prev => {
            // Prevent duplicate messages
            if (prev.some(m => m.id === message.id)) return prev;
            return [...prev, message];
          });
        }, message.delay);
      });

      // Auto-complete the task after conversation ends
      const lastMessage = currentSuggestion.conversationFlow[currentSuggestion.conversationFlow.length - 1];
      setTimeout(() => {
        const completionMessage = getTaskCompletionMessage(currentSuggestion);
        setCompletedTasks(prev => [...prev, completionMessage]);

        // Trigger automated actions
        if (currentSuggestion.automatedAction) {
          setTimeout(() => {
            handleAutomatedAction(currentSuggestion);
          }, 1500);
        }

        // Move to next suggestion after a pause
        setTimeout(() => {
          // Only proceed if we haven't moved to next scenario already
          setCurrentSuggestionIndex(prevIndex => {
            if (prevIndex === currentSuggestionIndex) {
              setCompletedTasks([]); // Clear completed tasks when moving to next scenario
              setConversationMessages([]); // Clear messages for next flow
              setAutomatedActions([]); // Clear automated actions for next scenario

              const nextIndex = prevIndex + 1;

              // Show meeting summary after all scenarios
              if (nextIndex >= allSuggestionFlows.length) {
                setTimeout(() => {
                  setMeetingEnded(true);
                  setShowMeetingSummary(true);
                }, 2000);
              }

              return nextIndex;
            }
            return prevIndex;
          });
        }, 4000);
      }, lastMessage.delay + 3000);
    }

    return () => {
      clearTimeout(suggestionTimeout);
    };
  }, [currentSuggestionIndex, isListening, meetingEnded]);

  const handleAutomatedAction = (suggestion: SmartSuggestion) => {
    if (!suggestion.automatedAction) return;

    const { type, content, recipient, subject } = suggestion.automatedAction;

    switch (type) {
      case 'calendar':
        setAutomatedActions(prev => [...prev, `📅 Calendar invite sent to ${recipient}: "${subject}"`]);
        break;
      case 'plan':
        setAutomatedActions(prev => [...prev, `📋 Generated plan ready to send via email`]);
        break;
      case 'email':
        setAutomatedActions(prev => [...prev, `📧 Email drafted: "${subject}"`]);
        break;
    }
  };
  const handleSuggestionAction = (suggestionId: string, actionType: 'primary' | 'secondary') => {
    const suggestion = activeSuggestions.find(s => s.id === suggestionId);
    if (!suggestion) return;

    if (actionType === 'primary' && suggestion.autoComplete) {
      // Add specific completion message based on suggestion type
      const completionMessage = getTaskCompletionMessage(suggestion);
      setCompletedTasks(prev => [...prev, completionMessage]);

      // Trigger automated action if exists
      if (suggestion.automatedAction) {
        handleAutomatedAction(suggestion);
      }
    }

    setActiveSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  };

  const getTaskCompletionMessage = (suggestion: SmartSuggestion): string => {
    switch (suggestion.id) {
      case 'email-decline':
        return '✅ Shared email insights and A/B testing recommendations';
      case 'funding-congratulate':
        return '✅ Congratulated on Series B funding and discussed expansion';
      case 'integration-issue':
        return '✅ Addressed API issues and scheduled technical support call';
      case 'expansion-task':
        return '✅ Discussed seat expansion and training for new team';
      case 'warmup-plan':
        return '✅ Generated custom email warmup plan for better deliverability';
      default:
        return '✅ Task completed successfully';
    }
  };

  const dismissSuggestion = (suggestionId: string) => {
    setActiveSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  };

  const sendMeetingSummary = () => {
    setAutomatedActions(prev => [...prev, `📧 Meeting summary sent to sarah.chen@techflow.com`]);
    setShowMeetingSummary(false);
  };
  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'task': return <CheckCircle className="w-4 h-4" />;
      case 'insight': return <TrendingDown className="w-4 h-4" />;
      case 'opportunity': return <DollarSign className="w-4 h-4" />;
      case 'alert': return <AlertTriangle className="w-4 h-4" />;
      default: return <Bot className="w-4 h-4" />;
    }
  };

  const getSuggestionColor = (type: string, priority: string) => {
    if (priority === 'high') {
      return 'bg-red-50 border-red-200 text-red-800';
    }
    switch (type) {
      case 'task': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'insight': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'opportunity': return 'bg-green-50 border-green-200 text-green-800';
      case 'alert': return 'bg-red-50 border-red-200 text-red-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getSuggestionIconBg = (type: string, priority: string) => {
    if (priority === 'high') {
      return 'bg-red-400/20 text-red-300';
    }
    switch (type) {
      case 'task': return 'bg-blue-400/20 text-blue-300';
      case 'insight': return 'bg-orange-400/20 text-orange-300';
      case 'opportunity': return 'bg-green-400/20 text-green-300';
      case 'alert': return 'bg-red-400/20 text-red-300';
      default: return 'bg-gray-400/20 text-gray-300';
    }
  };
  const resetDemo = () => {
    setCurrentSuggestionIndex(0);
    setActiveSuggestions([]);
    setCompletedTasks([]);
    setConversationMessages([]);
    setAutomatedActions([]);
    setShowMeetingSummary(false);
    setMeetingEnded(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Zoom Meeting Interface */}
      <div className="relative w-full h-screen">
        {/* Video Grid */}
        <div className="grid grid-cols-2 gap-2 h-full p-4">
          {/* Customer Video */}
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl font-semibold">SC</span>
                </div>
                <h3 className="text-white text-xl font-medium">Sarah Chen</h3>
                <p className="text-gray-300">TechFlow Solutions</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                Sarah Chen
              </span>
            </div>
          </div>

          {/* Your Video */}
          <div className="relative bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-4xl font-semibold">ME</span>
                </div>
                <h3 className="text-white text-xl font-medium">You (CSM)</h3>
                <p className="text-gray-300">Customer Success Manager</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                You
              </span>
            </div>
          </div>
        </div>

        {/* Meeting Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 p-4">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'} text-white transition-colors`}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-3 rounded-full ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-600 hover:bg-gray-700'} text-white transition-colors`}
            >
              {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </button>
            <button className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors">
              <Phone className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
              <Users className="w-6 h-6" />
            </button>
            <button className="p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Listening Indicator */}
      <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full">
        <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        <span className="text-sm">Meeting Agent {isListening ? 'Listening' : 'Paused'}</span>
      </div>

      {/* Smart Suggestions - Right Side */}
      <div className="absolute top-4 right-4 space-y-3 w-96 z-10">
        {activeSuggestions.map((suggestion, index) => (
          <div
            key={suggestion.id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-slide-in-down"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-3">
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-full ${getSuggestionIconBg(suggestion.type, suggestion.priority)}`}>
                  {getSuggestionIcon(suggestion.type)}
                </div>
                <span className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                  {suggestion.context}
                </span>
              </div>
              <button
                onClick={() => dismissSuggestion(suggestion.id)}
                className="text-white/60 hover:text-white/90 transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              <p className="text-sm font-medium mb-3 text-white/95 leading-relaxed">{suggestion.message}</p>

              {/* Show generated plan content for warmup plan */}
              {suggestion.id === 'warmup-plan' && suggestion.automatedAction?.content && (
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-3 text-xs border border-white/10">
                  <div className="font-semibold mb-2 text-white/90">Generated Plan:</div>
                  <pre className="whitespace-pre-wrap text-xs text-white/80 leading-relaxed">{suggestion.automatedAction.content}</pre>
                </div>
              )}

              {/* Trigger Context */}
              <p className="text-xs text-white/70 mb-4 flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>
                  🎯 {suggestion.trigger}
                </span>
              </p>

              {/* Actions */}
              {suggestion.action && (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleSuggestionAction(suggestion.id, 'primary')}
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                  >
                    <span>{suggestion.action.primary}</span>
                    {suggestion.autoComplete && <CheckCircle className="w-4 h-4" />}
                  </button>

                  {suggestion.action.secondary && (
                    <button
                      onClick={() => handleSuggestionAction(suggestion.id, 'secondary')}
                      className="px-4 py-2.5 text-sm text-white/70 hover:text-white/90 hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      {suggestion.action.secondary}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* All Automated Actions Notifications - Right Side */}
      <div className="absolute top-80 right-4 space-y-3 w-80 z-10">
        {automatedActions.slice(-3).map((action, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 text-white px-5 py-4 rounded-2xl shadow-2xl animate-slide-in-down"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-400/20 rounded-full">
                <Bot className="w-4 h-4 text-green-300" />
              </div>
              <span className="text-sm font-semibold text-white/95">{action}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Auto-Completion Notification */}
      {completedTasks.length > 0 && (
        <div className="absolute bottom-40 right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 text-white px-6 py-4 rounded-2xl shadow-2xl animate-bounce-in z-20 max-w-md">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-400/20 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-300" />
            </div>
            <span className="text-sm font-medium">
              {completedTasks[completedTasks.length - 1]}
            </span>
          </div>
        </div>
      )}

      {/* Minimal Conversation Bubbles at Bottom */}
      {/* All Conversation Messages - Left Side */}
      <div className="absolute bottom-20 left-4 z-10 max-w-md">
        <div className="flex flex-col space-y-2">
          {conversationMessages
            .slice(-6) // Show last 6 messages total
            .map((message, index) => (
              <div
                key={message.id}
                className="animate-slide-in-left"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="space-y-1">
                  {/* Speaker Name */}
                  <div className="text-xs text-gray-400 px-2">
                    {message.speaker === 'customer' ? 'Sarah Chen' : 'You (CSM)'}
                  </div>

                  {/* Message Bubble */}
                  <div className={`relative px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm border ${
                      message.speaker === 'customer'
                      ? 'bg-white/95 text-gray-800 border-white/20 rounded-bl-sm'
                      : 'bg-blue-500/90 text-white border-blue-400/30 rounded-br-sm'
                    }`}>
                    <p className="text-sm leading-relaxed">{message.message}</p>

                    {/* Timestamp */}
                    <div className={`text-xs mt-1 ${
                        message.speaker === 'customer' ? 'text-gray-400' : 'text-blue-100'
                      }`}>
                      {message.timestamp}
                    </div>

                    {/* Pointer/Tail */}
                    {message.speaker === 'customer' ? (
                      <div className="absolute top-3 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white/95"></div>
                    ) : (
                      <div className="absolute top-3 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-500/90"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Meeting Summary Modal */}
      {showMeetingSummary && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Meeting Summary</h2>
                <button
                  onClick={() => setShowMeetingSummary(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Meeting Details</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Attendees:</strong> {meetingSummary.attendees.join(', ')}</p>
                    <p><strong>Duration:</strong> {meetingSummary.duration}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Key Discussion Points</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {meetingSummary.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Action Items</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {meetingSummary.actionItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Next Steps</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {meetingSummary.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t">
                <button
                  onClick={() => setShowMeetingSummary(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={sendMeetingSummary}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <span>Send MOM via Email</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Demo Controls */}
      <div className="absolute bottom-20 left-4 space-y-2">
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <button
            onClick={() => setIsListening(!isListening)}
            className="text-sm hover:text-gray-300 transition-colors mr-4"
          >
            {isListening ? 'Pause' : 'Resume'} Agent
          </button>
          <button
            onClick={resetDemo}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Reset Demo
          </button>
          {meetingEnded && (
            <button
              onClick={() => setShowMeetingSummary(true)}
              className="text-sm hover:text-gray-300 transition-colors ml-4"
            >
              View Summary
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <div className="text-xs">
            Scenario {currentSuggestionIndex + 1} of {allSuggestionFlows.length}
          </div>
          <div className="w-32 bg-gray-600 rounded-full h-1 mt-1">
            <div
              className="bg-green-400 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((currentSuggestionIndex + 1) / allSuggestionFlows.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.4s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MeetingAgent;
