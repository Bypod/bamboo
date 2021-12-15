import React from 'react'
import accLogo from './media/acc-logo.svg'
import greyLogo from './media/Grey-long-logo.svg'
import './home.css'

export default function Home() {
    return (
        <div class="home-main-container">
            <header>
                <nav class="home-navbar">
                    <div className="nav-left">
                        <img src={greyLogo} alt="" />
                    </div>
                    <div className="nav-right">
                        <a href="/friends">friends</a>
                        <a href="">library</a>
                        {/* <img src={bPlus} alt="" /> */}
                        <img src={accLogo} alt="" id="acc-badge"/>
                    </div>
                </nav>
            </header>
            <main>
                <h1 class="genre-text">Featured</h1>
                <div className="featured">
                    <a href="" id="halo-button">Play Now</a>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>Bamboo exclusive</h2>
                        <a href="">more</a>
                    </div>
                    <div className="genre-games">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games" />
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" />
                    </div>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>Bamboo exclusive</h2>
                        <a href="">more</a>
                    </div>
                    <div className="genre-games">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games" />
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" />
                    </div>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>Bamboo exclusive</h2>
                        <a href="">more</a>
                    </div>
                    <div className="genre-games">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games" />
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" />
                    </div>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>Bamboo exclusive</h2>
                        <a href="">more</a>
                    </div>
                    <div className="genre-games">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games" />
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
