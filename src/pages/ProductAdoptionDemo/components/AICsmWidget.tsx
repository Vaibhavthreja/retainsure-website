import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Maximize2, Volume2, VolumeX, Play, Square, Mic, MicOff, Sparkles, Bell, Send, User, Pause, Eye, Target, Zap, MousePointer } from 'lucide-react';

interface AICsmWidgetProps {
  isMinimized?: boolean;
  onMinimize?: () => void;
  onExpand?: () => void;
  setIsGuidedTourActive: (isActive: boolean) => void;
}

// Customer data and context
const customerProfile = {
  name: "John",
  company: "TechCorp",
  plan: "Premium",
  joinDate: "2024-08-15",
  goals: ["Improve email open rates", "Increase webinar signups"],
  currentMetrics: {
    openRate: "24.8%",
    clickRate: "2.1%",
    conversionRate: "1.2%"
  },
  industryBenchmarks: {
    openRate: "30%",
    clickRate: "3.8%",
    conversionRate: "2.5%"
  },
  lastActivity: "2024-12-20",
  healthScore: 75,
  riskLevel: "Medium"
};

const bugUpdates = [
  {
    id: "BUG-2024-156",
    title: "Email template preview not loading",
    status: "Fixed",
    reportedDate: "2024-12-15",
    fixedDate: "2024-12-19",
    description: "Template preview was failing due to CSS rendering issue",
    fix: "Updated the CSS parser to handle custom fonts properly. Preview now loads 3x faster.",
    impact: "High",
    category: "Template Editor"
  },
  {
    id: "BUG-2024-142",
    title: "Analytics dashboard slow loading",
    status: "In Progress",
    reportedDate: "2024-12-10",
    description: "Dashboard takes 15+ seconds to load campaign data",
    eta: "2024-12-22",
    category: "Analytics"
  }
];

const warmupPlan = {
  phase1: {
    title: "Foundation (Week 1-2)",
    tasks: [
      "Set up domain authentication (SPF, DKIM, DMARC)",
      "Create 3 high-performing email templates",
      "Build your first welcome series journey",
      "Import and segment your contact list"
    ]
  },
  phase2: {
    title: "Optimization (Week 3-4)",
    tasks: [
      "Launch A/B tests on subject lines",
      "Set up behavioral triggers",
      "Create re-engagement campaigns",
      "Implement advanced analytics tracking"
    ]
  },
  phase3: {
    title: "Scale (Week 5-8)",
    tasks: [
      "Launch multi-channel campaigns",
      "Set up advanced automation workflows",
      "Implement predictive analytics",
      "Create customer lifecycle journeys"
    ]
  }
};

