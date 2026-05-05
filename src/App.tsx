import { siteData } from "./siteData";

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "项目经历", href: "#projects" },
  { label: "技能栈", href: "#skills" },
  { label: "常用网站", href: "#resources" },
  { label: "教育与实践", href: "#journey" },
  { label: "联系方式", href: "#contact" },
];

function App() {
  const {
    brand,
    profile,
    highlights,
    education,
    internships,
    projects,
    skillGroups,
    resources,
    resume,
    contact,
  } = siteData;

  return (
    <div className="page-shell">
      <div className="background-orb orb-left" />
      <div className="background-orb orb-right" />

      <header className="topbar">
        <a className="brand-mark" href="#home" aria-label="返回顶部">
          <span className="brand-monogram">{brand.monogram}</span>
          <span className="brand-text">
            <strong>{brand.name}</strong>
            <small>{brand.role}</small>
          </span>
        </a>

        <div className="topbar-actions">
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="resume-entry" href={resume.pageHref}>
            <span className="resume-entry-icon">CV</span>
            <span className="resume-entry-text">
              <strong>{resume.badgeLabel}</strong>
              <small>查看独立页</small>
            </span>
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="hero-copy reveal">
            <p className="eyebrow">AI / COMPUTER VISION / 2026</p>
            <h1>{brand.tagline}</h1>
            <p className="hero-text">{brand.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={brand.primaryCta.href}>
                {brand.primaryCta.label}
              </a>
              <a className="button button-secondary" href={brand.secondaryCta.href}>
                {brand.secondaryCta.label}
              </a>
              <a className="button button-secondary" href={resume.pageHref}>
                进入简历页
              </a>
              <a className="button button-secondary" href={resume.fileHref} download>
                下载简历
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal delay-1">
            <div className="panel-card">
              <span className="panel-kicker">{brand.panelTitle}</span>
              <h2>{brand.role}</h2>
              <p>{brand.panelText}</p>
            </div>

            <ul className="profile-list">
              {profile.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="resume-panel-card">
              <div className="resume-panel-copy">
                <span className="panel-kicker">RESUME</span>
                <h3>{resume.title}</h3>
                <p>{resume.summary}</p>
              </div>
              <div className="resume-panel-actions">
                <a className="button button-primary" href={resume.pageHref}>
                  查看简历页
                </a>
                <a className="button button-secondary" href={resume.fileHref} download>
                  下载 PPTX
                </a>
              </div>
            </div>

            <div className="stats-grid">
              {brand.stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">ABOUT</p>
            <h2>以真实项目为基础，持续向算法、自动化与解决方案方向延伸。</h2>
          </div>

          <div className="about-stack reveal delay-1">
            <div className="about-card">
              <p>
                我目前是一名计算机科学与技术硕士研究生，求职方向聚焦算法工程师、解决方案工程师、计算机视觉与
                AI 应用岗位。相比“包装经验”，我更希望用真实项目、数据判断和持续学习能力来证明自己。
              </p>
              <ul className="highlight-list">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={item.school}>
                  <span className="education-period">{item.period}</span>
                  <h3>{item.school}</h3>
                  <strong>{item.degree}</strong>
                  <p>{item.detail}</p>
                  <p>{item.courses}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">PROJECTS</p>
            <h2>项目经历</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card reveal delay-${(index % 3) + 1}`} key={project.title}>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <small>{project.period}</small>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <strong>{project.result}</strong>
                <ul className="project-points">
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="skills">
          <div className="section-heading reveal">
            <p className="eyebrow">SKILLS</p>
            <h2>技能栈</h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className={`skill-card reveal delay-${index + 1}`} key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="resources">
          <div className="section-heading reveal">
            <p className="eyebrow">RESOURCES</p>
            <h2>常用网站与工具入口</h2>
            <p className="resource-intro">
              这里把我高频使用的平台按功能整理出来，后续想继续加新的工具、文档或社区，只需要在数据文件里补一项即可。
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((group, index) => (
              <article className={`resource-card reveal delay-${(index % 3) + 1}`} key={group.title}>
                <div className="resource-card-head">
                  <span className="panel-kicker">CATEGORY</span>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>

                <div className="resource-links">
                  {group.links.map((link) => (
                    <a
                      className="resource-link"
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{link.title}</strong>
                      <span>{link.description}</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-grid" id="journey">
          <div className="section-heading reveal">
            <p className="eyebrow">TIMELINE</p>
            <h2>教育与实践经历</h2>
          </div>

          <div className="journey-grid">
            <div className="journey-column reveal delay-1">
              <div className="journey-column-head">
                <p className="eyebrow">EDUCATION</p>
                <h3>教育经历</h3>
              </div>
              <div className="timeline">
                {education.map((item) => (
                  <article className="timeline-item" key={`${item.school}-${item.period}`}>
                    <span>{item.period}</span>
                    <h3>
                      {item.school} · {item.degree}
                    </h3>
                    <p>{item.detail}</p>
                    <p>{item.courses}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="journey-column reveal delay-2">
              <div className="journey-column-head">
                <p className="eyebrow">INTERNSHIPS</p>
                <h3>实习经历</h3>
              </div>
              <div className="timeline">
                {internships.map((item) => (
                  <article className="timeline-item" key={`${item.company}-${item.period}`}>
                    <span>{item.period}</span>
                    <h3>
                      {item.company} · {item.role}
                    </h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">CONTACT</p>
            <h2>期待在真实场景中继续把问题做透，把方案真正落地。</h2>
            <p>{contact.note}</p>

            <div className="contact-links">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              <a href={resume.pageHref}>查看简历页</a>
              <a href={resume.fileHref} download>
                下载简历
              </a>
            </div>

            <p className="contact-meta">
              {brand.name} · {brand.role}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 {brand.name}. Student portfolio for algorithm and AI application roles.</p>
        <div className="footer-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
