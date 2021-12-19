//imports
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
                        <img src="https://xeragame.com/img/shareimage_new.jpg" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1782210/capsule_616x353.jpg?t=1635555468" alt="" class="margin-games" />
                        <img src="https://www.dlcompare.com/upload/news/image/6645--escape-from-tarkov-expands-its-customs-maps-and-adds-new-weapons.jpeg" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/275850/header_alt_assets_5.jpg?t=1634736686" alt="" class="margin-games"/>
                        <img src="https://www.nintendo.com//content/dam/noa/en_US/games/switch/s/stardew-valley-switch/stardew-valley-switch-hero.jpg" alt="" />
                    </div>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>New Releases</h2>
                        <a href="">more</a>
                    </div>
                    <div className="genre-games">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1517290/capsule_616x353.jpg?t=1639680673" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1248130/capsule_616x353.jpg?t=1637940425" alt="" class="margin-games" />
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1153640/capsule_616x353_alt_assets_0.jpg?t=1638563776" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg?t=1639071030" alt="" class="margin-games"/>
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/1088850/header.jpg?t=1637678523" alt="" />
                    </div>
                </div>
                <div className="bamboo-exclusive">
                    <div className="genre-text">
                        <h2>Battle Royale</h2>
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
                        <h2>Racing</h2>
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
                        <h2>RPG</h2>
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
                        <h2>Strategy</h2>
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
                        <h2>Single Player</h2>
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
