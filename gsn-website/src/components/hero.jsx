import React from "react";
import "../styles/Hero.css";
import "../styles/style.css";
import heroImg from "../img/illustration-1.webp";
import avatar1 from "../img/avatar-1.webp";
import avatar2 from "../img/avatar-2.webp";
import avatar3 from "../img/avatar-3.webp";
import avatar4 from "../img/avatar-4.webp";
import avatar5 from "../img/avatar-5.webp";

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-lg-start">
            <div class="company-badge mb-4">
              <i class="bi bi-gear-fill "></i>
              Elevating Business. Empowering Spirit.
            </div>
            <h1 className="mb-4">
              Welcome to
              <br />
              <span className="gold-text">Global Success Network</span>
              <br />
              <span className="accent-text">
                Where AI Meets Conscious Collaboration
              </span>
            </h1>
            <p>
              GSN blends powerful business networking with AI-driven
              intelligence and a spiritually aligned vision. Unlock smart
              referrals, purposeful connections, and transformational growth.
            </p>
            <div className="d-flex justify-content-lg-start">
              <a href="#contact" className="btn-getstarted scrollto">
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 hero-img text-center">
            <img
              src={heroImg}
              className="img-fluid animated"
              alt="Hero Illustration"
            />
          </div>
        </div>
        <div className="hero-badge">
          <div className="avatars">
            {[avatar1, avatar2, avatar3, avatar4, avatar5].map((src, idx) => (
              <img src={src} alt={`avatar-${idx}`} key={idx} />
            ))}
            <span className="count">150+</span>
          </div>
          <p>150+ empowered businesses growing together with GSN</p>
        </div>
        <div
          className="row stats-row gy-4 mt-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <div className="stat-content">
                <h4>150+ Members</h4>
                <p className="mb-0">Across multiple industries</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="stat-content">
                <h4>25+ Businesses</h4>
                <p className="mb-0">Actively engaged in GSN</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="stat-content">
                <h4>120+ Referrals</h4>
                <p className="mb-0">Exchanged in early weeks</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <div className="stat-content">
                <h4>AI-Driven Growth</h4>
                <p className="mb-0">Smart matchmaking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
