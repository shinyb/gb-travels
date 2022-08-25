import React from "react"

export default function Posts(props) {
    return (
        <div className="posts-container">
        
                <img src={`./images/${props.item.imageUrl}`}></img>
                            
            <div className="post-article">
                <p className="location">{props.item.location}</p>
                <img src="images/Fill-219.png" className="map-marker"/>
                <a href={props.item.googleMapsUrl} className="map-link"> View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
            
        </div>
            )
            }       
            