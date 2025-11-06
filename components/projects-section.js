
class ProjectsSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Projects Section */
        .projects {
          padding: 6rem 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .project-link {
            text-decoration: none;
            color: inherit;
        }

        .project-card {
          background-color: var(--card);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          overflow: hidden;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .project-image {
          height: 200px;
          background-color: var(--muted);
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-content p {
          color: rgba(255, 255, 255, 0.7);
        }
      </style>
      <section class="projects">
        <div class="container">
          <h2 class="section-title">Our Work</h2>
          <div class="projects-grid">
            <a href="#" class="project-link">
              <div class="project-card">
                <div class="project-image">
                  <img src="images/kirakiraclean.png" alt="KiraKira Clean">
                </div>
                <div class="project-content">
                  <h3>KiraKira Clean</h3>
                  <p>A modern and clean website for a cleaning service company, focusing on user experience and easy booking.</p>
                </div>
              </div>
            </a>
            <a href="#" class="project-link">
              <div class="project-card">
                <div class="project-image">
                  <img src="images/northernplumbing.png" alt="Northern Plumbing Company">
                </div>
                <div class="project-content">
                  <h3>Northern Plumbing Company</h3>
                  <p>A professional website for a plumbing company, designed to be informative and easy to navigate for emergency services.</p>
                </div>
              </div>
            </a>
            <a href="#" class="project-link">
               <div class="project-card">
                <div class="project-image">
                  <img src="images/bluesharktours.png" alt="Blue Shark Tours">
                </div>
                <div class="project-content">
                  <h3>Blue Shark Tours</h3>
                  <p>A corporate website for a tour and travel company, showcasing their projects and services.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('projects-section', ProjectsSection);
