import React, { useState, useEffect } from "react";
import BACKEND_URL from "../config";
import axios from "axios";
import AttractionCard from "./AttractionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../images/carousel11.jpg";
import image2 from "../images/carousel12.jpg";
import image3 from "../images/carousel13.jpg";
// import image4 from "../images/carousel12.jpg";

const Home = () => {

  //initial state
  const [attractions, setattractions] = useState([]);
  const [titleOne, setTitleOne] = useState('');
  const [category, setCategory] = useState("park");
  // console.log(attractions);

  
  //get year for articles
  const date = new Date();
  const day = date.getFullYear();
  
  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(BACKEND_URL + "/blogs/" + category );
      setattractions(res.data);

    };
    getArticles();

  }, [category]);

  const categoryChange = (e) => {
    e.preventDefault();
    setCategory(e.target.innerHTML);
  }
  <div></div>

  return (
    <div className="container-fluid">
      <div className="carouselDown">
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true">
          <img src={image1} className="sliderimg" alt="" />
          <img src={image2} className="sliderimg" alt="" />
          <img src={image3} className="sliderimg" alt="" />
          {/* <img src={image4} className="sliderimg" alt="" /> */}
        </AliceCarousel>
      </div>

      <div className="cats bg-dark">
        <div className="row cat-row">
          <div onClick={categoryChange} className="col cat text-center" id="park">
          <i class="fas fa-parking fa-3x"></i>
          <h5>Park</h5>
          </div>
          <div onClick={categoryChange} className="col cat text-center" id="food">
          <i class="fas fa-utensils fa-3x"></i>
          <h5>Food</h5>
          </div>
          <div onClick={categoryChange} className="col cat text-center" id="activity">
          <i class="fas fa-star fa-3x"></i>
          <h5>Activities</h5>
          </div>
          <div onClick={categoryChange} className="col cat text-center" id="nightlife">
          <i class="fas fa-cocktail fa-3x"></i>
          <h5>NightLife</h5>
          </div>
          <div onClick={categoryChange} className="col cat text-center" id="transport">
          <i class="fas fa-bus-alt fa-3x"></i>
          <h5>Transport</h5>
          </div>
          <div onClick={categoryChange} className="col cat text-center" id="art">
          <i class="fas fa-feather fa-3x"></i>
          <h5 >Art</h5>
          </div>
        </div>
      </div>

     <div className="container-fluid">
     <div className="row" id="attractRow">
          {attractions.map((attraction) => {
            return (
              <div
                className="col-md-6 col-sm-12"
                key={attraction.id}
                style={{
                  backgroundImage: `url("${attraction.imageUrl}")`
                }}
                id="attractImage">
                <AttractionCard
                  id={attraction.id}
                  website={attraction.websiteUrl}
                  category={attraction.category}
                  date={attraction.date}
                  title={attraction.title}
                  snippet={attraction.snippet}
                />
              </div>
            );
          })}
        </div>
     </div>
    </div>
  );
};

export default Home;
