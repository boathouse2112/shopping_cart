import React from 'react';
import Header from './../components/Header';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1>Have yourself a round one</h1>
          <h2>Premium circles at everyday prices</h2>
          <button type="button">View more</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
