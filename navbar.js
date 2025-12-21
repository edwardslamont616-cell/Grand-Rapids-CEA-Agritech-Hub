class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        :host(.scrolled) {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          max-width: 100%;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          color: #14532d;
          text-decoration: none;
        }
        
        .logo-icon {
          margin-right: 0.5rem;
          color: #16a34a;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 2rem;
        }
        
        .nav-links a {
          color: #1e293b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #16a34a;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #16a34a;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #1e293b;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
          
          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: none;
          }
          
          .mobile-menu.open {
            display: block;
          }
          
          .mobile-menu ul {
            flex-direction: column;
            list-style: none;
          }
          
          .mobile-menu li {
            margin: 0.5rem 0;
          }
          
          .mobile-menu a {
            display: block;
            padding: 0.75rem 1rem;
            color: #1e293b;
            text-decoration: none;
            font-weight: 500;
            border-radius: 0.5rem;
            transition: background 0.3s;
          }
          
          .mobile-menu a:hover {
            background: #f1f5f9;
          }
        }
      </style>
      
      <nav class="navbar">
        <a href="#" class="logo">
          <span class="logo-icon">🌱</span>
          <span>AgriTech</span>
        </a>
        <ul class="nav-links">
          <li><a href="#problem">Problem</a></li>
          <li><a href="#ecosystem">Ecosystem</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#strategy">Strategy</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#investment">Investment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
<button class="mobile-toggle">
          <i data-feather="menu" class="w-6 h-6"></i>
        </button>
</nav>
      <div class="mobile-menu" id="mobile-menu">
        <ul>
          <li><a href="#problem">Problem</a></li>
          <li><a href="#ecosystem">Ecosystem</a></li>
          <li><a href="#technology">Technology</a></li>
          <li><a href="#strategy">Strategy</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#investment">Investment</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
`;
    
    // Initialize feather icons
    setTimeout(() => {
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    }, 0);
  }
}

customElements.define('custom-navbar', CustomNavbar);