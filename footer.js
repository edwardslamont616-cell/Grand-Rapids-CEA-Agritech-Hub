class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background: #14532d;
          color: #f0fdf4;
          padding: 4rem 5% 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-column h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: #22c55e;
        }
        
        .footer-column ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-column ul li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column ul li a {
          color: #bbf7d0;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-column ul li a:hover {
          color: #fff;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transition: all 0.3s;
        }
        
        .social-links a:hover {
          background: #22c55e;
          transform: translateY(-3px);
        }
        
        .copyright {
          text-align: center;
          padding-top: 3rem;
          margin-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #bbf7d0;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 5% 1.5rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-column">
            <h3>Urban AgriTech Hub</h3>
            <p>Revolutionizing food production through integrated technology ecosystems for regional resilience.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
            </div>
          </div>
          
          <div class="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Controlled Environment Agriculture</a></li>
              <li><a href="#">Solar-Powered Facilities</a></li>
              <li><a href="#">Blockchain Traceability</a></li>
              <li><a href="#">Urban Integration Models</a></li>
              <li><a href="#">Educational Programs</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Technology Whitepapers</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">News & Updates</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>PO BOX 1613 </li>
              <li>Grand Rapids, MI 49501</li>
              <li>info_agtech@icloud.com</li>
              <li>+1 (616) 889-3105</li>
            </ul>
          </div>
</div>
        
        <div class="copyright">
          <p>&copy; 2025 Urban AgriTech Hub. All rights reserved. Cultivating a sustainable future.</p>
        </div>
      </footer>
    `;
    
    // Initialize feather icons
    setTimeout(() => {
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    }, 0);
  }
}

customElements.define('custom-footer', CustomFooter);
