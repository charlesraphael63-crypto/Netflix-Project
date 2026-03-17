import React from 'react'
import "./CSS/Section.css"

const Section = () => {
  return (
    <main className="mainSection">
      <section className="menuSection">
        <aside className="topSection">
            <h3>Trending now</h3>
            <section className="imgWrapper">
                <article className="holder">
                    <div className="imgContainer"></div>
                    <div className="imgContainer">2</div>
                    <div className="imgContainer">3</div>
                    <div className="imgContainer">4</div>
                    <div className="imgContainer">5</div>
                </article>
                <article className="holder">
                    <div className="imgContainer">6</div>
                    <div className="imgContainer">7</div>
                    <div className="imgContainer">8</div>
                    <div className="imgContainer">9</div>
                    <div className="imgContainer">10</div>
                </article>
            </section>
        </aside>
        <aside className="bottomSection">
            <h3>More reason to join</h3>
            <section className="boxContainer">
                <article className="boxTextRight">
                    <div className="box">
                        <h4>Enjoy on your TV</h4>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, <br /> Blu-ray players, and more.</p>
                    </div>
                    <div className="box">
                        <h4>Download your shows to watch offline</h4>
                        <p>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className="box">
                        <h4>Watch everywhere</h4>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, <br /> laptop, and TV.</p>
                    </div>
                    <div className="box">
                        <h4>Create profiles for kids</h4>
                        <p>Send kids on adventures with their favorite characters in a space <br /> made just for them — free with your membership.</p>
                    </div>
                </article>
            </section>
        </aside>
      </section>
    </main>
  )
}

export default Section
