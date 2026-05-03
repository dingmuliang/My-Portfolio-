// ==============================
// 作品集数据配置文件
// 修改此文件即可自动更新网站内容
// ==============================

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'ai-agent' | 'research-engineering' | 'visual-gen';
  image: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string[];
  avatar: string;
  email: string;
  github: string;
  linkedin?: string;
  twitter?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const personalInfo: PersonalInfo = {
  name: "你的名字",
  role: "AI 工程师 / 创意开发者",
  bio: [
    "热衷于探索人工智能与创意技术的交叉领域。专注于 AI Agent 系统搭建、计算机视觉研究，以及 AI 驱动的视觉内容生成。",
    "相信技术的力量不仅在于是解决问题的手段，更是表达创意的方式。持续学习，不断突破，用代码构建有温度的作品。",
  ],
  avatar: "/images/avatar-placeholder.svg",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
};

export const skills: Skill[] = [
  { name: "Python", level: 90 },
  { name: "TypeScript / JavaScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "PyTorch / TensorFlow", level: 85 },
  { name: "LangChain / Dify", level: 80 },
  { name: "Stable Diffusion", level: 75 },
  { name: "Unity3D", level: 60 },
  { name: "Docker / K8s", level: 70 },
];

// 作品分类标签
export const categoryLabels: Record<string, string> = {
  'ai-agent': 'AI Agent 与自动化',
  'research-engineering': '研究与工程',
  'visual-gen': '视觉与生成',
};

export const projects: Project[] = [
  // ===== AI Agent 与自动化 =====
  {
    id: "ai-agent-01",
    title: "智能客服 Agent 系统",
    description:
      "基于 Dify 搭建的多渠道智能客服系统，集成知识库检索、意图识别和工单自动流转功能，显著提升客服响应效率。",
    tags: ["Dify", "LLM", "RAG", "自动化"],
    category: "ai-agent",
    image: "/images/placeholder-project.svg",
    link: "https://github.com/yourusername/ai-agent-project",
  },
  {
    id: "ai-agent-02",
    title: "Coze 工作流自动化",
    description:
      "使用 Coze 平台设计的自动化工作流，实现从信息采集、数据处理到报告生成的端到端自动化 Pipeline。",
    tags: ["Coze", "Workflow", "自动化"],
    category: "ai-agent",
    image: "/images/placeholder-project.svg",
  },
  {
    id: "ai-agent-03",
    title: "个人知识助手",
    description:
      "结合 LangChain 和本地知识库的 AI 助手，支持文档问答、内容摘要和主动知识推送，成为你的第二大脑。",
    tags: ["LangChain", "RAG", "知识管理"],
    category: "ai-agent",
    image: "/images/placeholder-project.svg",
  },

  // ===== 研究与工程 =====
  {
    id: "research-01",
    title: "3D 打印缺陷检测系统",
    description:
      "基于计算机视觉的 3D 打印缺陷实时检测系统，使用 CNN 模型分析打印层图像，准确率达 95% 以上。",
    tags: ["CNN", "计算机视觉", "3D 打印"],
    category: "research-engineering",
    image: "/images/placeholder-project.svg",
    link: "https://github.com/yourusername/defect-detection",
  },
  {
    id: "research-02",
    title: "数字孪生平台",
    description:
      "为工业设备构建的数字孪生可视化平台，融合 IoT 传感器数据与 3D 模型，实现设备状态的实时监控与预测性维护。",
    tags: ["数字孪生", "IoT", "3D 可视化"],
    category: "research-engineering",
    image: "/images/placeholder-project.svg",
  },
  {
    id: "research-03",
    title: "时序预测模型研究",
    description:
      "针对工业传感器数据的时序预测研究，对比 LSTM、Transformer 等架构在设备故障预测任务上的表现与效率。",
    tags: ["LSTM", "Transformer", "时序分析"],
    category: "research-engineering",
    image: "/images/placeholder-project.svg",
  },

  // ===== 视觉与生成 =====
  {
    id: "visual-01",
    title: "Stable Diffusion 风格迁移",
    description:
      "探索 Stable Diffusion 在艺术风格迁移中的应用，结合 ControlNet 实现精准的图像生成与控制。",
    tags: ["Stable Diffusion", "ControlNet", "风格迁移"],
    category: "visual-gen",
    image: "/images/placeholder-project.svg",
  },
  {
    id: "visual-02",
    title: "ComfyUI 工作流合集",
    description:
      "一系列精心设计的 ComfyUI 工作流，涵盖文生图、图生图、视频转绘等主流应用场景。",
    tags: ["ComfyUI", "工作流", "图像生成"],
    category: "visual-gen",
    image: "/images/placeholder-project.svg",
  },
  {
    id: "visual-03",
    title: "Unity3D 交互场景探索",
    description:
      "使用 Unity3D 构建的交互式 3D 场景，探索虚拟空间中的 AI 角色与用户的自然交互方式。",
    tags: ["Unity3D", "交互设计", "3D 场景"],
    category: "visual-gen",
    image: "/images/placeholder-project.svg",
  },
];

// 导航项
export const navItems = [
  { label: "首页", href: "#hero" },
  { label: "作品", href: "#projects" },
  { label: "关于", href: "#about" },
  { label: "联系", href: "#contact" },
];
