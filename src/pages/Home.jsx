import React from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

const Home = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
        <header>
      <div className="logo">
        <h1>Petroler</h1>
        <p>Fueling Your Journey with Drones</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
          {auth.currentUser ? (
            <li><button onClick={handleLogout}>Logout</button></li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Petroler</h2>
          <p>Revolutionizing petrol delivery with drones. Fast, efficient, and at your doorstep.</p>
          <Link to="/petrol">
            <button id="requestPetrol">Request Petrol</button>
          </Link>
        </div>
      </section>
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <p>Fast and efficient petrol delivery to your location using cutting-edge drone technology.</p>
        <div className="service-cards">
          <div className="service-card">
            <h3>Instant Delivery</h3>
            <p>Receive petrol at your location within minutes!</p>
          </div>
          <div className="service-card">
            <h3>Trackable Orders</h3>
            <p>Know exactly when your delivery is arriving via our tracking system.</p>
          </div>
          <div className="service-card">
            <h3>Safe & Secure</h3>
            <p>Our drones are equipped with the latest safety features for a smooth delivery experience.</p>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are Team Petrolers, a group of innovators dedicated to making your fuel delivery faster, safer, and more convenient with drone technology.</p>
      </section>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:contact@petroler.com">contact@petroler.com</a></p>
      </section>
    </div>
  );
};

export default Home;
