import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Clock, TrendingUp, Users, Calendar, CheckSquare, AlertTriangle, DollarSign, Mail, FileText, CheckCircle, Trash2 } from 'lucide-react';

// --- INTERFACES ---
interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isOptions?: boolean;
  options?: WorkflowOption[];
  isCustomerCards?: boolean;
  customerCards?: CustomerCard[];
  isDetailedPlan?: boolean;
  detailedPlan?: DetailedPlan;
  isMeetingPrep?: boolean;
  meetingPrep?: MeetingPrep;
  isTaskList?: boolean;
  taskList?: Task[];
  isTaskDetail?: boolean;
  taskDetail?: TaskDetail;
  isBugsFeatures?: boolean;
  bugsFeatures?: BugFeatureUpdate[];
  isEmailDraft?: boolean;
  emailDraft?: EmailDraft;
}

interface WorkflowOption {
  id: string;
  title: string;
  cta: string;
  icon: React.ReactNode;
  workflow: string;
}

interface CustomerCard {
  id: string;
  name: string;
  company: string;
  riskLevel: 'high' | 'medium' | 'low';
  reason: string;
  value: string;
  type: 'churn' | 'upsell';
  details: string;
}

interface DetailedPlan {
  customerName: string;
  type: 'churn' | 'upsell';
  plan: string;
  email: string;
  tasks: string[];
}

interface MeetingPrep {
  meetingDetails: string;
  keyAccountDetails: string;
  productUsage: {
    headers: string[];
    rows: string[][];
  };
  supportEngagement: string;
  csEngagement: string;
}

interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  description: string;
  context: string;
  timeNeeded: string;
  dependencies?: string;
}

interface TaskDetail {
  task: Task;
  expanded: boolean;
}

interface BugFeatureUpdate {
  id: string;
  title: string;
  type: 'feature' | 'bug';
  description: string;
}

interface EmailDraft {
  subject: string;
  content: string;
  type: 'feature' | 'bug';
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const bugsFeatureUpdates: BugFeatureUpdate[] = [
    { id: 'bf1', title: 'Jira ticket updated, inform customer about the feature release', type: 'feature', description: 'New Advanced Analytics Dashboard feature has been released' },
    { id: 'bf2', title: 'Jira ticket updated, inform customer about the bug resolution', type: 'bug', description: 'Performance issue in data export functionality has been resolved' }
  ];

  const workflowOptions: WorkflowOption[] = [
    { id: '1', title: 'These 5 customers with highest churn risk', cta: 'Help me understand why?', icon: <TrendingUp size={20} className="text-red-500" />, workflow: 'churn-analysis' },
    { id: '2', title: 'These 2 customers are in upsell potential', cta: 'Help me understand why?', icon: <DollarSign size={20} className="text-green-500" />, workflow: 'upsell-analysis' },
    { id: '3', title: 'Meeting with Delta Corp', cta: 'Prepare me for the meeting', icon: <Calendar size={20} className="text-blue-500" />, workflow: 'meeting-prep' },
    { id: '4', title: '5 pending tasks from yesterday', cta: 'Help me with the tasks', icon: <CheckSquare size={20} className="text-yellow-500" />, workflow: 'task-management' },
    { id: '5', title: 'Bugs/Features updates', cta: 'Show me the updates', icon: <AlertTriangle size={20} className="text-purple-500" />, workflow: 'bugs-features-updates' }
  ];

  const churnCustomers: CustomerCard[] = [
    { id: 'c1', name: 'Sarah Johnson', company: 'TechFlow Industries', riskLevel: 'high', reason: '45% decrease in platform usage, no response to support tickets', value: '$45K ARR', type: 'churn', details: 'Contract renewal due in 2 weeks. Key stakeholder seems disengaged.' },
    { id: 'c2', name: 'Mike Chen', company: 'Marketing Plus LLC', riskLevel: 'high', reason: 'Downgraded plan, key contact left company', value: '$32K ARR', type: 'churn', details: 'New decision maker not familiar with our platform value.' },
    { id: 'c3', name: 'Lisa Rodriguez', company: 'Global Dynamics', riskLevel: 'medium', reason: 'Multiple billing disputes, competitive inquiry', value: '$28K ARR', type: 'churn', details: 'Price sensitivity and exploring alternatives.' },
    { id: 'c4', name: 'David Park', company: 'Innovation Corp', riskLevel: 'medium', reason: 'Integration issues, onboarding frustration', value: '$22K ARR', type: 'churn', details: 'Technical challenges preventing full adoption.' },
    { id: 'c5', name: 'Emma Wilson', company: 'Future Systems', riskLevel: 'medium', reason: 'Budget constraints, delayed payments', value: '$18K ARR', type: 'churn', details: 'Financial pressures affecting renewal likelihood.' }
  ];

