export type StatItem = {
  value: string;
  label: string;
};

export type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

export type ResourceCategory = {
  title: string;
  summary: string;
  links: ResourceLink[];
};

export type ProjectItem = {
  title: string;
  category: string;
  period: string;
  summary: string;
  result: string;
  tech: string[];
  bullets: string[];
};

export type InternshipItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tech: string[];
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail: string;
  courses: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const siteData = {
  brand: {
    monogram: "HQL",
    name: "胡庆龙",
    role: "算法工程师 / 计算机视觉方向 / 硕士在读",
    tagline: "目标检测、OCR、多模态感知",
    intro:
      "河北经贸大学计算机科学与技术硕士在读，本科毕业于兰州大学，持续关注目标检测、OCR、多模态感知与自动化落地，正在寻找算法工程师、解决方案工程师或 AI 应用方向的机会。",
    panelTitle: "求职方向",
    panelText:
      "关注目标检测、视频理解、OCR、多模态协同推理和流程自动化，希望在真实业务场景中把模型能力、数据理解和问题拆解真正结合起来。",
    primaryCta: {
      label: "查看项目",
      href: "#projects",
    },
    secondaryCta: {
      label: "联系我",
      href: "#contact",
    },
    stats: [
      { value: "硕士在读", label: "河北经贸大学" },
      { value: "3.8 / 4.0", label: "GPA（前 20%）" },
      { value: "CET-6", label: "英语水平" },
    ] satisfies StatItem[],
  },
  profile: [
    "研究方向：计算机视觉、目标检测、语义分割、OCR、多模态感知",
    "岗位目标：算法工程师 / 解决方案工程师 / AI 应用方向",
    "技术偏好：Python、PyTorch、Docker、模型部署与自动化流程",
  ],
  highlights: [
    "具备从数据整理、数据标注、模型训练到实验验证的完整项目实践。",
    "习惯围绕真实问题梳理技术路线，关注数据质量、指标解释与工程可落地性。",
    "持续跟进多模态、大模型、Agent 与自动化工具，学习速度快、适应性强。",
  ],
  education: [
    {
      school: "河北经贸大学",
      degree: "计算机科学与技术 · 硕士",
      period: "2023.09 - 2026.06",
      detail: "GPA 3.8 / 4.0，专业前 20%。",
      courses: "相关方向：图像处理、深度学习、机器学习。",
    },
    {
      school: "兰州大学",
      degree: "本科",
      period: "2018.09 - 2022.06",
      detail: "985 / 211 / 双一流院校，GPA 3.0 / 4.0，专业前 30%。",
      courses: "本科阶段完成编程、数学与工程基础课程训练。",
    },
  ] satisfies EducationItem[],
  internships: [
    {
      company: "河北习知科技有限公司（辅立码课）",
      role: "AI 大模型应用开发实习生",
      period: "2025.03 - 2025.07",
      summary:
        "面向中学教育智能化场景，参与大语言模型应用开发，围绕智能阅卷、知识检索、错题推荐和教育智能体推进功能设计与效果优化。",
      tech: ["Python", "RAG", "Milvus", "LangChain", "Coze（扣子）", "Prompt Engineering", "Agent"],
      bullets: [
        "负责初中、高中全学科智能阅卷功能开发，参与大模型回答质量评估与提示词迭代。",
        "基于高中知识、题库和错题本构建本地知识库，参与向量检索与 RAG 问答链路设计。",
        "围绕中学教育场景参与智能体开发，把检索、推荐和交互流程串成可落地的产品能力。",
      ],
    },
    {
      company: "江苏鸿程大数据技术与应用研究院有限公司",
      role: "算法工程师实习生",
      period: "2025.09 - 2026.03",
      summary:
        "参与计算机视觉与多模态感知项目，覆盖目标检测、视频分类和 OCR 任务，负责数据整理、实验配置、模型训练和技术总结。",
      tech: ["Python", "PyTorch", "YOLO", "PaddleOCR", "MMAction2", "Docker", "OpenClaw"],
      bullets: [
        "参与多个视觉项目的数据清洗、训练实验、结果分析与问题排查，形成较完整的工程实践闭环。",
        "在打火花视频分类项目中整合 7 个数据源、2155 个视频，发现训练与测试数据泄露问题并提出重新划分策略。",
        "参与铁路沿线多模态检测项目的流程梳理与技术报告整理，提升跨模块协同和成果表达能力。",
      ],
    },
  ] satisfies InternshipItem[],
  projects: [
    {
      title: "铁路沿线大型施工机械入侵检测系统",
      category: "实习项目 / 多模态检测",
      period: "2025.09 - 2026.03",
      summary:
        "围绕铁路沿线施工机械入侵检测问题，融合可见光、红外与毫米波雷达三模态数据，通过检测、跟踪与多模态协同推理实现全天候识别与分级预警。",
      result: "负责流程梳理、技术报告撰写与阶段成果沉淀，推动项目表达从工程实现向论文成果转化。",
      tech: ["YOLOv8", "DeepSORT", "Qwen3-VL", "BP Neural Network", "多传感器融合"],
      bullets: [
        "面向全天候入侵检测与分级预警场景，强调复杂环境下的稳定识别。",
        "项目采用检测、跟踪、大模型理解和传感器信息融合的组合方案。",
        "在实习中积累了从技术整理到论文表达的完整输出经验。",
      ],
    },
    {
      title: "打火花视频分类检测系统",
      category: "实习项目 / 视频理解",
      period: "2026.01 - 2026.03",
      summary:
        "围绕工业场景中的打火花分类需求，构建视频分类模型，用于钢材种类自动识别与场景检测。",
      result: "整合 7 个数据源、2155 个视频，独立发现严重数据泄露问题，并提出混合划分策略。",
      tech: ["PyTorch", "MMAction2", "TSN R50", "OpenClaw"],
      bullets: [
        "完成多源视频数据整理，提升训练数据的可用性与可靠性。",
        "针对数据泄露风险重新设计训练集与验证集划分方式。",
        "基于 MMAction2 + TSN R50 完成训练与实验验证。",
      ],
    },
    {
      title: "基于 PaddleOCR 的车牌识别系统",
      category: "实习项目 / OCR",
      period: "2025.12 - 2026.03",
      summary:
        "基于 CCPD2019 / CCPD2020 数据集，构建车牌检测与识别一体化 OCR 系统，实现复杂场景下车牌信息自动识别。",
      result: "构建 12 万+ 车牌训练数据集，并完成检测与识别模型的迁移学习和微调。",
      tech: ["PaddleOCR", "PP-OCRv5", "OCR", "数据预处理"],
      bullets: [
        "完成大规模车牌数据集构建与预处理，夯实模型训练基础。",
        "围绕复杂场景下的识别精度，对检测与识别模块进行联合优化。",
        "强化了 OCR 项目中的数据处理与模型调优能力。",
      ],
    },
    {
      title: "滑坡遥感语义分割项目",
      category: "硕士论文 / 语义分割",
      period: "2024.12 - 2026.03",
      summary:
        "构建高分辨率无人机滑坡语义分割数据集，覆盖阴影、植被、雪盖等复杂场景，设计 YOLO-Landslide 模型实现滑坡边界精细分割。",
      result: "在自建与公开数据集上 mIoU 最高提升 2.04%，小样本场景提升 5% 以上。",
      tech: ["YOLO-Landslide", "DSConv", "GDFPN", "语义分割", "遥感图像"],
      bullets: [
        "完成 881 张多场景像素级标注数据的构建与清洗。",
        "围绕 DSConv、GDFPN 和轻量化共享检测头完成模型设计与实验验证。",
        "兼顾分割精度与模型轻量化，体现研究与落地并重的思路。",
      ],
    },
    {
      title: "教育场景 RAG 知识检索与智能体应用",
      category: "实习项目 / 大模型应用",
      period: "2025.03 - 2025.07",
      summary:
        "围绕中学教育场景构建本地知识库和智能检索链路，把题库、错题本和知识点内容接入 RAG 流程，支撑智能阅卷、知识问答与错题推荐。",
      result: "参与完成检索、问答、推荐和智能体流程设计，推动大模型能力在教育业务中的场景化落地。",
      tech: ["RAG", "Milvus", "LangChain", "Coze（扣子）", "Prompt Engineering", "Agent"],
      bullets: [
        "参与本地知识库构建、向量化检索和问答链路设计，提升知识召回和回答相关性。",
        "围绕错题推荐与知识点关联，梳理业务流程和用户交互逻辑。",
        "积累了大模型应用从需求拆解、流程编排到效果评估的完整实践经验。",
      ],
    },
  ] satisfies ProjectItem[],
  skillGroups: [
    {
      title: "算法与模型",
      items: ["YOLO v5 - v11", "DETR", "PaddleOCR", "UNet", "Qwen 本地部署", "语义分割"],
    },
    {
      title: "工程与部署",
      items: ["Python", "PyTorch", "MySQL", "Docker", "TensorRT", "ONNX Runtime", "vLLM"],
    },
    {
      title: "大模型应用与 Agent",
      items: ["RAG", "Milvus", "LangChain", "Coze（扣子）", "Prompt Engineering", "Agent 开发", "OpenClaw"],
    },
  ] satisfies SkillGroup[],
  resume: {
    badgeLabel: "简历页",
    pageHref: "/resume.html",
    fileHref: "/hu-qinglong-algorithm-resume.pptx",
    title: "查看简历与项目摘要",
    subtitle: "围绕通用算法岗整理教育背景、实习经历、项目经历与技能方向，方便招聘方快速浏览或直接下载。",
    summary:
      "简历页适合面试官快速获取你的教育背景、实习经历、项目经历、技能标签和联系方式，也方便你后续继续扩展成更完整的个人资料页。",
    highlights: [
      "实习经历与项目经历分栏展示",
      "保留新版算法岗 PPTX 简历下载入口",
      "后续可以继续加论文、证书或作品附件",
    ],
  },
  resources: [
    {
      title: "代码与协作",
      summary: "放平时做项目、看代码和沉淀成果时最常打开的平台。",
      links: [
        {
          title: "GitHub",
          description: "代码托管、版本协作与项目展示入口。",
          href: "https://github.com/",
        },
        {
          title: "Netlify",
          description: "静态站点部署、预览与持续发布平台。",
          href: "https://app.netlify.com/",
        },
      ],
    },
    {
      title: "模型与数据",
      summary: "围绕数据集、模型社区和实验资源整理，方便继续扩展更多工具。",
      links: [
        {
          title: "Roboflow",
          description: "数据集管理、标注与视觉任务实验平台。",
          href: "https://app.roboflow.com/s-workspace-5mnis/home",
        },
        {
          title: "Hugging Face",
          description: "模型、数据集与推理生态入口。",
          href: "https://huggingface.co/",
        },
        {
          title: "Kaggle",
          description: "数据竞赛、Notebook 与公开数据集平台。",
          href: "https://www.kaggle.com/",
        },
      ],
    },
    {
      title: "学习与社区",
      summary: "偏向视频学习、案例观察和持续输入的内容来源。",
      links: [
        {
          title: "B站",
          description: "课程、经验分享和技术内容学习入口。",
          href: "https://www.bilibili.com/",
        },
      ],
    },
    {
      title: "文档与工具",
      summary: "把高频查阅的文档类站点单独收纳，后续加更多文档会很方便。",
      links: [
        {
          title: "OpenClaw 文档",
          description: "工作流、工具能力与接入方式参考文档。",
          href: "https://docs.openclaw.ai/",
        },
      ],
    },
  ] satisfies ResourceCategory[],
  timeline: [
    {
      period: "2023.09 - 2026.06",
      title: "河北经贸大学 · 硕士在读",
      description:
        "计算机科学与技术专业，GPA 3.8 / 4.0，专业前 20%，持续聚焦图像处理、深度学习与机器学习。",
    },
    {
      period: "2018.09 - 2022.06",
      title: "兰州大学 · 本科",
      description:
        "完成本科阶段学习，建立了编程、数学和工程分析基础，为后续转向 AI 方向打下底层能力。",
    },
    {
      period: "2025.09 - 2026.03",
      title: "江苏鸿程大数据技术与应用研究院有限公司 · 算法工程师实习生",
      description: "参与视觉与多模态项目研发，覆盖目标检测、视频分类和 OCR 任务，负责实验配置、模型训练与技术总结。",
    },
    {
      period: "2025.03 - 2025.07",
      title: "河北习知科技有限公司（辅立码课） · AI 大模型应用开发实习生",
      description: "参与教育场景大模型应用开发，围绕智能阅卷、RAG 检索、错题推荐和智能体流程推进功能落地。",
    },
    {
      period: "2025.12 - 2026.03",
      title: "车牌识别项目 · 实习算法工程师",
      description: "围绕 OCR 项目进行数据构建、预处理、迁移学习和模型微调。",
    },
    {
      period: "2026.01 - 2026.03",
      title: "打火花视频分类项目 · 实习算法工程师",
      description: "负责视频数据整合与实验训练，识别并修复了关键数据泄露问题。",
    },
    {
      period: "2024.12 - 2026.03",
      title: "滑坡遥感语义分割 · 硕士论文",
      description: "从数据标注、模型设计到实验验证独立推进，形成了较完整的研究型项目经验。",
    },
  ] satisfies TimelineItem[],
  contact: {
    email: "1367676275@qq.com",
    phone: "13385790942",
    note:
      "如果你正在寻找计算机视觉、算法工程师、解决方案工程师或 AI 应用方向的候选人，欢迎通过邮箱或手机号联系我。",
  },
} as const;