const AICsmWidget: React.FC<AICsmWidgetProps> = ({ isMinimized = false, onMinimize, onExpand, setIsGuidedTourActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'recommendations'>('chat');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [inputText, setInputText] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const [lastAIMessageText, setLastAIMessageText] = useState('');
  const [activeWorkflow, setActiveWorkflow] = useState<string | null>(null);
  const [currentUserStory, setCurrentUserStory] = useState<any>(null);
  const [userStoryStep, setUserStoryStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [avatarState, setAvatarState] = useState<'idle' | 'speaking' | 'listening' | 'thinking'>('idle');
  const [isControllingScreen, setIsControllingScreen] = useState(false);
  const [currentPointer, setCurrentPointer] = useState<{x: number, y: number, message: string, action?: string} | null>(null);
  const [isExecutingTask, setIsExecutingTask] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [taskProgress, setTaskProgress] = useState<{total: number, completed: number, currentTask: string} | null>(null);
  const [isWaitingForUser, setIsWaitingForUser] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [expandedBug, setExpandedBug] = useState<string | null>(null);
  const [currentUseCase, setCurrentUseCase] = useState<string | null>(null);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: `Hey ${customerProfile.name}! I'm Jaine, your dedicated AI Customer Success Manager. I've been reviewing your progress since our onboarding call on August 15th, and I have some important updates based on the goals we discussed:`,
      bulletPoints: [
        { icon: '🐛', title: 'Bug Update', text: 'Remember that template preview issue you reported last week? Great news - our engineering team has fixed it! Your templates should now load 3x faster.' },
        { icon: '📊', title: 'Performance Alert', text: `During our onboarding, you mentioned wanting to achieve 24% open rates and 3.8% click rates. I'm seeing you're currently at ${customerProfile.currentMetrics.openRate} open rate and ${customerProfile.currentMetrics.clickRate} click rate - we need to close this gap to hit your Q1 targets.` },
        { icon: '🎯', title: 'Webinar Journey - Still Pending', text: 'You mentioned in our onboarding call that webinar signups are crucial for your business growth. I notice you still haven\'t set up the automated webinar journey we discussed - this could be costing you 40% of potential conversions.' }
      ],
      actions: [
        { id: 'setup-journey', text: 'Setup Webinar Journey Now', type: 'primary' },
        { id: 'performance-review', text: 'Show Me Performance Gap Analysis', type: 'secondary' }
      ],
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  // Audio playback ref for ElevenLabs
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Voice synthesis function using ElevenLabs API
  const speakText = async (text: string) => {
    if (!voiceEnabled) return;

    // Save the text being spoken
    setLastAIMessageText(text);

    // Stop any current speech
    stopSpeaking();

    // Clean text for speech (remove emojis and special characters)
    const cleanText = text
      .replace(/[🎉🐛📊🎯✨🚨📈⚙️]/g, '') // Remove emojis
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markdown
      .replace(/`(.*?)`/g, '$1') // Remove code markdown
      .replace(/#{1,6}\s/g, '') // Remove headers
      .replace(/\n+/g, '. ') // Replace line breaks with periods
      .trim();

    if (!cleanText) return;

    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    if (!apiKey || apiKey === 'your_elevenlabs_api_key_here') {
      console.error('ElevenLabs API key not configured');
      return;
    }

    try {
      setIsSpeaking(true);
      setAvatarState('speaking');

      // ElevenLabs API call - using Rachel voice with turbo model for faster response
      const voiceId = 'EXAVITQu4vr4xnSDxMaL'; // Rachel voice ID
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
        {
          method: 'POST',
          headers: {
            'Accept': 'audio/mpeg',
            'Content-Type': 'application/json',
            'xi-api-key': apiKey,
          },
          body: JSON.stringify({
            text: cleanText,
            model_id: 'eleven_turbo_v2',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.8,
              style: 0.0,
              use_speaker_boost: true
            },
            optimize_streaming_latency: 4,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create and play audio immediately
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => {
        setIsSpeaking(false);
        setAvatarState('idle');
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setIsSpeaking(false);
        setAvatarState('idle');
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      await audio.play();

    } catch (error) {
      console.error('Error with ElevenLabs TTS:', error);
      setIsSpeaking(false);
      setAvatarState('idle');
    }
  };

  // Stop speaking function
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
    }
    setIsSpeaking(false);
    setAvatarState('idle');
  };

  // Toggle voice function
  const toggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setVoiceEnabled(!voiceEnabled);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle voice enable/disable
  useEffect(() => {
    if (!voiceEnabled && isSpeaking) {
      stopSpeaking();
    } else if (voiceEnabled && !isSpeaking && lastAIMessageText) {
      // Auto-play last AI message when unmuting
      speakText(lastAIMessageText);
    }
  }, [voiceEnabled]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
        setTranscript('');
      };

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        setTranscript(finalTranscript || interimTranscript);
        if (finalTranscript) {
          handleVoiceMessage(finalTranscript);
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
        setTranscript('');
      };

      recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        setTranscript('');
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceMessage = (text: string) => {
    setInputText(text);
    handleSendMessage();
  };

  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  // Enhanced Professional Avatar
  const ProfessionalAvatar = ({ size = 'normal', state = 'idle' }) => {
    const isLarge = size === 'large';
    const containerClass = isLarge ? 'w-16 h-16' : 'w-8 h-8';

    return (
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#039143] to-[#027a3a] text-white shadow-lg ${containerClass}`}>
        <img src="/jaine.jpeg" alt="Jaine" className="rounded-full w-full h-full object-cover" />

        {/* Voice indicators */}
        {state === 'speaking' && (
          <div className="absolute inset-0 rounded-full animate-pulse-light bg-white opacity-30" />
        )}
        {state === 'listening' && (
          <div className="absolute inset-0 rounded-full animate-ping-slow bg-blue-300 opacity-50" />
        )}
        {state === 'thinking' && (
          <div className="absolute inset-0 rounded-full animate-pulse-fast bg-yellow-300 opacity-50" />
        )}
      </div>
    );
  };

  // Advanced Screen Control with Task Execution
  const ScreenPointer = () => {
    if (!currentPointer || !isControllingScreen) return null;

    return (
      <div
        className="fixed z-[9999] transition-all duration-500 ease-in-out"
        style={{ left: currentPointer.x, top: currentPointer.y }}
      >
        {/* AI Jaine's Cursor */}
        <MousePointer className="w-8 h-8 text-[#039143] drop-shadow-lg animate-bounce-subtle" />

        {/* Name tag */}
        <div className="absolute -top-8 left-4 bg-[#039143] text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
          AI Jaine
        </div>

        {/* Action bubble */}
        {currentPointer.message && (
          <div className="absolute top-4 left-8 bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-gray-200 animate-fade-in-up">
            {currentPointer.message}
          </div>
        )}

        {/* Ripple effects */}
        <div className="absolute inset-0 -m-2 rounded-full bg-[#039143] opacity-30 animate-ripple" />
        <div className="absolute inset-0 -m-4 rounded-full bg-[#039143] opacity-20 animate-ripple-delay" />
      </div>
    );
  };

  // Task Progress Indicator
  const TaskProgressIndicator = () => {
    if (!taskProgress) return null;

    return (
      <div className="fixed bottom-4 right-4 z-[9998] bg-white p-4 rounded-lg shadow-xl border border-gray-200 flex items-center space-x-3 animate-fade-in-up">
        <div className="relative">
          <ProfessionalAvatar size="normal" state="thinking" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-800 text-sm flex items-center space-x-2">
            <Zap className="w-4 h-4 text-[#039143]" />
            <span>AI JAINE IS WORKING</span>
          </div>
          <div className="text-gray-600 text-xs mt-1">
            {taskProgress.currentTask}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
            <div
              className="bg-[#039143] h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(taskProgress.completed / taskProgress.total) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Step {taskProgress.completed} of {taskProgress.total} {Math.round((taskProgress.completed / taskProgress.total) * 100)}% complete
          </div>
        </div>
        <button onClick={() => { setIsExecutingTask(false); setTaskProgress(null); setIsControllingScreen(false); setCurrentPointer(null); onExpand?.(); }} className="text-gray-400 hover:text-gray-600" >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  };

  // Waiting for User Indicator
  const WaitingIndicator = () => {
    if (!isWaitingForUser) return null;

    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] bg-purple-600 text-white p-4 rounded-lg shadow-xl flex items-center space-x-3 animate-fade-in-up">
        <Eye className="w-5 h-5" />
        <span className="font-semibold text-sm">Waiting for you to click...</span>
        <button onClick={() => { setIsWaitingForUser(false); setIsControllingScreen(false); setCurrentPointer(null); onExpand?.(); }} className="text-purple-200 hover:text-white" >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  };

  // Bug Updates Component
  const BugUpdateCard = ({ bug }: { bug: typeof bugUpdates[0] }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-2 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setExpandedBug(expandedBug === bug.id ? null : bug.id)} >
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-800">{bug.title}</h4>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${bug.status === 'Fixed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {bug.status}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">#{bug.id} • {bug.category}</p>
      {expandedBug === bug.id && (
        <div className="mt-3 text-sm text-gray-700">
          <p className="font-medium mt-2">Description:</p>
          <p>{bug.description}</p>
          {bug.fix && (
            <>
              <p className="font-medium mt-2">Fix Applied:</p>
              <p>{bug.fix}</p>
            </>
          )}
          <p className="text-xs text-gray-500 mt-2">Reported: {bug.reportedDate} {bug.fixedDate && `• Fixed: ${bug.fixedDate}`} {bug.eta && `• ETA: ${bug.eta}`}</p>
        </div>
      )}
    </div>
  );

  // Performance Review Component
  const PerformanceReview = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
      <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
        <Target className="w-5 h-5 mr-2 text-[#039143]" /> 📋 YOUR GOALS VS CURRENT PERFORMANCE
      </h3>
      <p className="text-sm text-gray-700 mb-3">From our onboarding call: "I want to achieve industry-leading email performance to increase webinar attendance."</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>Open Rate Goal: <span className="font-semibold text-red-600">{customerProfile.currentMetrics.openRate}</span> → <span className="font-semibold">{customerProfile.industryBenchmarks.openRate}</span> (Gap: -5.2%)</li>
        <li>Click Rate Goal: <span className="font-semibold text-red-600">{customerProfile.currentMetrics.clickRate}</span> → <span className="font-semibold">{customerProfile.industryBenchmarks.clickRate}</span> (Gap: -1.7%)</li>
        <li>Conversion Goal: <span className="font-semibold text-red-600">{customerProfile.currentMetrics.conversionRate}</span> → <span className="font-semibold">{customerProfile.industryBenchmarks.conversionRate}</span> (Gap: -1.3%)</li>
      </ul>

      <h4 className="font-bold text-md text-gray-800 mb-2 flex items-center">
        <Sparkles className="w-4 h-4 mr-2 text-blue-500" /> 💡 BASED ON YOUR TECHCORP USE CASE
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>• Subject Line Optimization: Your current "Newsletter #42" style isn\'t working. Let\'s test personalized subject lines like "Hey {customerProfile.name}, your TechCorp insights are ready"</li>
        <li>• Webinar Journey: You mentioned 60% of your revenue comes from webinar attendees - this automation is critical</li>
        <li>• Behavioral Triggers: Set up the "engaged but didn\'t convert" sequence we discussed for your SaaS prospects</li>
        <li>• Churn Prevention: The re-engagement campaign for inactive users (your #1 concern from onboarding)</li>
      </ul>
      <p className="text-sm text-gray-700 mb-4">If these quick fixes don\'t work - we might need to do a warmup of your domains. Do you want me to generate a warmup plan?</p>

      <h4 className="font-bold text-md text-gray-800 mb-2 flex items-center">
        <Zap className="w-4 h-4 mr-2 text-yellow-500" /> 🎯 IMPACT PROJECTION
      </h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        <li>• +2,080 more email opens per month (5.2% improvement)</li>
        <li>• +180 more clicks per month (1.7% improvement)</li>
        <li>• +$12,000 additional revenue from webinar conversions</li>
      </ul>
      <p className="text-sm text-gray-700">This gets you to your Q1 goal of "3x webinar attendance" that you mentioned.</p>
    </div>
  );

  // Warmup Plan Component
  const WarmupPlan = () => (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
      <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center">
        <Bell className="w-5 h-5 mr-2 text-blue-500" /> YOUR CUSTOM WARMUP PLAN
      </h3>
      {Object.entries(warmupPlan).map(([key, phase]) => (
        <div key={key} className="mb-4">
          <h4 className="font-semibold text-md text-gray-800 mb-2">{phase.title}</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {phase.tasks.map((task, index) => (
              <li key={index}>
                <span className="font-medium text-[#039143] mr-1">•</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // Execute CSM tasks
  const executeCSMTask = async (taskType: string) => {
    setCurrentUseCase(taskType);
    switch (taskType) {
      case 'performance-audit':
        setIsExecutingTask(true);
        setIsControllingScreen(true);
        onMinimize?.();
        const auditSteps = [
          { step: 'Navigating to Analytics', x: 128, y: 336, message: 'Analytics', action: 'navigate' },
          { step: 'Analyzing campaign performance', x: 600, y: 300, message: 'Reviewing metrics', action: 'analyze' },
          { step: 'Identifying improvement areas', x: 800, y: 400, message: 'Finding gaps', action: 'analyze' },
          { step: 'Generating recommendations', x: 500, y: 200, message: 'Creating action plan', action: 'generate' }
        ];
        await executeTaskSteps(auditSteps, 'Performance audit complete! I found 3 key areas for improvement.');
        break;
      case 'template-optimization':
        setIsExecutingTask(true);
        setIsControllingScreen(true);
        onMinimize?.();
        const templateSteps = [
          { step: 'Opening template library', x: 128, y: 154, message: 'Templates', action: 'navigate' },
          { step: 'Analyzing current templates', x: 600, y: 300, message: 'Reviewing designs', action: 'analyze' },
          { step: 'Suggesting improvements', x: 800, y: 200, message: 'Optimizing CTAs', action: 'optimize' }
        ];
        await executeTaskSteps(templateSteps, 'Template optimization complete! Updated 5 templates with better CTAs and mobile responsiveness.');
        break;
    }
  };

  // Generic task execution helper
  const executeTaskSteps = async (steps: any[], completionMessage: string) => {
    setTaskProgress({ total: steps.length, completed: 0, currentTask: steps[0]?.step || 'Starting...' });
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      setTaskProgress({ total: steps.length, completed: i, currentTask: step.step });
      setCurrentPointer({ x: step.x, y: step.y, message: step.message, action: step.action });
      await new Promise(resolve => setTimeout(resolve, 2500));
    }
    setTaskProgress({ total: steps.length, completed: steps.length, currentTask: 'Complete!' });
    setTimeout(() => {
      setIsExecutingTask(false);
      setTaskProgress(null);
      setIsControllingScreen(false);
      setCurrentPointer(null);
      setCurrentUseCase(null);
      onExpand?.();
      const completionMsg = {
        id: messages.length + 1,
        type: 'ai' as const,
        text: `🎉 ${completionMessage}`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, completionMsg]);
    }, 1500);
  };

  // Start guided tour (waits for user clicks)
  const startGuidedTour = () => {
    setIsExpanded(false);
    setGuidedMode(true);
    setIsControllingScreen(true);
    setIsWaitingForUser(true);
    setIsGuidedTourActive(true);
    setCurrentPointer({ x: 188, y: 264, message: "Click Journey", action: 'click' });

    // Listen for journey navigation
    const journeyNav = document.querySelector('[data-section="journey"]');
    if (journeyNav) {
      const handleJourneyClick = () => {
        setCurrentPointer({ x: 1280, y: 66, message: "Click Create journey", action: 'click' });
        journeyNav.removeEventListener('click', handleJourneyClick);

        // Listen for create journey click
        setTimeout(() => {
          const createBtn = document.getElementById('create-journey-btn');
          if (createBtn) {
            const handleCreateClick = () => {
              setCurrentPointer({ x: 904, y: 335, message: "Demo ends here", action: 'demo-end' });
              setIsWaitingForUser(false);
              setIsGuidedTourActive(false);
              createBtn.removeEventListener('click', handleCreateClick);
            };
            createBtn.addEventListener('click', handleCreateClick);
          }
        }, 500);
      };
      journeyNav.addEventListener('click', handleJourneyClick);
    }
  };

  // Handle action buttons
  const handleActionClick = (actionId: string) => {
    // Switch to chat tab when an action is clicked
    setActiveTab('chat');

    // Clear messages for new workflow actions
    const workflowActions = ['bug-updates', 'performance-review', 'warmup-plan', 'setup-journey', 'performance-audit', 'template-optimization'];
    if (workflowActions.includes(actionId)) {
      setMessages([]);
    }

    switch (actionId) {
      case 'bug-updates':
        const bugMessage = {
          id: messages.length + 1,
          type: 'ai' as const,
          text: "Here are the latest updates on your reported issues:",
          timestamp: new Date(),
          customComponent: 'bug-updates'
        };
        setMessages(prev => [...prev, bugMessage]);
        speakText("Here are the latest updates on your reported issues. The template preview issue you mentioned has been fixed and should now load much faster.");
        break;
      case 'performance-review':
        setActiveWorkflow('performance-review');
        const perfMessage = {
          id: messages.length + 1,
          type: 'ai' as const,
          text: `${customerProfile.name}, I've done a deep dive into your performance since our onboarding call. Remember when you told me your main goal was to "improve email engagement"? Here's where we stand against those targets:\n\nBased on your TechCorp use case, if the quick fixes don't work - we might need to do a warmup of your domains. Do you want me to generate a warmup plan?`,
          timestamp: new Date(),
          customComponent: 'performance-review',
          actions: [
            { id: 'warmup-plan', text: 'Generate Warmup Plan', type: 'primary' }
          ]
        };
        setMessages(prev => [...prev, perfMessage]);
        speakText(`${customerProfile.name}, I've analyzed your performance since our onboarding call. You wanted to achieve 30% open rates, but you're currently at 24.8%. Your click rate goal was 3.8% but you're at 2.1%. Based on your TechCorp use case, if the quick fixes don't work, we might need to do a warmup of your domains. Do you want me to generate a warmup plan?`);
        break;
      case 'warmup-plan':
        setActiveWorkflow(null);
        const warmupMessage = {
          id: messages.length + 1,
          type: 'ai' as const,
          text: `Perfect! Based on your "increase open rate" goal and your current performance gap, here's your custom success roadmap - an 8-week warmup plan designed specifically to get you from 24.8% to 30% open rate:`,
          timestamp: new Date(),
          customComponent: 'warmup-plan',
          actions: [
            { id: 'schedule-checkin', text: 'Schedule Weekly Check-ins', type: 'primary' }
          ]
        };
        setMessages(prev => [...prev, warmupMessage]);
        speakText("Perfect! Based on your improve open rate goal and your current performance gap, I've created a custom success roadmap. This 8-week warmup plan is designed specifically to get you from 24.8% to 30% open rate.");
        break;
      case 'setup-journey':
        setActiveWorkflow('webinar-journey');
        const journeyMessage = {
          id: messages.length + 1,
          type: 'ai' as const,
          text: `${customerProfile.name}, I remember during our onboarding you mentioned that webinar signups are your biggest conversion opportunity. You said "if I could just get more people to sign up for webinars, my business would grow 3x." \n\nIt's been 4 months since then, and I notice this journey still isn't set up. This automated sequence could be generating 40% more webinar attendees right now. Let me walk you through setting it up:`,
          timestamp: new Date(),
          actions: [
            { id: 'guide-me', text: 'Walk Me Through It Step-by-Step', type: 'primary' }
          ]
        };
        setMessages(prev => [...prev, journeyMessage]);
        speakText(`${customerProfile.name}, during our onboarding call, you mentioned webinar signups are crucial for your business growth. It's been 4 months, and this journey still isn't set up. This could be generating 40% more webinar attendees right now. Let me help you fix this.`);
        break;
      case 'performance-audit':
      case 'template-optimization':
        executeCSMTask(actionId);
        break;
      case 'guide-me':
        startGuidedTour();
        break;
      case 'show-analytics':
        // Navigate to analytics
        break;
      case 'schedule-checkin':
        const checkinMessage = {
          id: messages.length + 1,
          type: 'ai' as const,
          text: "Perfect! I've scheduled weekly check-ins every Tuesday at 2 PM. I'll review your progress, share insights, and help you stay on track with your goals. You'll get a summary email before each session. 📅",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, checkinMessage]);
        break;
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        text: inputText,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, newMessage]);
      setInputText('');
      setIsTyping(false);
      setAvatarState('thinking');

      setTimeout(() => {
        setAvatarState('speaking');
        setIsSpeaking(true);
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai' as const,
          text: getContextualAIResponse(inputText),
          timestamp: new Date(),
          actions: getContextualActions(inputText)
        };
        setMessages(prev => [...prev, aiResponse]);
        // Speak the AI response
        speakText(getContextualAIResponse(inputText));
        setTimeout(() => {
          setIsSpeaking(false);
          setAvatarState('idle');
        }, 2000);
      }, 1500);
    }
  };

  const getContextualAIResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();

    // Check if user is responding to active workflow context
    if (activeWorkflow === 'performance-review') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('sure') || lowerMsg.includes('generate') || lowerMsg.includes('warmup')) {
        return "Perfect! I'll generate that warmup plan for you right now.";
      }
      if (lowerMsg.includes('no') || lowerMsg.includes('not now')) {
        setActiveWorkflow(null);
        return "No problem! Let me know if you need anything else.";
      }
    }

    if (activeWorkflow === 'webinar-journey') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('sure') || lowerMsg.includes('walk') || lowerMsg.includes('guide')) {
        return "Great! Let me walk you through setting up this webinar journey step by step.";
      }
    }

    // Default responses based on keywords
    if (lowerMsg.includes('analytics') || lowerMsg.includes('performance')) {
      return `${customerProfile.name}, I remember you telling me during onboarding that "analytics are crucial for my decision making." Looking at your current performance against the goals we set:`
    }
    if (lowerMsg.includes('webinar')) {
      return `Perfect! You mentioned webinars are your biggest revenue driver. I've been tracking this since our call - you said "if I could just automate webinar signups, I'd save 10 hours a week." Let me show you exactly how to do this:`
    }

    return `Based on our previous conversations and your TechCorp goals, here's what I recommend focusing on right now:`
  };

  const getContextualActions = (userMessage: string) => {
    const lowerMsg = userMessage.toLowerCase();

    // Check if user is responding to active workflow context
    if (activeWorkflow === 'performance-review') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('sure') || lowerMsg.includes('generate') || lowerMsg.includes('warmup')) {
        return [
          { id: 'warmup-plan', text: 'Generate Warmup Plan', type: 'primary' }
        ];
      }
      if (lowerMsg.includes('no') || lowerMsg.includes('not now')) {
        return [];
      }
    }

    if (activeWorkflow === 'webinar-journey') {
      if (lowerMsg.includes('yes') || lowerMsg.includes('sure') || lowerMsg.includes('walk') || lowerMsg.includes('guide')) {
        return [
          { id: 'guide-me', text: 'Walk Me Through It Step-by-Step', type: 'primary' }
        ];
      }
    }

    // Default actions based on keywords
    if (lowerMsg.includes('analytics')) {
      return [
        { id: 'show-detailed-analytics', text: 'Show Me The Full Performance Breakdown', type: 'primary' },
        { id: 'auto-setup', text: 'Fix The Webinar Journey Issue Now', type: 'secondary' }
      ];
    }
    if (lowerMsg.includes('webinar')) {
      return [
        { id: 'setup-journey', text: 'Set Up Webinar Journey', type: 'primary' },
        { id: 'show-webinar-template', text: 'Show Me The Email Templates', type: 'secondary' }
      ];
    }

    return [];
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
    setAvatarState(isListening ? 'idle' : 'listening');
  };

  const handleExpand = () => {
    setIsExpanded(true);
    onExpand?.();
  };

  const handleMinimize = () => {
    setIsExpanded(false);
    onMinimize?.();
  };

  // If minimized during screen control, show minimal indicator
  if (isMinimized && (isControllingScreen || isExecutingTask)) {
    return (
      <>
        {/* Minimized floating indicator */}
        <div className="fixed bottom-4 right-4 z-[9999] bg-[#039143] text-white p-3 rounded-full shadow-lg flex items-center space-x-2 animate-bounce-subtle cursor-pointer" onClick={onExpand}>
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold text-sm">AI Jaine is active...</span>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Screen Control Components */}
      <ScreenPointer />
      <TaskProgressIndicator />
      <WaitingIndicator />

      {/* Screen Control Indicator */}
      {isControllingScreen && !isExecutingTask && !isWaitingForUser && (
        <div className="fixed top-4 right-4 z-[9998] bg-green-600 text-white p-3 rounded-lg shadow-xl flex items-center space-x-2 animate-fade-in-up">
          <Eye className="w-5 h-5" />
          <span className="font-semibold text-sm">AI Jaine is guiding you</span>
          <button onClick={() => { setIsControllingScreen(false); setCurrentPointer(null); onExpand?.(); }} className="text-green-200 hover:text-white" >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Avatar */}
      {!isExpanded && (
        <div
          className="fixed bottom-8 right-8 z-50 cursor-pointer animate-fade-in"
          onClick={handleExpand}
        >
          <div className="relative group">
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-green-400 animate-ping opacity-75"></div>
            <ProfessionalAvatar size="large" state={isSpeaking ? 'speaking' : 'idle'} />
            <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              1
            </div>
            <div className="absolute top-0 -left-4 transform -translate-x-full bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              AI Jaine - Your Success Manager
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Interface */}
      {isExpanded && (
        <div className="fixed bottom-4 right-4 w-[450px] h-[700px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#039143] to-[#027a3a] text-white rounded-t-xl">
            <div className="flex items-center space-x-3">
              <ProfessionalAvatar size="normal" state={avatarState} />
              <div>
                <h3 className="font-semibold text-lg">AI JAINE</h3>
                <p className="text-xs text-gray-200">
                  {isExecutingTask ? 'Working on your task...' : isControllingScreen ? 'Guiding you...' : 'Your Customer Success Manager'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleVoice} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                {voiceEnabled ? (
                  <Volume2 className="w-5 h-5" />
                ) : (
                  <VolumeX className="w-5 h-5" />
                )}
              </button>
              <button onClick={handleMinimize} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                <Minimize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsExpanded(false)} className="p-2 hover:bg-white/20 rounded-lg transition-colors" >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button onClick={() => setActiveTab('chat')} className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${ activeTab === 'chat' ? 'text-[#039143] border-b-2 border-[#039143] bg-green-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50' }`} >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Me Anything</span>
            </button>
            <button onClick={() => setActiveTab('recommendations')} className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${ activeTab === 'recommendations' ? 'text-[#039143] border-b-2 border-[#039143] bg-green-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50' }`} >
              <Sparkles className="w-4 h-4" />
              <span>Recommendations</span>
            </button>
          </div>

          {/* Recommendations Panel */}
          {activeTab === 'recommendations' ? (
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {/* Urgent Section */}
              <div className="mb-6">
                <h3 className="font-bold text-sm text-red-600 mb-3 flex items-center">
                  <Bell className="w-4 h-4 mr-2" /> 🚨 URGENT - BLOCKING YOUR GOALS
                </h3>
                <div className="space-y-3">
                  <button onClick={() => handleActionClick('bug-updates')} className="text-left p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors" >
                    <h4 className="font-semibold text-red-800">Fixed: Your Template Issue</h4>
                    <p className="text-sm text-red-700 mt-1">The preview bug you reported is resolved - your templates now load 3x faster</p>
                  </button>
                  <button onClick={() => handleActionClick('performance-review')} className="text-left p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors" >
                    <h4 className="font-semibold text-red-800">Missing Your Open Rate Target</h4>
                    <p className="text-sm text-red-700 mt-1">You're at {customerProfile.currentMetrics.openRate} vs your {customerProfile.industryBenchmarks.openRate} goal - this gap is hurting your Q1 targets</p>
                    <p className="text-xs text-red-600 mt-1">You might need a warmup plan to get back on track</p>
                  </button>
                </div>
              </div>

              {/* Growth Opportunities */}
              <div>
                <h3 className="font-bold text-sm text-[#039143] mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2" /> 📈 YOUR TOP PRIORITIES
                </h3>
                <div className="space-y-3">
                  <button onClick={() => handleActionClick('setup-journey')} className="text-left p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors" >
                    <h4 className="font-semibold text-green-800">Your Webinar Goal: Still Not Set Up</h4>
                    <p className="text-sm text-green-700 mt-1">You wanted to "3x webinar signups" - this journey will get you there but it's been 4 months</p>
                  </button>
                </div>
              </div>
            </div>
          ) : ( /* Chat Tab */
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className={`flex flex-col ${message.type === 'ai' ? 'items-start' : 'items-end'}`}>
                  <div className={`flex items-end max-w-[80%] ${message.type === 'ai' ? '' : 'flex-row-reverse'}`}>
                    {message.type === 'ai' && (
                      <div className="mr-2 self-start">
                        <ProfessionalAvatar size="normal" state={isSpeaking && lastAIMessageText === message.text ? 'speaking' : 'idle'} />
                      </div>
                    )}
                    <div className={`p-3 rounded-lg shadow-md ${message.type === 'ai' ? 'bg-white text-gray-800 border border-gray-200' : 'bg-[#039143] text-white'}`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>

                      {/* Bullet Points */}
                      {message.bulletPoints && (
                        <ul className="mt-2 space-y-1 text-sm">
                          {message.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">{point.icon}</span>
                              <span><span className="font-semibold">{point.title}</span>: {point.text}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Custom Components */}
                      {message.customComponent === 'bug-updates' && (
                        <div className="mt-3">
                          {bugUpdates.map(bug => (
                            <BugUpdateCard key={bug.id} bug={bug} />
                          ))}
                        </div>
                      )}
                      {message.customComponent === 'performance-review' && (
                        <PerformanceReview />
                      )}
                      {message.customComponent === 'warmup-plan' && (
                        <WarmupPlan />
                      )}

                      {/* Voice playback button for AI messages */}
                      {message.type === 'ai' && (
                        <div className="mt-2 flex items-center justify-end">
                          <button onClick={() => speakText(message.text)} className="text-xs text-gray-500 hover:text-[#039143] flex items-center space-x-1 transition-colors" disabled={isSpeaking} >
                            {isSpeaking && lastAIMessageText === message.text ? (
                              <>
                                <Volume2 className="w-3 h-3" /> Speaking...
                              </>
                            ) : (
                              <>
                                <Play className="w-3 h-3" /> Play
                              </>
                            )}
                          </button>
                          {isSpeaking && lastAIMessageText === message.text && (
                            <button onClick={stopSpeaking} className="ml-2 text-xs text-gray-500 hover:text-red-500 flex items-center space-x-1 transition-colors">
                              <Square className="w-3 h-3" /> Stop
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    {message.type === 'user' && (
                      <div className="ml-2">
                        <User className="w-8 h-8 rounded-full bg-gray-300 p-1 text-gray-600" />
                      </div>
                    )}
                  </div>
                  {/* Action buttons - Rendered below the AI message bubble */}
                  {message.type === 'ai' && message.actions && (
                    <div className="flex flex-wrap justify-start gap-2 mt-2 ml-10">
                      {message.actions.map((action) => (
                        <button key={action.id} onClick={() => handleActionClick(action.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${ action.type === 'primary' ? 'bg-[#039143] text-white hover:bg-[#027a3a]' : action.type === 'secondary' ? 'bg-green-100 text-[#039143] hover:bg-green-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200' }`} >
                          {action.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input - Only show in chat tab */}
          {activeTab === 'chat' && (
            <div className="p-4 border-t border-gray-200 bg-white flex items-center space-x-2">
              {/* Voice Input Status */}
              {!recognition && (
                <div className="text-red-500 text-xs">Voice input not supported in this browser</div>
              )}
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isListening ? "Listening..." : "Type or speak your question..."}
                disabled={isListening}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
              />
              <button
                onClick={toggleListening}
                className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                disabled={!recognition}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              <button
                onClick={handleSendMessage}
                className="p-2 rounded-full bg-[#039143] text-white hover:bg-[#027a3a] transition-colors"
                disabled={!inputText.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AICsmWidget;
