import React from 'react';
import {Link} from 'react-router-dom';
import '../css/AttractionDiv.css';


const AttractionCard = ({category, date, title, snippet, website}) => {
    return (
        <div className="attractionCard">
        <Link to={{ pathname: `${website}` }} target="_blank">
        <div className="attractDiv"
        >
        <div className="category__date">
            <h6  >{category}</h6>
            <h6 >{date}</h6>
        </div>
        <h2 id="titleBlog">{title}</h2>
        <p >{snippet}</p>

            </div>
            </Link>
        </div>
    )
}

export default AttractionCard