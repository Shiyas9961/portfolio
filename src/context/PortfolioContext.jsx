import { createContext, useContext } from 'react';
import { 
  Server, 
  Cloud, 
  Database, 
  Code2, 
  Monitor, 
  GitBranch, 
  Network,
  Terminal,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

// Portfolio Data
const portfolioData = {
  personalInfo: {
    name: "Mohamed Shiyas B",
    title: "DevOps Engineer | Software Developer Transitioning to Infrastructure & Automation",
    subtitle: "1.5+ years of hands-on experience with backend development, cloud infrastructure, monitoring tools, and microservices. Passionate about building scalable, reliable systems.",
    description: "Building a strong foundation in software development while transitioning to DevOps engineering",
    location: "Open to Remote & Hybrid Roles",
    status: "Available for DevOps Roles",
    yearsExperience: "1.5+",
    technologies: "10+",
    commitment: "100%"
  },

  skillCategories: [
    {
      title: "Backend Development",
      icon: Code2,
      skills: [
        "Django REST Framework",
        "FastAPI", 
        "Flask",
        "Go Lang",
        "Node.js",
        "Python",
        "REST APIs"
      ]
    },
    {
      title: "DevOps & Monitoring",
      icon: Monitor,
      skills: [
        "Prometheus",
        "Grafana",
        "Docker",
        "Linux Administration",
        "System Monitoring",
        "Performance Tuning"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS CloudWatch", 
        "VPS Management",
        "Cloud Architecture",
        "Infrastructure as Code"
      ]
    },
    {
      title: "Microservices & Messaging",
      icon: Network,
      skills: [
        "RabbitMQ",
        "Message Queues",
        "Service Architecture",
        "API Gateway",
        "Distributed Systems"
      ]
    },
    {
      title: "Version Control & CI/CD",
      icon: GitBranch,
      skills: [
        "Git",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Code Review",
        "Branch Management"
      ]
    },
    {
      title: "Frontend & Web",
      icon: Terminal,
      skills: [
        "React",
        "HTML/CSS",
        "JavaScript",
        "Responsive Design",
        "Web APIs"
      ]
    }
  ],

  experiences: [
    {
      title: "Associate Software Developer",
      company: "Current Role",
      location: "Remote",
      duration: "2023 - Present",
      period: "1.5 Years",
      description: [
        "Developed and maintained backend services using Django REST Framework and FastAPI",
        "Implemented monitoring solutions using Prometheus and Grafana for system observability", 
        "Built microservices communication layer using RabbitMQ message queues",
        "Deployed and managed applications on AWS EC2 instances with S3 storage integration",
        "Worked with containerized applications and Linux-based infrastructure",
        "Contributed to frontend development using React and modern web technologies"
      ],
      technologies: [
        "Django REST Framework",
        "FastAPI", 
        "Prometheus",
        "Grafana",
        "RabbitMQ",
        "AWS EC2",
        "AWS S3", 
        "Linux",
        "React",
        "Git"
      ],
      current: true
    }
  ],

  certifications: [
    "AWS Cloud Practitioner (In Progress)",
    "Linux System Administration", 
    "Git Version Control",
    "Microservices Architecture"
  ],

  projects: [
    {
      title: "Microservices Monitoring System", 
      description: "Built a comprehensive monitoring solution using Prometheus and Grafana to track system metrics, application performance, and infrastructure health across multiple microservices.",
      technologies: ["Prometheus", "Grafana", "Docker", "Linux", "AWS CloudWatch"],
      icon: Monitor,
      category: "DevOps & Monitoring",
      highlights: [
        "Reduced incident response time by 60%",
        "Implemented custom dashboards for 5+ services",
        "Set up automated alerting system"
      ],
      githubUrl: "https://github.com/your-username/monitoring-system",
      liveUrl: "https://your-monitoring-demo.com"
    },
    {
      title: "RabbitMQ Message Queue Integration",
      description: "Designed and implemented asynchronous communication between microservices using RabbitMQ, improving system scalability and reliability.",
      technologies: ["RabbitMQ", "Django", "FastAPI", "Docker", "Python"],
      icon: MessageSquare,
      category: "Backend Development", 
      highlights: [
        "Handled 10k+ messages per minute",
        "Implemented retry mechanisms", 
        "Achieved 99.9% message delivery rate"
      ],
      githubUrl: "https://github.com/your-username/rabbitmq-integration",
      liveUrl: "https://your-rabbitmq-demo.com"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated deployment and management of applications on AWS EC2 instances with S3 integration for file storage and backup solutions.",
      technologies: ["AWS EC2", "AWS S3", "Linux", "Bash Scripting", "CloudWatch"],
      icon: Cloud,
      category: "Cloud & Infrastructure",
      highlights: [
        "Automated deployment pipeline",
        "Reduced manual deployment time by 80%",
        "Implemented automated backups"
      ],
      githubUrl: "https://github.com/your-username/infrastructure-automation",
      liveUrl: "https://your-infrastructure-demo.com"
    },
    {
      title: "REST API Development Suite",
      description: "Developed multiple high-performance REST APIs using Django REST Framework and FastAPI, serving thousands of requests with optimal response times.",
      technologies: ["Django REST Framework", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      icon: Server,
      category: "Backend Development",
      highlights: [
        "Built 15+ API endpoints",
        "Achieved <200ms response times",
        "Implemented caching strategies"
      ],
      githubUrl: "https://github.com/your-username/api-suite",
      liveUrl: "https://your-api-demo.com"
    }
  ],

  contactMethods: [
    {
      icon: Mail,
      label: "Email",
      value: "shiyas@example.com", 
      href: "mailto:shiyas@example.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/mohamed-shiyas-b",
      href: "https://linkedin.com/in/mohamed-shiyas-b",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "@mohamed-shiyas",
      href: "https://github.com/mohamed-shiyas",
      color: "text-text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-primary"
    }
  ]
};

// Context
const PortfolioContext = createContext();

// Provider Component
export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Hook to use portfolio data
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
