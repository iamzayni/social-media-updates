import React from 'react';
import UploadPage from './pages/UploadPage';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">Lingare Studio</div>
        <nav>
          <a href="#collections">Collections</a>
          <a href="#featured">Featured</a>
          <a href="#creator-tools">Creator Tools</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">4.8/5 (45k reviews)</p>
        <h1>Ethical Fashion: Elegant and Sustainable</h1>
        <p className="hero-copy">
          Create, review, and publish polished social content with a storefront-inspired
          workflow and clean visual style.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#collections">Check collections</a>
          <a className="btn btn-ghost" href="#creator-tools">Start creating</a>
        </div>
      </section>

      <section id="collections" className="section">
        <h2>Our collections</h2>
        <div className="cards grid-three">
          <article className="card">
            <h3>New collection</h3>
            <p>Seasonal visuals and campaign concepts ready for your next drop.</p>
          </article>
          <article className="card">
            <h3>Sales</h3>
            <p>High-converting social creatives for discounts and flash promotions.</p>
          </article>
          <article className="card">
            <h3>Classics</h3>
            <p>Timeless assets that keep your feed cohesive and on-brand.</p>
          </article>
        </div>
      </section>

      <section id="featured" className="section">
        <h2>Featured products</h2>
        <div className="cards grid-three">
          <article className="card product">
            <h3>White Dress</h3>
            <p className="price">$240.00</p>
          </article>
          <article className="card product">
            <h3>Brown Dress</h3>
            <p className="price">$629.99</p>
          </article>
          <article className="card product">
            <h3>Lorem Dress</h3>
            <p className="price">$742.30</p>
          </article>
        </div>
      </section>

      <section id="creator-tools" className="section">
        <h2>Creator tools</h2>
        <div className="tools-grid">
          <div className="card">
            <h3>Upload content</h3>
            <UploadPage />
          </div>
          <div className="card">
            <h3>Admin dashboard</h3>
            <AdminDashboard />
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <h3>Contact us</h3>
          <p>123-123-123</p>
          <p>pro@email.com</p>
          <p>424 Yallala Avenue, Meadowville, WA 76543</p>
        </div>
        <p className="copyright">Copyright © 2026 Lingare Studio</p>
      </footer>
    </div>
  );
}

export default App;