import React from 'react'
import Header from "../Components/Header.jsx"
import "./CSS/Hero.css"
import Button from "../Components/Button.jsx"

const Hero = () => {
  return (
    <main className="mainWrapper">
      <Header />
      <section className="mainHero">
        <h1>Unlimited movies, TV <br /> shows, and more</h1>
        <h5>Starts at ₦2,500. Cancel anytime.</h5>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
        <div className="containerWrap">
            <input className='searchBar' type="text" placeholder="Email Address"/>
            <Button className="btnStart" name="Get Started"/>
        </div>
      </section>
    </main>
  )
}

export default Hero
