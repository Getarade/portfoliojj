
class SiteHeader extends HTMLElement {
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
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            background-color: rgba(15, 15, 20, 0.8);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border);
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--foreground);
            text-decoration: none;
        }

        nav a {
            color: var(--foreground);
            text-decoration: none;
            font-weight: 500;
            margin-left: 1.5rem;
            transition: color 0.3s ease;
        }

        nav a:hover {
            color: var(--primary);
        }

        @media (max-width: 768px) {
            nav a {
                display: none;
            }
        }
      </style>
      <header>
        <a href="#" class="logo">Portfolio</a>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
