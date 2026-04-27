import { siteData } from "./siteData";

function ResumePage() {
  const { brand, education, internships, projects, skillGroups, contact, resume } = siteData;

  return (
    <div className="resume-page">
      <div className="resume-glow resume-glow-left" />
      <div className="resume-glow resume-glow-right" />

      <main className="resume-shell">
        <header className="resume-hero">
          <div className="resume-hero-copy">
            <p className="resume-eyebrow">RESUME PAGE</p>
            <h1>{brand.name}</h1>
            <h2>{brand.role}</h2>
            <p>{resume.subtitle}</p>

            <div className="resume-actions">
              <a className="resume-button resume-button-primary" href={resume.fileHref} download>
                下载 PPTX 简历
              </a>
              <a className="resume-button resume-button-secondary" href="/">
                返回主页
              </a>
            </div>
          </div>

          <div className="resume-overview">
            <div className="resume-overview-card">
              <span>核心方向</span>
              <strong>{brand.tagline}</strong>
            </div>
            <div className="resume-overview-card">
              <span>联系方式</span>
              <strong>{contact.email}</strong>
              <small>{contact.phone}</small>
            </div>
            <div className="resume-overview-card">
              <span>页面说明</span>
              <strong>{resume.title}</strong>
              <small>{resume.summary}</small>
            </div>
          </div>
        </header>

        <section className="resume-section">
          <div className="resume-section-head">
            <p className="resume-eyebrow">EDUCATION</p>
            <h3>教育经历</h3>
          </div>
          <div className="resume-card-grid">
            {education.map((item) => (
              <article className="resume-card resume-detail-card" key={`${item.school}-${item.period}`}>
                <div className="resume-card-topline">
                  <span>{item.period}</span>
                </div>
                <h4>{item.school}</h4>
                <p>{item.degree}</p>
                <strong className="resume-result">{item.detail}</strong>
                <p>{item.courses}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-section-head">
            <p className="resume-eyebrow">HIGHLIGHTS</p>
            <h3>快速了解我</h3>
          </div>
          <div className="resume-chip-grid">
            {resume.highlights.map((item) => (
              <span className="resume-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-section-head">
            <p className="resume-eyebrow">PROJECTS</p>
            <h3>实习经历</h3>
          </div>
          <div className="resume-card-grid">
            {internships.map((internship) => (
              <article className="resume-card resume-detail-card" key={`${internship.company}-${internship.period}`}>
                <div className="resume-card-topline">
                  <span>{internship.period}</span>
                  <small className="resume-card-period">{internship.role}</small>
                </div>
                <h4>{internship.company}</h4>
                <p>{internship.summary}</p>
                <div className="resume-chip-grid">
                  {internship.tech.map((item) => (
                    <span className="resume-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="resume-bullet-list">
                  {internship.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-section-head">
            <p className="resume-eyebrow">PROJECTS</p>
            <h3>项目经历</h3>
          </div>
          <div className="resume-card-grid">
            {projects.map((project) => (
              <article className="resume-card resume-detail-card" key={project.title}>
                <div className="resume-card-topline">
                  <span>{project.category}</span>
                  <small className="resume-card-period">{project.period}</small>
                </div>
                <h4>{project.title}</h4>
                <p>{project.summary}</p>
                <strong className="resume-result">{project.result}</strong>
                <div className="resume-chip-grid">
                  {project.tech.map((item) => (
                    <span className="resume-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="resume-bullet-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <div className="resume-section-head">
            <p className="resume-eyebrow">SKILLS</p>
            <h3>技能方向</h3>
          </div>
          <div className="resume-card-grid">
            {skillGroups.map((group) => (
              <article className="resume-card" key={group.title}>
                <span>{group.title}</span>
                <h4>{group.title}</h4>
                <div className="resume-chip-grid">
                  {group.items.map((item) => (
                    <span className="resume-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default ResumePage;
