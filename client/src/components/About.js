import React, { useState, useEffect } from 'react';
import './About.css';
import Cont1_desk from '../media/cont1_desk.jpg';
import Cont1_mobile from '../media/cont1_mobile.jpg';
import Image1 from '../media/image1.jpg'
import Image2 from '../media/image2.jpg'
import Image3 from '../media/image3.jpg'
import Horseman1 from '../media/horseman1.png'
import Horseman2 from '../media/horseman2.png'
import Horseman3 from '../media/horseman3.png'
import Horseman4 from '../media/horseman4.png'
import ToPick1 from '../media/toPick1.jpg'
import ToPick2 from '../media/toPick2.jpg'
import ToPick3 from '../media/toPick3.jpg'
import ToPick4 from '../media/toPick4.jpg'
import ToPick5 from '../media/toPick5.jpg'
import ToPick6 from '../media/toPick6.jpg'
import ToPick7 from '../media/toPick7.jpg'
import Headlines from '../api/headlines';
import Guillermo from '../media/guillermo.jpg'
import Kushal from '../media/Kushal.jpg'
import Seth from '../media/seth.jpg'
import Todd from '../media/Todd.jpg'

const About = () => {

    /* Make container 1 responsive */
    const imageUrl1 = useWindowWidth() >= 650 ? Cont1_desk  : Cont1_mobile;

    return (
        <div className="container-fluid" id="container" >

            {/* container 1 - about us */}

            <div className="container-1" style={{backgroundImage: `url(${imageUrl1})` }}>
                <div className="content1">
                    <h4 className="center">About us</h4>
                    <p>Welome to the 4 Horseman of Cincy. We are a local Travel and Tourisum agency here to help Visotor's and local's discover the hidden gems in the Queen City.
                    </p>
                </div>
            </div>

            {/* container 2 - our mission */}

            <div className="container-2" >
                <div className="row" id="content2">
                    <div className="col col-sm-3 col-md-4 col-lg-4" id="content2a">
                        <h4 className="center" id="h4Conten2">Our mission</h4>
                        <p id="pContent2"> Our Mission at the 4 Horseman of Cincy is to provide visitors and locals with a uniqe perspective on Events, Attractions, Food, Nightlife and more in the Queen City.
                        </p>
                    </div>
                    <div className="col col-sm-3 col-md-4 col-lg-4" id="content2b">
                        <div id="imgRow">
                            <img id="img1" src={Image1} alt="neon-lights1" />
                            <img id="img2" src={Image2} alt="neon-lights2" />
                        </div>
                        <div id="imgRow2">
                            <img id="img3" src={Image3} alt="neon-lights3" />
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* container 3 - our team */}

            <div className="container-3" >
                <div className="row" id="content3" >
                    <h4 className="center" id="cont3h4">Our Team</h4>
                    <p id="p3">Self-named 'the 4 horsemen', each one is worse than the last! </p>
                </div>
                <div id="team" className= "row">
                    <div className="col-md-3 col-sm-12 center" id="teaMember">
                        {/* <img src={ Horseman1 } alt="seth" id="teamPic"/> */}
                        <p className="teamPic" id="sethPic"></p>
                        <h5>Seth Stephens</h5>
                        <a target="blank" href="https://www.linkedin.com/in/seththedev/" id="piCont"><i id="teamSocial"  class="fab fa-linkedin-in fa-2x"></i></a>
                        <a target="blank" href="https://www.instagram.com/seththedev/" id="piCont"><i id="teamSocial" class="fab fa-instagram fa-2x"></i></a>
                        <a target="blank" href="https://github.com/SethCodes" id="piCont"><i id="teamSocial" class="fab fa-github fa-2x"></i></a>
                    </div>
                    <div className="col-md-3 col-sm-12 center" id="teaMember">
                        {/* <img src={ Horseman2 } alt="guille" id="teamPic"/> */}
                        <p className="teamPic" id="guillermoPic"></p>
                        <h5>Guillermo Cabral</h5>
                        <a target="blank" href="https://www.linkedin.com/in/guillecabral/" id="piCont"><i id="teamSocial"  class="fab fa-linkedin-in fa-2x"></i></a>
                        <a target="blank" href="https://twitter.com/GuillermoECabr1" id="piCont"><i id="teamSocial" class="fab fa-twitter fa-2x"></i></a>
                        <a target="blank" href="https://github.com/GuilleCabral?tab=repositories" id="piCont"><i id="teamSocial" class="fab fa-github fa-2x"></i></a>
                    </div>
                    <div className="col-md-3 col-sm-12 center" id="teaMember">
                        {/* <img src={ Horseman3 } alt="todd" id="teamPic"/> */}
                        <p className="teamPic" id="ToddPic"></p>
                        <h5>Todd Cunningham</h5>
                        <a target="blank" href="https://www.linkedin.com/in/andrew-cunningham-b2362118b/" id="piCont"><i id="teamSocial"  class="fab fa-linkedin-in fa-2x"></i></a>
                        <a target="blank" href="https://github.com/tacunninghan4" id="piCont"><i id="teamSocial" class="fab fa-github fa-2x"></i></a>
                    </div>
                    <div className="col-md-3 col-sm-12 center" id="teaMember">
                        {/* <img src={ Horseman4 } alt="kushal" id="teamPic"/> */}
                        <p className="teamPic" id="KushalPic"></p>
                        <h5>Kushal Patel</h5>
                        <a target="blank" href="https://www.linkedin.com/in/kushal-patel-4a7898215/" id="piCont"><i id="teamSocial"  class="fab fa-linkedin-in fa-2x"></i></a>
                        <a target="blank" href="https://github.com/kushalpatel42" id="piCont"><i id="teamSocial" class="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
                {/* <div id="buttonTeam">
                    <a href="#" class="button">
		                <div class="part-text">
			                <span class="label">View the team</span>
		                </div>
                    </a>
                </div> */}
            </div>

            {/* container 4 - our top picks */}

            <div className="container-4" >
                <div className="" id="content4">
                    <h4 className="center" id="cont4h4">Our Top Picks</h4>
                    <p id="pPicks">Here are a few suggestions that will make your visit to the Queen City a unique and memerable experience
                    </p>
                </div>
                <div className= "container" id="contGallery">
                    <div class="gallery">
                        <div class="gallery__item gallery__item--1">
                            <img src={ToPick1} class="gallery__img" alt="Image 1"/>
                        </div>
                        <div class="gallery__item gallery__item--2">
                            <img src={ToPick2} class="gallery__img" alt="Image 2"/>
                        </div>
                        <div class="gallery__item gallery__item--3">
                            <img src={ToPick3} class="gallery__img" alt="Image 3"/>
                        </div>
                        <div class="gallery__item gallery__item--4">
                            <img src={ToPick4} class="gallery__img" alt="Image 4"/>
                        </div>
                        <div class="gallery__item gallery__item--5">
                            <img src={ToPick5} class="gallery__img" alt="Image 5"/>
                        </div>
                        <div class="gallery__item gallery__item--6">
                            <img src={ToPick6} class="gallery__img" alt="Image 6"/>
                        </div>
                        <div class="gallery__item gallery__item--7">
                            <img src={ToPick7} class="gallery__img" alt="Image 7"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* container 5 - local articles */}

            <div className="container-5" >
                <div className="content5">
                    <h4 className="center">Local articles</h4>
                    <p>Headlines Nationally and locally catch up with the news. Checkout what's going on with our local sports teams and other city events.
                    </p>
                </div>
                <div className="container-5b">
                     <Headlines />
                </div>
            </div>
        </div>
    )
};

/* Make container 1 responsive */
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};

export default About