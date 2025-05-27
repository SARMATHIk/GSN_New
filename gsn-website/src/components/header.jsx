import './header.css';
import heroImage from '../img/illustration-1.webp';


function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">GSN</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Join Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="get-started">Get Started</button>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <p className="tagline">🚀 Elevating Business. Empowering Spirit.</p>
          <h1>Welcome to <span className="highlight">Global Success Network</span></h1>
          <h2>Where AI Meets Conscious Collaboration</h2>
          <p className="description">
            GSN blends powerful business networking with AI-driven intelligence and a spiritually aligned vision.
            Unlock smart referrals, purposeful connections, and transformational growth.
          </p>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero illustration" />
        </div>
      </div>
    </header>
  );
}

export default Header;
