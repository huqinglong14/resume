# 学生求职版个人主页

这是一个基于 `Vite + React + TypeScript` 的中文单页网站，用于展示算法工程师 / 计算机视觉方向学生的教育背景、项目经历、技能栈和联系方式。

## 本地开发

```bash
npm install
npm run dev
```

启动后在浏览器打开终端给出的本地地址，通常是 `http://localhost:5173`。

## 构建发布

```bash
npm run build
```

构建后的静态文件会生成到 `dist` 目录，可部署到 `Vercel`、`Netlify` 或 `Cloudflare Pages`。

## 页面内容修改

站点主要内容集中在 `src/siteData.ts`：

- 姓名、标题、简介
- 项目经历
- 技能栈
- 教育与实践经历
- 联系方式

如果只是想修改文案，优先改这个文件即可。
