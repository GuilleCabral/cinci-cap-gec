import React, { useState, useEffect } from "react";
import BACKEND_URL from "../config";
import axios from "axios";
import AttractionCard from "./AttractionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import images from "../images/carousel11.jpg";
import image2 from "../images/carousel12.jpg";
import image3 from "../images/carousel13.jpg";
import image4 from "../images/carousel14.jpg";
import Image1 from "../media/image1.jpg";
import Image2 from "../media/image2.jpg";
import Image3 from "../media/image3.jpg";
import ContactForm from "./ContactForm";

const Home = () => {

  //initial state
  const [attractions, setattractions] = useState([]);
  const [titleOne, setTitleOne] = useState('');
  const [category, setCategory] = useState("park");
console.log(attractions);

  
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

  return (
    <div className="container-fluid">
      <div className="carouselDown">
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true">
          <img src={images} className="sliderimg" alt="" />
          <img src={image2} className="sliderimg" alt="" />
          <img src={image3} className="sliderimg" alt="" />
          <img src={image4} className="sliderimg" alt="" />
        </AliceCarousel>
      </div>

      <div className="categoryChoice text-center">
        <div className="catOne">
          <i class="fas fa-parking"></i>
          <h1 onClick={categoryChange}>Park</h1>
        </div>
        <div className="catOne">
          <i class="fas fa-utensils catOneicon"></i>
          <h1 onClick={categoryChange}>Food</h1>
        </div>
        <div className="catOne">
          <i class="fas fa-star"></i>
          <h1 onClick={categoryChange}>Activities</h1>
        </div>
        <div className="catOne">
          <i class="fas fa-cocktail"></i>
          <h1 onClick={categoryChange}>NightLife</h1>
        </div>
        <div className="catOne">
          <i class="fas fa-bus-alt"></i>
          <h1 onClick={categoryChange}>Transport</h1>
        </div>
        <div className="catOne" >
          <i class="fas fa-feather"></i>
          <h1 onClick={categoryChange}>Art</h1>
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
