class ProjectsSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            --background: hsl(240, 10%, 3.9%);
            --foreground: hsl(0, 0%, 98%);
            --primary: hsl(24, 95%, 53%);
            --muted: hsl(240, 3.7%, 15.9%);
            --card: hsl(240, 5%, 12%);
            --border: hsl(240, 3.7%, 25%);
        }

        /* Projects Section */
        .projects {
          padding: 6rem 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 1rem;
            position: relative;
        }

        .section-title::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: var(--primary);
            border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: var(--card);
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          overflow: hidden;
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
      <section id="projects" class="projects">
        <div class="container">
          <h2 class="section-title">Our Work</h2>
          <div class="projects-grid">
            <div class="project-card">
              <div class="project-image">
                <img src="images/kirakiraclean.png" alt="KiraKira Clean">
              </div>
              <div class="project-content">
                <h3>KiraKira Clean</h3>
                <p>A modern and clean website for a cleaning service company, focusing on user experience and easy booking.</p>
              </div>
            </div>
            <div class="project-card">
              <div class="project-image">
                <img src="images/northernplumbing.png" alt="Northern Plumbing Company">
              </div>
              <div class="project-content">
                <h3>Northern Plumbing Company</h3>
                <p>A professional website for a plumbing company, designed to be informative and easy to navigate for emergency services.</p>
              </div>
            </div>
            <div class="project-card">
              <div class="project-image">
                <img src="images/bluesharktours.png" alt="Blue Shark Tours">
              </div>
              <div class="project-content">
                <h3>Blue Shark Tours</h3>
                <p>A corporate website for a tour and travel company, showcasing their projects and services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('projects-section', ProjectsSection);

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector(".nav-links");

    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });

                // Close mobile menu if open
                navMenu.classList.remove("active");
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll(".service-card").forEach((card) => {
        observer.observe(card);
    });

    // Add fade-in-up animation to hero content
    window.addEventListener("load", () => {
        document.querySelector(".hero-content").classList.add("fade-in-up");
    });
});