  const upsellCustomers: CustomerCard[] = [
    { id: 'u1', name: 'Alex Thompson', company: 'DataFlow Solutions', riskLevel: 'high', reason: 'Usage at 180% of plan limits, team growth from 5 to 15 users', value: '$45K potential', type: 'upsell', details: 'High engagement with premium features during trial period.' },
    { id: 'u2', name: 'Rachel Kim', company: 'ScaleUp Ventures', riskLevel: 'high', reason: 'API rate limit requests, integrating with 5+ new tools', value: '$28K potential', type: 'upsell', details: 'Asked about white-label options and custom enterprise features.' }
  ];

  const pendingTasks: Task[] = [
    { id: 't1', title: 'Follow up with TechCorp on contract renewal', priority: 'high', dueDate: 'Overdue by 1 day', description: 'TechCorp ($120K ARR) contract expires in 10 days. Last contact was 5 days ago with no response to renewal proposal.', context: 'Key stakeholder Sarah Mitchell has been unresponsive. Contract includes auto-renewal clause but they\'ve expressed budget concerns.', timeNeeded: '45 minutes', dependencies: 'Pricing approval from sales team for 15% discount offer' },
    { id: 't2', title: 'Complete Q1 customer health score analysis', priority: 'high', dueDate: 'Due today', description: 'Analyze health scores for 150+ accounts to identify at-risk customers and expansion opportunities for Q1 planning.', context: 'Need to review usage data, support tickets, and engagement metrics. Results will drive Q1 outreach strategy.', timeNeeded: '2 hours', dependencies: 'Data export from analytics team (received yesterday)' },
    { id: 't3', title: 'Prepare QBR presentation for GlobalTech', priority: 'medium', dueDate: 'Due tomorrow', description: 'Create comprehensive quarterly business review for GlobalTech ($85K ARR) covering ROI, usage metrics, and roadmap alignment.', context: 'Meeting scheduled for Thursday 2 PM. Need to highlight 40% efficiency gains and discuss expansion into European markets.', timeNeeded: '1.5 hours', dependencies: 'Usage reports from product team' },
    { id: 't4', title: 'Onboard new customer: StartupXYZ', priority: 'medium', dueDate: 'Due Friday', description: 'Complete onboarding process for StartupXYZ ($25K ARR) including setup, training, and success metrics definition.', context: 'New customer signed last week. Team of 8 users needs training on advanced features. High growth potential.', timeNeeded: '3 hours total', dependencies: 'Technical setup completion from implementation team' },
    { id: 't5', title: 'Update customer success playbook', priority: 'low', dueDate: 'Due next week', description: 'Revise onboarding and renewal playbooks based on Q4 learnings and new product features.', context: 'Incorporate feedback from recent customer interviews and align with new product capabilities launched in December.', timeNeeded: '2 hours', dependencies: 'Product update documentation from product team' }
  ];

