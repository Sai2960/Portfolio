export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Web App' | 'UI Design' | 'Branding' | 'Full Stack' | 'Mobile';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  excerpt: string;
}
