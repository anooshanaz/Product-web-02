import React from 'react'
import Navbar from './Navbar'
import "../style/hero.css"

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
    <Navbar />
    <div className="content-container">
      <div className="hidden-lg"></div>
      <div className="title-container">
        <div>
          <p data-aos="zoom-in" className="highlight-text">Shop Online</p>
          <p data-aos="zoom-in-up" className="highlight-text">Your Best Choice</p>
          <div data-aos="zoom-in-up" className="description">
            <p>
              Welcome to Fashion bag, your go-to online destination for a stylish
              and versatile collection of bags. Whether you're looking for trendy
              handbags,
            </p>
            <p>
              practical backpacks, or sleek crossbody bags, we have something for
              every occasion. Our curated selection features high-quality
              materials,
            </p>
            <p>
              timeless designs, and the latest fashion trends to suit your unique
              style.
            </p>
            <div className="button-container">
              <button className="order-button" data-aos="flip-left">Order now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}  

export default Hero
