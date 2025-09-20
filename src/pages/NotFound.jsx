import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found-page">
    <Header />
    <main className="not-found-main">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" className="primary-btn">Go Home</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;