import React from 'react';
import './Home.css';
import myImage from './image1.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to My Profile !</h1>
        <img src={require('./image1.jpg')} alt="My Photo" className="profile-photo" />
      
      </header>
      <section className="cv-my">
        <h2>Hello !.
          <span> I'm Hiroshan Madusanaka.</span></h2>
        <p>I am an IT engineer undergraduate currently enrolled in (BIT) Hons in Network & Mobile Computing in Horizon campus who’s looking forward for any IT-related internship, to become a well-regarded IT professional in the future.</p>
       
      </section>
      
      <section className="cv-info">
        <h2>My Personal background</h2>
        <h3>(BIT) Hons in Network & Mobile Computing</h3>
        <p><strong>Institution:</strong> Horizon Campus, Malabe</p>
        <p><strong>Year:</strong> 2021 Present</p>
        <p><strong>Name:</strong> Poddiwala Marage Hiroshan Madusanka Kumara</p>
       
        <p><strong>Location:</strong> Colombo, Srilnaka</p>
        <h3>Qualifications</h3>
        <ul>
          <li>(BIT) Hons in Network & Mobile Computing</li>
          <li>GCE A/L -2019 (Technology Stream)</li>
          <li>GCE O/L -2015 </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