  const addBugsFeaturesMessage = () => {
    const bugsFeaturesMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: 'Here are the latest Jira ticket updates that need customer communication:',
      timestamp: new Date(),
      isBugsFeatures: true,
      bugsFeatures: bugsFeatureUpdates
    };
    setMessages(prev => [...prev, bugsFeaturesMessage]);
  };

  const addEmailDraftMessage = (updateType: 'feature' | 'bug') => {
    const emailDraft: EmailDraft = generateEmailDraft(updateType);
    const draftMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: `Here's the email draft for the ${updateType === 'feature' ? 'feature release' : 'bug resolution'} update:`,
      timestamp: new Date(),
      isEmailDraft: true,
      emailDraft: emailDraft
    };
    setMessages(prev => [...prev, draftMessage]);
  };

  const generateEmailDraft = (type: 'feature' | 'bug'): EmailDraft => {
    if (type === 'feature') {
      return {
        subject: 'Exciting New Feature: Advanced Analytics Dashboard Now Available',
        content: `Hi there,\n\nI'm excited to share some great news! We've just released a new Advanced Analytics Dashboard feature that I think will be incredibly valuable for your team.\n\nWhat's New:\n• Real-time data visualization with customizable charts\n• Advanced filtering and segmentation capabilities\n• Automated report scheduling and sharing\n• Enhanced export options with multiple formats\n• Mobile-responsive design for on-the-go access\n\nThis feature was developed based on feedback from customers like you who requested more powerful analytics capabilities. It's designed to help you gain deeper insights into your data and make more informed decisions.\n\nKey Benefits for Your Team:\n• Save 3-4 hours per week on manual report generation\n• Get real-time insights instead of waiting for daily reports\n• Create custom dashboards tailored to your specific needs\n• Share insights easily with stakeholders\n\nThe feature is now live in your account and ready to use. I'd love to schedule a 15-minute demo to show you how to get the most out of it.\n\nWould you be available for a quick call this week? I can walk you through the new capabilities and answer any questions you might have.\n\nBest regards,\nRichard\nCustomer Success Manager`,
        type: 'feature'
      };
    } else {
      return {
        subject: 'Issue Resolved: Data Export Performance Improvement',
        content: `Hi there,\n\nI wanted to personally reach out to let you know that we've successfully resolved the performance issue you reported with the data export functionality.\n\nIssue Summary:\n• Problem: Slow export times for large datasets (>10,000 records)\n• Impact: Export processes were taking 5-10 minutes instead of the usual 30-60 seconds\n• Root Cause: Database query optimization needed for large data sets\n\nResolution Details:\n• Our engineering team implemented optimized database queries\n• Added background processing for large exports\n• Improved memory management during export operations\n• Enhanced progress indicators for better user experience\n\nResults:\n• Export times reduced by 85% for large datasets\n• More reliable processing with fewer timeouts\n• Better user feedback during the export process\n• Improved overall system performance\n\nThe fix has been deployed and is now live in your account. You should notice significantly faster export times immediately.\n\nI sincerely apologize for any inconvenience this issue may have caused your team. We take these matters seriously and have implemented additional monitoring to prevent similar issues in the future.\n\nPlease don't hesitate to reach out if you experience any further issues or have questions about the improvements.\n\nThank you for your patience and continued partnership.\n\nBest regards,\nRichard\nCustomer Success Manager`,
        type: 'bug'
      };
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      setTimeout(() => {
        addAIMessage("Good Morning Richard, Let's make your day super productive today");
      }, 500);
      setTimeout(() => {
        addOptionsMessage();
      }, 1500);
    }
  }, []);

  const addAIMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addOptionsMessage = () => {
    const optionsMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: "Here are a few things you need to focus on for the day:",
      timestamp: new Date(),
      isOptions: true,
      options: workflowOptions
    };
    setMessages(prev => [...prev, optionsMessage]);
  };

  const addCustomerCardsMessage = (customers: CustomerCard[], type: 'churn' | 'upsell') => {
    const cardsMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: type === 'churn' ? "Here are the 5 customers with highest churn risk based on our AI analysis:" : "Here are the 2 customers with highest upsell potential:",
      timestamp: new Date(),
      isCustomerCards: true,
      customerCards: customers
    };
    setMessages(prev => [...prev, cardsMessage]);
  };

  const addDetailedPlanMessage = (customer: CustomerCard) => {
    const plan = generateDetailedPlan(customer);
    const planMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: `Here's a comprehensive ${customer.type === 'churn' ? 'churn mitigation' : 'upsell'} plan for ${customer.company}:`,
      timestamp: new Date(),
      isDetailedPlan: true,
      detailedPlan: plan
    };
    setMessages(prev => [...prev, planMessage]);
  };

  const addMeetingPrepMessage = () => {
    const meetingPrep: MeetingPrep = {
      meetingDetails: `**Meeting Details:**\n• Date: Today, 2:00 PM EST\n• Duration: 60 minutes\n• Attendees: Sarah Chen (CTO), Mike Rodriguez (VP Engineering), Lisa Wang (Product Manager)\n• Type: Quarterly Business Review + Contract Renewal Discussion`,
      keyAccountDetails: `• Client since: March 2022\n• Current Plan: Enterprise ($25K/month)\n• Contract Value: $300K annually\n• Contract Expires: February 28, 2025\n• Primary Contact: Sarah Chen (CTO)\n• Decision Makers: Sarah Chen, Mike Rodriguez, Lisa Wang\n• Team Size: 45 active users\n• Industry: Technology/Software Development\n• Company Size: 200+ employees`,
      productUsage: {
        headers: ['Metric', 'Current Month', 'Previous Month', 'Trend'],
        rows: [
          ['Active Users', '45', '42', '↗️ +7%'],
          ['API Calls', '2.1M', '1.8M', '↗️ +17%'],
          ['Storage Used', '850 GB', '780 GB', '↗️ +9%'],
          ['Feature Adoption', '78%', '65%', '↗️ +13%'],
          ['Platform Uptime', '99.9%', '99.8%', '↗️ +0.1%'],
          ['Resource Utilization', '95%', '87%', '↗️ +8%']
        ]
      },
      supportEngagement: `**Last 30 Days Summary:**\n• Total Tickets: 8 tickets\n• Resolved: 7 tickets (87.5% resolution rate)\n• Pending: 1 ticket (low priority)\n• Average Response Time: 2.3 hours\n• Average Resolution Time: 18 hours\n\n**Sentiment Analysis:**\n• Positive: 5 tickets (62.5%) - Feature requests and general inquiries\n• Neutral: 2 tickets (25%) - Technical configuration questions\n• Negative: 1 ticket (12.5%) - Integration complexity concern\n\n**Key Issues:**\n• Successfully resolved platform migration issues\n• Provided additional training for new DevOps features\n• One ongoing integration challenge with legacy system`,
      csEngagement: `**Last 30 Days Summary:**\n• Total Emails: 12 emails exchanged\n• Meetings: 3 meetings (2 scheduled, 1 ad-hoc)\n• Response Rate: 100% (highly engaged)\n• Average Response Time: 4.2 hours\n\n**Meeting Summary:**\n• Weekly check-in (Jan 15): Discussed Q1 goals and feature roadmap\n• Technical review (Jan 22): Platform migration success celebration\n• Ad-hoc call (Jan 28): Budget planning for Q2 expansion\n\n**Email Themes:**\n• Contract renewal discussions (4 emails)\n• Feature requests and roadmap alignment (3 emails)\n• Team expansion planning (3 emails)\n• General updates and success metrics (2 emails)\n\n**Engagement Level:** High - Proactive communication, quick responses, strategic discussions`
    };
    const prepMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: 'Here\'s your comprehensive meeting preparation for Delta Corp:',
      timestamp: new Date(),
      isMeetingPrep: true,
      meetingPrep: meetingPrep
    };
    setMessages(prev => [...prev, prepMessage]);
  };

  const addTaskListMessage = () => {
    const taskMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: 'Here are your 5 pending tasks from yesterday, organized by priority:',
      timestamp: new Date(),
      isTaskList: true,
      taskList: pendingTasks
    };
    setMessages(prev => [...prev, taskMessage]);
  };

  const addTaskDetailMessage = (task: Task) => {
    const taskDetailMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: `Here are the details for: ${task.title}`,
      timestamp: new Date(),
      isTaskDetail: true,
      taskDetail: { task, expanded: true }
    };
    setMessages(prev => [...prev, taskDetailMessage]);
  };

  const handleMeetingPrepared = () => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: "I'm prepared", timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => {
      addAIMessage("Great! You're all set for the Delta Corp meeting. Let's continue with your other priorities for today.");
      setTimeout(() => addOptionsMessage(), 1000);
    }, 1500);
  };

  const handleTaskClick = (task: Task) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: `Show details for: ${task.title}`, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => addTaskDetailMessage(task), 1000);
  };

  const handleTaskAction = (action: string, taskTitle: string) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: action, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => {
      let responseMessage = '';
      switch (action) {
        case 'Done': responseMessage = `✅ Great! I've marked "${taskTitle}" as completed. Well done!`; break;
        case 'Change due date to tomorrow': responseMessage = `📅 I've updated the due date for "${taskTitle}" to tomorrow. I'll remind you again.`; break;
        case 'Not relevant anymore': responseMessage = `🗑️ I've removed "${taskTitle}" from your task list as it's no longer relevant.`; break;
      }
      addAIMessage(`${responseMessage}\n\nLet's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1000);
    }, 1500);
  };

  const handleBugFeatureClick = (update: BugFeatureUpdate) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: update.title, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => addEmailDraftMessage(update.type), 1000);
  };

  const handleSendUpdateEmail = (emailType: 'feature' | 'bug') => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: 'Send email', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => {
      const updateTypeText = emailType === 'feature' ? 'feature release' : 'bug resolution';
      addAIMessage(`✅ Email sent successfully for the ${updateTypeText} update!\n\nThe customer has been notified and I've added a follow-up reminder to your calendar. Let's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1000);
    }, 1500);
  };

  const handleSendEmail = (customerName: string) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: `Send email to ${customerName}`, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => {
      addAIMessage(`✅ Email sent successfully to ${customerName}!\n\nThe email has been delivered and I've added a follow-up reminder to your calendar. Let's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1000);
    }, 1500);
  };

  const generateDetailedPlan = (customer: CustomerCard): DetailedPlan => {
    if (customer.type === 'churn') {
      return {
        customerName: customer.company,
        type: 'churn',
        plan: `**Churn Mitigation Strategy for ${customer.company}**\n\n**Immediate Actions (Next 48 hours):**\n• Schedule emergency call with ${customer.name}\n• Prepare retention offer with 20% discount\n• Escalate technical issues to engineering team\n• Assign dedicated success manager\n\n**Short-term Plan (1-2 weeks):**\n• Conduct comprehensive health check\n• Provide additional training sessions\n• Implement custom integration support\n• Create success metrics dashboard\n\n**Long-term Strategy (1-3 months):**\n• Quarterly business reviews\n• Executive relationship building\n• Feature roadmap alignment\n• Success story documentation`,
        email: `Subject: Urgent: Let's discuss your success with our platform\n\nHi ${customer.name},\n\nI hope this email finds you well. I've been reviewing your account and noticed some changes in platform usage that I'd like to discuss with you.\n\nAs your dedicated customer success partner, I want to ensure you're getting maximum value from our platform. I'd love to schedule a brief 30-minute call this week to:\n\n• Understand any challenges you might be facing\n• Discuss how we can better support your team's goals\n• Share some new features that could benefit your workflow\n• Explore ways to optimize your current setup\n\nWould Thursday at 2 PM or Friday at 10 AM work for you? I'm also happy to work around your schedule.\n\nLooking forward to reconnecting and ensuring your continued success.\n\nBest regards,\nRichard\nCustomer Success Manager`,
        tasks: [
          'Schedule call with Sarah Johnson within 24 hours',
          'Prepare retention proposal with pricing options',
          'Coordinate with engineering team on technical issues',
          'Create custom onboarding plan',
          'Set up weekly check-in meetings',
          'Document all interactions in CRM',
          'Prepare executive summary for leadership team'
        ]
      };
    } else {
      return {
        customerName: customer.company,
        type: 'upsell',
        plan: `**Upsell Strategy for ${customer.company}**\n\n**Opportunity Assessment:**\n• Current usage exceeds plan limits by 80%\n• Team growth indicates scaling needs\n• High engagement with premium features\n• Budget cycle aligns with Q1 planning\n\n**Upsell Approach:**\n• Position as growth enablement, not cost increase\n• Demonstrate ROI with current usage metrics\n• Offer implementation support and training\n• Create custom package with volume discounts\n\n**Value Proposition:**\n• Unlimited API calls and integrations\n• Priority support and dedicated success manager\n• Advanced analytics and reporting\n• Custom branding and white-label options`,
        email: `Subject: Exciting growth opportunity for ${customer.company}\n\nHi ${customer.name},\n\nCongratulations on the incredible growth I've been seeing in your account! Your team's usage has increased by 180% over the past quarter, which is a fantastic indicator of the value you're getting from our platform.\n\nI wanted to reach out because I believe we have an exciting opportunity to support your continued growth even better. Based on your current usage patterns and team expansion, I'd love to discuss how our Enterprise plan could:\n\n• Eliminate the API rate limits you've been hitting\n• Provide the advanced integrations your team has been requesting\n• Offer the white-label capabilities you inquired about\n• Include priority support for your growing team\n\nI've prepared a custom proposal that I think you'll find compelling, including some special pricing for early adopters like yourself.\n\nWould you be available for a 30-minute call this week to discuss how we can support your next phase of growth?\n\nBest regards,\nRichard\nCustomer Success Manager`,
        tasks: [
          'Prepare custom Enterprise proposal with ROI analysis',
          'Schedule expansion conversation within 3 days',
          'Coordinate with sales team on pricing approval',
          'Create implementation timeline and support plan',
          'Gather usage analytics and growth metrics',
          'Prepare competitive analysis and differentiation',
          'Set up executive sponsor introduction'
        ]
      };
    }
  };

  const simulateTyping = (callback: () => void, delay: number = 2000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleOptionClick = (option: WorkflowOption) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: option.cta, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => handleWorkflowResponse(option.workflow));
  };

  const handleCustomerCardClick = (customer: CustomerCard) => {
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: `Create ${customer.type === 'churn' ? 'churn mitigation' : 'upsell'} plan and draft email for ${customer.company}`, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    simulateTyping(() => addDetailedPlanMessage(customer), 1500);
  };

  const handleWorkflowResponse = (workflow: string) => {
    switch (workflow) {
      case 'churn-analysis': addCustomerCardsMessage(churnCustomers, 'churn'); break;
      case 'upsell-analysis': addCustomerCardsMessage(upsellCustomers, 'upsell'); break;
      case 'meeting-prep': addMeetingPrepMessage(); break;
      case 'task-management': addTaskListMessage(); break;
      case 'bugs-features-updates': addBugsFeaturesMessage(); break;
      default: addAIMessage("I'm here to help you with that. What specific aspect would you like to focus on?");
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;
    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: userInput, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput('');
    simulateTyping(() => {
      addAIMessage(`I've received your message: "${currentInput}". How can I assist further?`);
      setTimeout(() => addOptionsMessage(), 1500);
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm font-sans">
        <div className="flex items-center gap-3">
          <img 
            src="/RetainSureIcon.png" 
            alt="RetainSure AI" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-800 font-sans">RetainAI</h1>
            <p className="text-sm text-gray-500 font-sans">Your AI customer success manager</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="animate-fade-in">
            {message.type === 'ai' ? (
              <div className="flex gap-3">
                <img 
                  src="/RetainSureIcon.png" 
                  alt="RetainSure AI" 
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100 max-w-4xl font-sans">
                    <pre className="whitespace-pre-wrap text-gray-800 font-medium leading-relaxed font-sans">
                      {message.content}
                    </pre>
                    {message.isOptions && message.options && (
                      <div className="mt-4 space-y-3">
                        {message.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-200 group"
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-green-600 group-hover:text-green-700 mt-1" style={{color: '#039143'}}>
                                {option.icon}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-800 mb-1 font-sans">{option.title}</h3>
                                <p className="text-sm font-medium group-hover:text-green-700 font-sans" style={{color: '#039143'}}>
                                  {option.cta} →
                                </p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-2 ml-1 font-sans">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  
                  {/* Customer Cards */}
                  {message.isCustomerCards && message.customerCards && (
                    <div className="mt-4 space-y-3">
                      {message.customerCards.map((customer) => (
                        <button
                          key={customer.id}
                          onClick={() => handleCustomerCardClick(customer)}
                          className="w-full text-left p-4 bg-white border border-gray-200 hover:border-green-300 rounded-xl transition-all duration-200 group hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-red-500 mt-1">
                              {customer.type === 'churn' ? (
                                <AlertTriangle className="w-5 h-5" />
                              ) : (
                                <DollarSign className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-800 font-sans">{customer.company}</h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${ 
                                  customer.riskLevel === 'high' 
                                    ? 'bg-red-100 text-red-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                } font-sans`}>
                                  {customer.riskLevel} {customer.type === 'churn' ? 'risk' : 'potential'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2 font-sans">{customer.reason}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700 font-sans">{customer.value}</span>
                                <span className="text-sm font-medium text-green-600 group-hover:text-green-700 font-sans">
                                  Create {customer.type === 'churn' ? 'mitigation' : 'upsell'} plan →
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Detailed Plan */}
                  {message.isDetailedPlan && message.detailedPlan && (
                    <div className="mt-4 space-y-4">
                      {/* Plan Section */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-blue-800 font-sans">
                            {message.detailedPlan.type === 'churn' ? 'Churn Mitigation Plan' : 'Upsell Strategy'}
                          </h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-blue-700 leading-relaxed font-sans">
                          {message.detailedPlan.plan}
                        </pre>
                      </div>
                      
                      {/* Email Section */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Mail className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-green-800 font-sans">Draft Email</h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-green-700 leading-relaxed font-sans bg-white p-3 rounded border">
                          {message.detailedPlan.email}
                        </pre>
                      </div>
                      
                      {/* Tasks Section */}
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-purple-600" />
                          <h3 className="font-semibold text-purple-800 font-sans">Action Items</h3>
                        </div>
                        <div className="space-y-2">
                          {message.detailedPlan.tasks.map((task, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-purple-700 font-sans">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Send Email Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleSendEmail(message.detailedPlan.customerName)}
                          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans"
                        >
                          <Send className="w-4 h-4" />
                          Send Email
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Bugs/Features Updates */}
                  {message.isBugsFeatures && message.bugsFeatures && (
                    <div className="mt-4 space-y-3">
                      {message.bugsFeatures.map((update) => (
                        <button
                          key={update.id}
                          onClick={() => handleBugFeatureClick(update)}
                          className="w-full text-left p-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 group hover:shadow-md"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`w-3 h-3 rounded-full mt-2 ${ 
                              update.type === 'feature' ? 'bg-green-500' : 'bg-blue-500'
                            }`}></div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-800 mb-1 font-sans">{update.title}</h3>
                              <p className="text-sm text-gray-600 mb-2 font-sans">{update.description}</p>
                              <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 font-sans">
                                Create email draft →
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Email Draft */}
                  {message.isEmailDraft && message.emailDraft && (
                    <div className="mt-4 space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Mail className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-blue-800 font-sans">Email Draft</h3>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="mb-3">
                            <span className="text-sm font-medium text-gray-600 font-sans">Subject: </span>
                            <span className="text-sm font-semibold text-gray-800 font-sans">{message.emailDraft.subject}</span>
                          </div>
                          <div className="border-t pt-3">
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-sans">
                              {message.emailDraft.content}
                            </pre>
                          </div>
                        </div>
                      </div>
                      
                      {/* Send Email Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleSendUpdateEmail(message.emailDraft.type)}
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans"
                        >
                          <Send className="w-4 h-4" />
                          Send Email
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Meeting Preparation */}
                  {message.isMeetingPrep && message.meetingPrep && (
                    <div className="mt-4 space-y-4">
                      {/* Meeting Details */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <h3 className="font-semibold text-blue-800 font-sans">Meeting Details</h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-blue-700 leading-relaxed font-sans">
                          {message.meetingPrep.meetingDetails}
                        </pre>
                      </div>
                      
                      {/* Key Account Details */}
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-green-800 font-sans">Key Account Details</h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-green-700 leading-relaxed font-sans">
                          {message.meetingPrep.keyAccountDetails}
                        </pre>
                      </div>
                      
                      {/* Product Usage Table */}
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-purple-600" />
                          <h3 className="font-semibold text-purple-800 font-sans">Product Usage</h3>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white rounded-lg border border-purple-200">
                            <thead>
                              <tr className="bg-purple-100">
                                {message.meetingPrep.productUsage.headers.map((header, index) => (
                                  <th key={index} className="px-4 py-2 text-left text-sm font-semibold text-purple-800 border-b border-purple-200 font-sans">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {message.meetingPrep.productUsage.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-purple-25">
                                  {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-4 py-2 text-sm text-purple-700 border-b border-purple-100 font-sans">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      {/* Support Engagement */}
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle className="w-5 h-5 text-orange-600" />
                          <h3 className="font-semibold text-orange-800 font-sans">Support Engagement</h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-orange-700 leading-relaxed font-sans">
                          {message.meetingPrep.supportEngagement}
                        </pre>
                      </div>
                      
                      {/* CS Engagement */}
                      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Mail className="w-5 h-5 text-teal-600" />
                          <h3 className="font-semibold text-teal-800 font-sans">CS Engagement</h3>
                        </div>
                        <pre className="whitespace-pre-wrap text-sm text-teal-700 leading-relaxed font-sans">
                          {message.meetingPrep.csEngagement}
                        </pre>
                      </div>
                      
                      {/* I'm Prepared Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={handleMeetingPrepared}
                          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans"
                        >
                          <CheckCircle className="w-4 h-4" />
                          I'm Prepared
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Task List */}
                  {message.isTaskList && message.taskList && (
                    <div className="mt-4 space-y-3">
                      {message.taskList.map((task) => (
                        <button
                          key={task.id}
                          onClick={() => handleTaskClick(task)}
                          className="w-full text-left p-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 group hover:shadow-md"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${ 
                                task.priority === 'high' ? 'bg-red-500' : 
                                task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                              }`}></div>
                              <h3 className="font-medium text-gray-800">{task.title}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${ 
                                task.dueDate.includes('Overdue') ? 'bg-red-100 text-red-700' :
                                task.dueDate.includes('today') ? 'bg-orange-100 text-orange-700' :
                                'bg-blue-100 text-blue-700'
                              } font-sans`}>
                                {task.dueDate}
                              </span>
                              <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 font-sans">
                                View details →
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* Task Detail */}
                  {message.isTaskDetail && message.taskDetail && (
                    <div className="mt-4 space-y-4">
                      {/* Task Overview */}
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-4 h-4 rounded-full ${ 
                            message.taskDetail.task.priority === 'high' ? 'bg-red-500' : 
                            message.taskDetail.task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <h3 className="font-semibold text-blue-800 font-sans">{message.taskDetail.task.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ml-auto ${ 
                            message.taskDetail.task.dueDate.includes('Overdue') ? 'bg-red-100 text-red-700' :
                            message.taskDetail.task.dueDate.includes('today') ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-blue-700'
                          } font-sans`}>
                            {message.taskDetail.task.dueDate}
                          </span>
                        </div>
                        <p className="text-sm text-blue-700 mb-3 font-sans">{message.taskDetail.task.description}</p>
                        <div className="space-y-2 text-sm font-sans">
                          <div><strong>Context:</strong> {message.taskDetail.task.context}</div>
                          <div><strong>Time needed:</strong> {message.taskDetail.task.timeNeeded}</div>
                          {message.taskDetail.task.dependencies && (
                            <div><strong>Dependencies:</strong> {message.taskDetail.task.dependencies}</div>
                          )}
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 justify-center">
                        <button
                          onClick={() => handleTaskAction('Done', message.taskDetail.task.title)}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Done
                        </button>
                        <button
                          onClick={() => handleTaskAction('Change due date to tomorrow', message.taskDetail.task.title)}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans"
                        >
                          <Calendar className="w-4 h-4" />
                          Change due date to tomorrow
                        </button>
                        <button
                          onClick={() => handleTaskAction('Not relevant anymore', message.taskDetail.task.title)}
                          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans"
                        >
                          <AlertTriangle className="w-4 h-4" />
                          Not relevant anymore
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex gap-3 justify-end">
                <div className="flex-1 flex justify-end">
                  <div className="text-white rounded-2xl rounded-tr-md p-4 shadow-sm max-w-2xl font-sans" style={{background: 'linear-gradient(to right, #039143, #027a3a)'}}>
                    <p className="leading-relaxed font-sans">{message.content}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-fade-in">
            <img 
              src="/RetainSureIcon.png" 
              alt="RetainSure AI" 
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about your business..."
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:border-transparent font-sans"
              style={{'--tw-ring-color': '#039143'} as React.CSSProperties}
            />
          </div>
          <button 
            onClick={handleSendMessage}
            className="w-12 h-12 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
            style={{
              background: 'linear-gradient(to right, #039143, #027a3a)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #027a3a, #025a2b)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #039143, #027a3a)';
            }}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;