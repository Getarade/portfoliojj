
class PortfolioItem extends HTMLElement {
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
        .portfolio-box {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            border: 1px solid var(--border);
            height: 250px;
        }

        .portfolio-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }

        .portfolio-layer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(0,0,0,0.1), var(--primary));
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 0 2rem;
            transform: translateY(100%);
            transition: transform 0.4s ease;
        }

        .portfolio-box:hover .portfolio-layer {
            transform: translateY(0);
        }

        .portfolio-layer h4 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--background);
        }

        .portfolio-layer p {
            font-size: 0.9rem;
            color: var(--background);
        }

        .portfolio-layer a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 3rem;
            height: 3rem;
            background: var(--foreground);
            border-radius: 50%;
            margin-top: 1rem;
            color: var(--primary);
            font-size: 1.2rem;
            text-decoration: none;
        }

        .portfolio-box:hover img {
            transform: scale(1.1);
        }
      </style>
      <div class="portfolio-box">
        <img src="${this.getAttribute('image')}" alt="">
        <div class="portfolio-layer">
          <h4>${this.getAttribute('title')}</h4>
          <p>${this.getAttribute('description')}</p>
          <a href="#"><i class='fas fa-external-link-alt'></i></a>
        </div>
      </div>
    `;
  }
}

customElements.define('portfolio-item', PortfolioItem);
