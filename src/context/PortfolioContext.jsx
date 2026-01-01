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
      title: "Access Management System — Backend Core Service",
      description:
        "Production backend for managing users, organizations, access passes, reports, and real-time device sync.",
      technologies: ["Python", "DRF", "Celery", "Redis", "AWS S3", "CloudWatch", "PostgreSQL", "JWT"],
      icon: Server,
      category: "Backend + Cloud + Monitoring",
      highlights: [
        "Implemented JWT auth + role-based permissions",
        "Used Redis quota caching to reduce DB queries",
        "Integrated S3 media storage + CloudWatch error alerts",
        "Enabled CSV bulk onboarding + real-time device sync"
      ],
      githubUrl: "github.com/shiyas9961",
      liveUrl: null
    },
    {
      title: "Full-Stack Microservices Platform — Django + gRPC + Flask",
      description:
        "Dockerized microservices platform using gRPC for service communication and Flask for REST exposure.",
      technologies: ["Python", "DRF", "gRPC", "Flask", "Docker", "Pytest", "Swagger", "GitHub Actions"],
      icon: Code2,
      category: "Microservices + CI/CD",
      highlights: [
        "Built Flask APIs consuming gRPC services",
        "Added Swagger documentation",
        "Containerized all services",
        "CI pipeline using GitHub Actions + Pytest"
      ],
      githubUrl: "https://github.com/Shiyas9961/grpc-django-flask-microservices",
      liveUrl: null
    },
    {
      title: "Message-Driven Microservices — FastAPI + RabbitMQ",
      description:
        "Async producer–consumer microservices using RabbitMQ with structured config and logs.",
      technologies: ["FastAPI", "RabbitMQ", "Docker", "Pydantic", "Pytest", "GitHub Actions"],
      icon: Network,
      category: "Messaging + Containers",
      highlights: [
        "Built reliable message publishing/consuming",
        "Centralized config using Pydantic",
        "Local environment via Docker Compose",
        "CI workflow using GitHub Actions + RabbitMQ service"
      ],
      githubUrl: "https://github.com/Shiyas9961/rabbitmq-fastapi-microservices",
      liveUrl: null
    },
    {
      title: "Local Cloud Backend Platform — Django + DevOps",
      description:
        "Simulated AWS backend locally using LocalStack with async processing and DevOps automation.",
      technologies: ["DRF", "Celery", "Docker", "LocalStack", "PostgreSQL", "Redis", "RabbitMQ", "Pytest"],
      icon: Cloud,
      category: "DevOps Simulation + Infra",
      highlights: [
        "LocalStack AWS simulation (S3, SES, CloudWatch)",
        "Async tasks via Celery + RabbitMQ broker",
        "Redis caching + result backend",
        "Dockerized full stack + automated tests"
      ],
      githubUrl: "https://github.com/Shiyas9961/local-cloud-django-backend",
      liveUrl: null
    }
  ],

  contactMethods: [
    {
      icon: Mail,
      label: "Email",
      value: "shiyasshiyyu9961@gmail.com", 
      href: "mailto:shiyasshiyyu9961@gmail.com",
      color: "text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Shiyas B",
      href: "https://www.linkedin.com/in/shiyas-b-490595287/",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "@Shiyas9961",
      href: "https://github.com/shiyas9961",
      color: "text-text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 85472 37188",
      href: "tel:+918547237188",
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
