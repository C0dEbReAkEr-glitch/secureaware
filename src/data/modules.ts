import { Lock, AlertTriangle, Eye, Wifi, Mail, FileText, Shield, Smartphone, DivideIcon as LucideIcon } from 'lucide-react';

export interface ContentItem {
  type: 'text' | 'image' | 'tip';
  value: string;
}

export interface ContentSection {
  title: string;
  content: ContentItem[];
}

export interface QuizOption {
  label: string;
  value: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
}

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  content: ContentSection[];
  quiz: QuizQuestion[];
}

export const modules: ModuleType[] = [
  {
    id: 'password-security',
    title: 'Password Security',
    description: 'Learn how to create strong passwords and manage them securely to protect your accounts from unauthorized access.',
    icon: Lock,
    duration: 15,
    level: 'Beginner',
    content: [
      {
        title: 'Why Password Security Matters',
        content: [
          {
            type: 'text',
            value: 'Passwords are the first line of defense for your accounts and sensitive information. Weak passwords can be easily guessed or cracked by attackers, leading to unauthorized access, identity theft, and data breaches.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'According to recent studies, over 80% of data breaches are caused by weak or compromised passwords. This module will teach you how to create strong passwords and manage them securely.'
          }
        ]
      },
      {
        title: 'Creating Strong Passwords',
        content: [
          {
            type: 'text',
            value: 'A strong password should be:'
          },
          {
            type: 'text',
            value: '• At least 12 characters long\n• Include a mix of uppercase and lowercase letters\n• Include numbers and special characters\n• Not contain easily guessable information (like your name or birthdate)\n• Unique for each account'
          },
          {
            type: 'tip',
            value: 'Consider using a passphrase - a sequence of random words - which is both secure and easier to remember than a complex password.'
          },
          {
            type: 'text',
            value: 'Example of a weak password: "password123"\nExample of a strong password: "Tr@vel-Sunset-Mountain-7914"'
          }
        ]
      },
      {
        title: 'Password Management Best Practices',
        content: [
          {
            type: 'text',
            value: 'Managing multiple strong passwords can be challenging. Here are some best practices:'
          },
          {
            type: 'text',
            value: '• Use a password manager to securely store and generate passwords\n• Enable two-factor authentication (2FA) whenever possible\n• Change passwords regularly, especially for critical accounts\n• Never reuse passwords across different accounts\n• Don\'t share passwords with others'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'Password managers like LastPass, 1Password, or Bitwarden can generate and store strong, unique passwords for all your accounts while you only need to remember one master password.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'ps-q1',
        question: 'Which of the following is the strongest password?',
        options: [
          { label: 'password123', value: 'a' },
          { label: 'John1990!', value: 'b' },
          { label: 'P@$$w0rd', value: 'c' },
          { label: 'Glacier-76-Dolphin-Sunset!', value: 'd' }
        ],
        correctAnswer: 'd'
      },
      {
        id: 'ps-q2',
        question: 'What is the recommended minimum length for a strong password?',
        options: [
          { label: '6 characters', value: 'a' },
          { label: '8 characters', value: 'b' },
          { label: '12 characters', value: 'c' },
          { label: '20 characters', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'ps-q3',
        question: 'Which of the following is a best practice for password management?',
        options: [
          { label: 'Use the same password for all accounts to avoid forgetting them', value: 'a' },
          { label: 'Write down passwords on sticky notes near your computer', value: 'b' },
          { label: 'Use a password manager and enable two-factor authentication', value: 'c' },
          { label: 'Share passwords with trusted colleagues for convenience', value: 'd' }
        ],
        correctAnswer: 'c'
      }
    ]
  },
  {
    id: 'phishing-awareness',
    title: 'Phishing Awareness',
    description: 'Learn to identify and avoid phishing attempts that try to steal your sensitive information through deceptive emails and websites.',
    icon: AlertTriangle,
    duration: 20,
    level: 'Beginner',
    content: [
      {
        title: 'Understanding Phishing Attacks',
        content: [
          {
            type: 'text',
            value: 'Phishing is a type of social engineering attack where attackers disguise themselves as trustworthy entities to trick victims into revealing sensitive information such as passwords, credit card numbers, or personal data.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Phishing attacks can occur through various channels, including email, text messages, phone calls, and fake websites. They often create a sense of urgency or fear to pressure victims into acting quickly without thinking.'
          }
        ]
      },
      {
        title: 'Common Signs of Phishing',
        content: [
          {
            type: 'text',
            value: 'Learn to identify these red flags that may indicate a phishing attempt:'
          },
          {
            type: 'text',
            value: '• Suspicious sender email addresses (misspelled domain names)\n• Generic greetings instead of your name\n• Poor grammar and spelling errors\n• Urgent requests or threats\n• Requests for sensitive information\n• Suspicious links or attachments\n• Offers that seem too good to be true'
          },
          {
            type: 'tip',
            value: 'Always hover over links before clicking to preview the actual URL destination. If it looks suspicious or different from what you expect, don\'t click it.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          }
        ]
      },
      {
        title: 'How to Protect Yourself',
        content: [
          {
            type: 'text',
            value: 'Follow these best practices to protect yourself from phishing attacks:'
          },
          {
            type: 'text',
            value: '• Verify the sender\'s identity before responding or clicking links\n• Never provide sensitive information via email or unexpected requests\n• Use multi-factor authentication for your accounts\n• Keep your software and browsers updated\n• Use anti-phishing tools and security software\n• When in doubt, contact the company directly using official contact information (not from the suspicious message)'
          },
          {
            type: 'tip',
            value: 'If you receive a suspicious email claiming to be from your bank, instead of clicking any links, open a new browser window and type the bank\'s official website address directly.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'ph-q1',
        question: 'Which of the following is NOT a common sign of a phishing email?',
        options: [
          { label: 'Urgent requests requiring immediate action', value: 'a' },
          { label: 'Personalized greeting with your correct name', value: 'b' },
          { label: 'Misspelled company domain name in the sender\'s address', value: 'c' },
          { label: 'Requests for sensitive information like passwords', value: 'd' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 'ph-q2',
        question: 'What should you do if you receive an email from your bank asking you to verify your account information by clicking a link?',
        options: [
          { label: 'Click the link and provide the requested information', value: 'a' },
          { label: 'Reply to the email asking for verification', value: 'b' },
          { label: 'Call the bank using the phone number provided in the email', value: 'c' },
          { label: 'Contact your bank directly using the official website or phone number you know to be legitimate', value: 'd' }
        ],
        correctAnswer: 'd'
      },
      {
        id: 'ph-q3',
        question: 'Why do phishing attacks often create a sense of urgency?',
        options: [
          { label: 'To help you solve problems quickly', value: 'a' },
          { label: 'To pressure you into acting without thinking critically', value: 'b' },
          { label: 'To save you time', value: 'c' },
          { label: 'To test your response time', value: 'd' }
        ],
        correctAnswer: 'b'
      }
    ]
  },
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    description: 'Understand the importance of data privacy and learn how to protect your personal information online and in the workplace.',
    icon: Eye,
    duration: 25,
    level: 'Intermediate',
    content: [
      {
        title: 'Understanding Data Privacy',
        content: [
          {
            type: 'text',
            value: 'Data privacy refers to the proper handling, processing, storage, and usage of personal information. It involves ensuring that data is collected with consent, used only for intended purposes, and protected from unauthorized access.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'In today\'s digital world, personal data has become a valuable commodity. Companies collect vast amounts of information about users, which can be used for targeted advertising, product development, or sold to third parties.'
          }
        ]
      },
      {
        title: 'Types of Sensitive Data',
        content: [
          {
            type: 'text',
            value: 'Understanding what constitutes sensitive data is the first step in protecting it:'
          },
          {
            type: 'text',
            value: '• Personally Identifiable Information (PII): Names, addresses, phone numbers, email addresses\n• Financial information: Credit card numbers, bank account details\n• Health information: Medical records, health insurance information\n• Login credentials: Usernames, passwords\n• Biometric data: Fingerprints, facial recognition data\n• Location data: GPS coordinates, travel history\n• Communications: Emails, messages, call logs'
          },
          {
            type: 'tip',
            value: 'Even seemingly harmless data points can be combined to create a detailed profile about you. Be mindful of all the information you share online.'
          }
        ]
      },
      {
        title: 'Protecting Your Data Privacy',
        content: [
          {
            type: 'text',
            value: 'Follow these best practices to enhance your data privacy:'
          },
          {
            type: 'text',
            value: '• Review privacy settings on social media and other accounts\n• Read privacy policies before signing up for services\n• Use strong, unique passwords and enable two-factor authentication\n• Be selective about the information you share online\n• Use privacy-focused browsers and search engines\n• Regularly delete cookies and browsing history\n• Consider using a VPN for sensitive activities\n• Encrypt sensitive data and communications'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'Regularly audit the apps and services that have access to your data. Remove permissions for apps you no longer use or don\'t need.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'dp-q1',
        question: 'Which of the following is considered Personally Identifiable Information (PII)?',
        options: [
          { label: 'Weather forecast for your city', value: 'a' },
          { label: 'General news articles you read', value: 'b' },
          { label: 'Your home address and phone number', value: 'c' },
          { label: 'The current time', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'dp-q2',
        question: 'What is a good practice for protecting your data privacy online?',
        options: [
          { label: 'Share your location with all apps to get personalized recommendations', value: 'a' },
          { label: 'Use the same password across all accounts for convenience', value: 'b' },
          { label: 'Accept all cookies on websites without reading the notices', value: 'c' },
          { label: 'Regularly review and adjust privacy settings on your accounts', value: 'd' }
        ],
        correctAnswer: 'd'
      },
      {
        id: 'dp-q3',
        question: 'Why should you read privacy policies before signing up for services?',
        options: [
          { label: 'They contain entertaining content', value: 'a' },
          { label: 'To understand how your data will be collected, used, and shared', value: 'b' },
          { label: 'They are legally required reading', value: 'c' },
          { label: 'To find discount codes hidden in the text', value: 'd' }
        ],
        correctAnswer: 'b'
      }
    ]
  },
  {
    id: 'wifi-security',
    title: 'Wi-Fi Security',
    description: 'Learn how to secure your wireless networks and safely use public Wi-Fi to prevent unauthorized access and data theft.',
    icon: Wifi,
    duration: 20,
    level: 'Intermediate',
    content: [
      {
        title: 'Wi-Fi Security Basics',
        content: [
          {
            type: 'text',
            value: 'Wi-Fi networks provide convenient internet access but can be vulnerable to attacks if not properly secured. Unsecured networks allow attackers to intercept data, access shared resources, or use your connection for malicious activities.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Understanding Wi-Fi security protocols and best practices is essential for protecting your personal and work-related information when connecting to wireless networks.'
          }
        ]
      },
      {
        title: 'Securing Your Home Wi-Fi',
        content: [
          {
            type: 'text',
            value: 'Follow these steps to secure your home wireless network:'
          },
          {
            type: 'text',
            value: '• Change default router login credentials\n• Use WPA3 encryption (or at least WPA2) - never use WEP\n• Create a strong, unique Wi-Fi password\n• Change the default network name (SSID)\n• Enable the router\'s firewall\n• Keep router firmware updated\n• Use a guest network for visitors\n• Disable remote management\n• Consider MAC address filtering for additional security'
          },
          {
            type: 'tip',
            value: 'Place your router in a central location, away from windows, to minimize signal leakage outside your home while maintaining good coverage throughout.'
          }
        ]
      },
      {
        title: 'Public Wi-Fi Safety',
        content: [
          {
            type: 'text',
            value: 'Public Wi-Fi networks in cafes, airports, and hotels pose significant security risks. Protect yourself with these precautions:'
          },
          {
            type: 'text',
            value: '• Verify the network name before connecting (ask staff for the correct name)\n• Use a VPN to encrypt your connection\n• Avoid accessing sensitive accounts (banking, email) on public Wi-Fi\n• Disable auto-connect to Wi-Fi networks\n• Use HTTPS websites (look for the padlock icon)\n• Turn off file sharing when on public networks\n• Log out of accounts when finished\n• Consider using your mobile data instead for sensitive tasks'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'Be wary of "evil twin" networks - malicious hotspots set up to mimic legitimate networks. Always confirm the exact network name with the establishment.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'ws-q1',
        question: 'Which Wi-Fi security protocol offers the best protection?',
        options: [
          { label: 'WEP', value: 'a' },
          { label: 'WPA', value: 'b' },
          { label: 'WPA2', value: 'c' },
          { label: 'WPA3', value: 'd' }
        ],
        correctAnswer: 'd'
      },
      {
        id: 'ws-q2',
        question: 'What is the best practice when using public Wi-Fi for sensitive transactions?',
        options: [
          { label: 'Connect to any available free network', value: 'a' },
          { label: 'Use a VPN to encrypt your connection', value: 'b' },
          { label: 'Share your location to improve connection quality', value: 'c' },
          { label: 'Disable your device\'s firewall temporarily', value: 'd' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 'ws-q3',
        question: 'Why should you change your router\'s default admin credentials?',
        options: [
          { label: 'To make it easier to remember', value: 'a' },
          { label: 'It\'s required by law', value: 'b' },
          { label: 'Default credentials are often well-known and publicly available', value: 'c' },
          { label: 'To improve Wi-Fi speed', value: 'd' }
        ],
        correctAnswer: 'c'
      }
    ]
  },
  {
    id: 'email-security',
    title: 'Email Security',
    description: 'Discover best practices for securing your email communications and protecting against common email-based threats.',
    icon: Mail,
    duration: 15,
    level: 'Beginner',
    content: [
      {
        title: 'Email Security Fundamentals',
        content: [
          {
            type: 'text',
            value: 'Email remains one of the most common vectors for cyberattacks. Threats include phishing, malware distribution, business email compromise (BEC), and unauthorized account access. Proper email security practices are essential for both personal and professional communications.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Email security involves both technical measures and user awareness to prevent unauthorized access and protect against various threats.'
          }
        ]
      },
      {
        title: 'Securing Your Email Account',
        content: [
          {
            type: 'text',
            value: 'Follow these best practices to secure your email accounts:'
          },
          {
            type: 'text',
            value: '• Use a strong, unique password for your email account\n• Enable two-factor authentication (2FA)\n• Regularly review account activity and check for suspicious logins\n• Use a secure and reputable email provider\n• Keep your email client and devices updated\n• Be cautious with email forwarding rules\n• Log out of your email when using shared computers\n• Consider using separate email accounts for different purposes'
          },
          {
            type: 'tip',
            value: 'Your email account often serves as a recovery method for other accounts, making it a prime target for attackers. Securing it should be a top priority.'
          }
        ]
      },
      {
        title: 'Safe Email Practices',
        content: [
          {
            type: 'text',
            value: 'Adopt these habits to protect yourself from email-based threats:'
          },
          {
            type: 'text',
            value: '• Verify the sender\'s email address before responding or taking action\n• Be suspicious of unexpected attachments, even from known senders\n• Don\'t click on links in emails without verifying their destination\n• Be wary of emails creating urgency or threatening negative consequences\n• Use email encryption for sensitive communications\n• Avoid sending sensitive information (like credit card details) via email\n• Be careful with auto-complete to prevent sending to the wrong recipient\n• Use the BCC field when sending to multiple recipients to protect their privacy'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'When in doubt about an email\'s legitimacy, contact the sender through a different channel (phone call, official website) to verify before taking any action.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'es-q1',
        question: 'Why is securing your email account particularly important?',
        options: [
          { label: 'Email accounts are expensive to replace', value: 'a' },
          { label: 'Email is often used as a recovery method for other accounts', value: 'b' },
          { label: 'Email providers charge fees for compromised accounts', value: 'c' },
          { label: 'Email addresses cannot be changed once created', value: 'd' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 'es-q2',
        question: 'What should you do if you receive an unexpected email with an attachment from a colleague?',
        options: [
          { label: 'Open it immediately to see what they sent', value: 'a' },
          { label: 'Forward it to everyone in your department', value: 'b' },
          { label: 'Contact the colleague through another channel to verify they sent it', value: 'c' },
          { label: 'Reply to the email asking what the attachment contains', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'es-q3',
        question: 'Which of the following is a best practice for email security?',
        options: [
          { label: 'Using the same password for all email accounts', value: 'a' },
          { label: 'Clicking "Remember me" on public computers', value: 'b' },
          { label: 'Enabling two-factor authentication', value: 'c' },
          { label: 'Opening all attachments to check for viruses', value: 'd' }
        ],
        correctAnswer: 'c'
      }
    ]
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering',
    description: 'Learn to recognize and defend against social engineering tactics that manipulate people into divulging confidential information.',
    icon: FileText,
    duration: 25,
    level: 'Intermediate',
    content: [
      {
        title: 'Understanding Social Engineering',
        content: [
          {
            type: 'text',
            value: 'Social engineering is the psychological manipulation of people to get them to divulge confidential information or perform actions that may compromise security. Unlike technical hacking, social engineering exploits human behavior and trust rather than system vulnerabilities.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Social engineers use various psychological tactics including creating a sense of urgency, fear, trust, or curiosity to manipulate victims into making security mistakes.'
          }
        ]
      },
      {
        title: 'Common Social Engineering Techniques',
        content: [
          {
            type: 'text',
            value: 'Be aware of these common social engineering tactics:'
          },
          {
            type: 'text',
            value: '• Phishing: Deceptive emails, messages, or websites that appear legitimate\n• Pretexting: Creating a fabricated scenario to obtain information\n• Baiting: Offering something enticing to exchange for information\n• Quid pro quo: Providing a service in exchange for information\n• Tailgating: Following someone into a restricted area\n• Vishing: Voice phishing via phone calls\n• Smishing: SMS/text message phishing\n• Impersonation: Pretending to be someone else (IT support, executive, etc.)'
          },
          {
            type: 'tip',
            value: 'Social engineers often research their targets on social media to make their approaches more convincing. Be mindful of what personal information you share publicly.'
          }
        ]
      },
      {
        title: 'Defending Against Social Engineering',
        content: [
          {
            type: 'text',
            value: 'Protect yourself with these defensive strategies:'
          },
          {
            type: 'text',
            value: '• Verify identities through official channels before providing information\n• Be skeptical of unsolicited contacts, especially those creating urgency\n• Never provide sensitive information in response to an unsolicited request\n• Follow proper authentication procedures, even with seemingly legitimate requests\n• Be wary of offers that seem too good to be true\n• Limit the personal information you share online\n• Report suspicious activities to your security team\n• Trust your instincts - if something feels off, it probably is'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'When receiving unusual requests, especially involving sensitive information or financial transactions, always verify through a different communication channel than the one the request came through.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'se-q1',
        question: 'What is the primary difference between social engineering and technical hacking?',
        options: [
          { label: 'Social engineering is always legal', value: 'a' },
          { label: 'Social engineering exploits human behavior rather than system vulnerabilities', value: 'b' },
          { label: 'Technical hacking is more effective', value: 'c' },
          { label: 'Social engineering only works on social media platforms', value: 'd' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 'se-q2',
        question: 'You receive a phone call from someone claiming to be IT support who needs your password to fix an urgent system issue. What should you do?',
        options: [
          { label: 'Provide your password since it\'s an urgent issue', value: 'a' },
          { label: 'Ask for their employee ID and then provide your password', value: 'b' },
          { label: 'Hang up and contact IT support directly using the official company contact information', value: 'c' },
          { label: 'Give them a hint to your password instead of the full password', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'se-q3',
        question: 'Which psychological tactic do social engineers often use to make their victims act without thinking?',
        options: [
          { label: 'Creating a sense of urgency or fear', value: 'a' },
          { label: 'Providing detailed technical explanations', value: 'b' },
          { label: 'Sending written documentation', value: 'c' },
          { label: 'Suggesting victims take their time to decide', value: 'd' }
        ],
        correctAnswer: 'a'
      }
    ]
  },
  {
    id: 'mobile-device-security',
    title: 'Mobile Device Security',
    description: 'Protect your smartphones and tablets from security threats with best practices for secure mobile device usage.',
    icon: Smartphone,
    duration: 20,
    level: 'Beginner',
    content: [
      {
        title: 'Mobile Security Fundamentals',
        content: [
          {
            type: 'text',
            value: 'Mobile devices store vast amounts of personal and professional data while being more vulnerable to theft, loss, and attacks than traditional computers. Proper security measures are essential to protect the sensitive information on these devices.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Mobile security threats include malicious apps, unsecured Wi-Fi connections, phishing, device theft, and vulnerabilities in outdated operating systems.'
          }
        ]
      },
      {
        title: 'Securing Your Mobile Device',
        content: [
          {
            type: 'text',
            value: 'Follow these best practices to secure your mobile devices:'
          },
          {
            type: 'text',
            value: '• Use strong authentication (PIN, password, pattern, biometrics)\n• Keep your operating system and apps updated\n• Only download apps from official app stores\n• Review app permissions before installing\n• Enable remote tracking and wiping capabilities\n• Encrypt your device data\n• Regularly back up your data\n• Install a reputable mobile security app\n• Be cautious when connecting to public Wi-Fi\n• Disable Bluetooth and Wi-Fi when not in use'
          },
          {
            type: 'tip',
            value: 'Consider using a six-digit PIN instead of a four-digit one. The additional digits significantly increase the number of possible combinations, making it harder to guess.'
          }
        ]
      },
      {
        title: 'Safe Mobile Practices',
        content: [
          {
            type: 'text',
            value: 'Adopt these habits for safer mobile device usage:'
          },
          {
            type: 'text',
            value: '• Be cautious of SMS phishing (smishing) attempts\n• Don\'t store sensitive information unnecessarily\n• Log out of apps when not in use, especially financial and work apps\n• Use secure messaging apps for sensitive communications\n• Avoid jailbreaking or rooting your device\n• Be mindful of physical security - don\'t leave your device unattended\n• Use app-specific passwords for accounts when available\n• Consider using a VPN for public Wi-Fi connections\n• Regularly review installed apps and remove unused ones'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'Set up automatic app updates to occur overnight while your device is charging to ensure you always have the latest security patches without disrupting your day.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'md-q1',
        question: 'Which of the following is a best practice for mobile device security?',
        options: [
          { label: 'Using a simple PIN like "1234" for quick access', value: 'a' },
          { label: 'Downloading apps from any website that offers them for free', value: 'b' },
          { label: 'Keeping your operating system and apps updated', value: 'c' },
          { label: 'Sharing your device passcode with trusted friends', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'md-q2',
        question: 'Why should you review app permissions before installing an app?',
        options: [
          { label: 'To see if the app is popular', value: 'a' },
          { label: 'To check if the app requires payment', value: 'b' },
          { label: 'To ensure the app isn\'t requesting unnecessary access to sensitive data', value: 'c' },
          { label: 'App permissions don\'t matter for security', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'md-q3',
        question: 'What is "jailbreaking" or "rooting" and why is it a security concern?',
        options: [
          { label: 'It\'s a way to improve device security and should be done regularly', value: 'a' },
          { label: 'It\'s bypassing manufacturer restrictions, which can expose your device to security vulnerabilities', value: 'b' },
          { label: 'It\'s a method to recover forgotten passwords', value: 'c' },
          { label: 'It\'s a technique to increase battery life', value: 'd' }
        ],
        correctAnswer: 'b'
      }
    ]
  },
  {
    id: 'security-incident-reporting',
    title: 'Security Incident Reporting',
    description: 'Learn how to identify and properly report security incidents to help protect your organization from cyber threats.',
    icon: Shield,
    duration: 15,
    level: 'Beginner',
    content: [
      {
        title: 'Understanding Security Incidents',
        content: [
          {
            type: 'text',
            value: 'A security incident is any event that potentially compromises the confidentiality, integrity, or availability of information or systems. Prompt reporting of incidents is crucial for minimizing damage and preventing similar incidents in the future.'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'text',
            value: 'Examples of security incidents include suspected phishing emails, malware infections, unauthorized access, data breaches, lost or stolen devices, and suspicious system behavior.'
          }
        ]
      },
      {
        title: 'Recognizing Security Incidents',
        content: [
          {
            type: 'text',
            value: 'Be alert to these common signs of a security incident:'
          },
          {
            type: 'text',
            value: '• Unexpected system behavior or performance issues\n• Unauthorized changes to files or settings\n• Strange network traffic or connections\n• Unexpected account lockouts or password changes\n• Missing or altered data\n• Suspicious emails or messages\n• Unfamiliar programs or processes running\n• Disabled security tools (antivirus, firewall)\n• Unusual account activity or login attempts'
          },
          {
            type: 'tip',
            value: 'Trust your instincts. If something seems unusual or "off" with your system, it\'s better to report it and be wrong than to ignore a potential security incident.'
          }
        ]
      },
      {
        title: 'Reporting Security Incidents',
        content: [
          {
            type: 'text',
            value: 'Follow these steps when reporting a security incident:'
          },
          {
            type: 'text',
            value: '1. Act quickly - report incidents as soon as they\'re detected\n2. Contact your IT security team through the designated reporting channel\n3. Provide detailed information about what you observed\n4. Include relevant details like timestamps, affected systems, and any error messages\n5. Preserve evidence - don\'t delete suspicious emails or files\n6. Follow instructions from the security team\n7. Maintain confidentiality about the incident\n8. Document your actions for future reference'
          },
          {
            type: 'image',
            value: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
          },
          {
            type: 'tip',
            value: 'Many organizations have specific incident reporting procedures and forms. Familiarize yourself with your company\'s process before an incident occurs.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'sir-q1',
        question: 'Why is prompt reporting of security incidents important?',
        options: [
          { label: 'To assign blame to responsible parties', value: 'a' },
          { label: 'To minimize damage and prevent similar incidents in the future', value: 'b' },
          { label: 'To avoid personal responsibility', value: 'c' },
          { label: 'It\'s not important as long as the issue resolves itself', value: 'd' }
        ],
        correctAnswer: 'b'
      },
      {
        id: 'sir-q2',
        question: 'Which of the following is a sign of a potential security incident?',
        options: [
          { label: 'Scheduled system updates', value: 'a' },
          { label: 'Regular password expiration notices', value: 'b' },
          { label: 'Unexpected system behavior or performance issues', value: 'c' },
          { label: 'Normal network traffic', value: 'd' }
        ],
        correctAnswer: 'c'
      },
      {
        id: 'sir-q3',
        question: 'What should you do with suspicious emails when reporting a security incident?',
        options: [
          { label: 'Delete them immediately to prevent infection', value: 'a' },
          { label: 'Forward them to all colleagues as a warning', value: 'b' },
          { label: 'Preserve them as evidence and follow your organization\'s reporting procedure', value: 'c' },
          { label: 'Reply to ask the sender to stop sending suspicious emails', value: 'd' }
        ],
        correctAnswer: 'c'
      }
    ]
  }
];