export type StatItem = {
  value: string;
  label: string;
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
    tagline: "聚焦计算机视觉与 AI 应用落地。",
    intro:
      "河北经贸大学计算机科学与技术硕士在读，本科毕业于兰州大学，持续关注计算机视觉与 AI 应用落地，正在寻找算法工程师、计算机视觉方向的岗位机会。",
    panelTitle: "求职方向",
    panelText:
      "关注目标检测、视频理解、OCR、多模态感知和大模型协同推理，希望在真实场景中把模型能力做深、做稳、做出结果。",
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
    "研究方向：计算机视觉、目标检测、语义分割、OCR",
    "岗位目标：算法工程师 / 计算机视觉 / AI 大模型应用",
    "技术偏好：Python、PyTorch、Docker、模型部署与自动化流程",
  ],
  highlights: [
    "具备从数据整理、数据标注、模型训练到实验验证的完整项目实践。",
    "能够围绕真实场景问题梳理技术路线，关注模型效果、数据质量与工程可落地性。",
    "持续跟进多模态、大模型、Agent 等前沿方向，学习能力和技术成长性较强。",
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
      courses: "本科课程涉及 C 语言、结构力学等基础内容。",
    },
  ] satisfies EducationItem[],
  projects: [
    {
      title: "铁路沿线大型施工机械入侵检测系统",
      category: "实习项目 / 多模态检测",
      period: "2025.09 - 2026.03",
      summary:
        "围绕铁路沿线施工机械入侵检测问题，融合可见光、红外与毫米波雷达三模态数据，通过多模态检测与大模型协同推理实现全天候检测与分级预警。",
      result: "负责项目流程总结、技术报告撰写，并推进项目技术报告向论文转化。",
      tech: [
        "YOLOv8",
        "DeepSORT",
        "Qwen3-VL",
        "BP Neural Network",
        "多传感器融合",
      ],
      bullets: [
        "场景面向全天候入侵检测与分级预警，强调复杂环境下的稳定识别。",
        "项目采用检测、跟踪、大模型理解和传感器信息融合的组合方案。",
        "在实习中积累了从技术整理到论文表达的完整输出经验。",
      ],
    },
    {
      title: "打火花视频分类检测系统",
      category: "实习项目 / 视频理解",
      period: "2026.01 - 2026.03",
      summary:
        "基于工业场景的打火花分类需求，构建视频分类模型，用于钢材种类自动化识别与场景检测。",
      result: "整合 7 个数据源、2,155 个视频，独立发现严重数据泄露问题并提出混合划分策略。",
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
        "基于 CCPD2019 / CCPD2020 数据集，构建车牌检测与识别一体化 OCR 系统，实现复杂场景下车牌信息的自动识别。",
      result: "构建 12 万+ 车牌数据训练集，并完成检测与识别模型的迁移学习和微调。",
      tech: ["PaddleOCR", "PP-OCRv5", "OCR", "数据预处理"],
      bullets: [
        "完成大规模车牌数据构建与预处理，夯实模型训练基础。",
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
  ] satisfies ProjectItem[],
  skillGroups: [
    {
      title: "算法与模型",
      items: [
        "YOLO v5 - v11",
        "DETR",
        "PaddleOCR",
        "UNet",
        "Qwen 本地部署",
        "语义分割",
      ],
    },
    {
      title: "工程与部署",
      items: [
        "Python",
        "PyTorch",
        "MySQL",
        "Docker",
        "TensorRT",
        "ONNX Runtime",
        "vLLM",
      ],
    },
    {
      title: "自动化与 Agent",
      items: [
        "n8n",
        "LangChain",
        "Prompt Engineering",
        "Agent 开发",
        "自动化测试流程",
      ],
    },
  ] satisfies SkillGroup[],
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
      title: "铁路入侵检测项目 · 实习算法工程师",
      description:
        "参与多模态检测项目，负责流程整理、技术总结和论文转化相关工作。",
    },
    {
      period: "2025.12 - 2026.03",
      title: "车牌识别项目 · 实习算法工程师",
      description:
        "围绕 OCR 项目进行数据构建、预处理、迁移学习和模型微调。",
    },
    {
      period: "2026.01 - 2026.03",
      title: "打火花视频分类项目 · 实习算法工程师",
      description:
        "负责视频数据整合与实验训练，识别并修复了关键数据泄露问题。",
    },
    {
      period: "2024.12 - 2026.03",
      title: "滑坡遥感语义分割 · 硕士论文",
      description:
        "从数据标注、模型设计到实验验证独立推进，形成较完整的研究型项目经验。",
    },
  ] satisfies TimelineItem[],
  contact: {
    email: "1367676275@qq.com",
    phone: "13385790942",
    note:
      "如果你正在寻找计算机视觉、算法工程师或 AI 应用方向的候选人，欢迎通过邮箱或手机号联系我。",
  },
} as const;
