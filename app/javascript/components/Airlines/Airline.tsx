import React from 'react'
import { NavLink } from 'react-router-dom'
import './airline.scss'

interface AirlineProps {
    attributes: {
        image_url: String,
        name: String,
        avg_score: Number,
        slug: String
    }
}

export function Airline(props: AirlineProps) {
    return(
        <div className="card">
            <div className="airline-logo">
                <img src={`${props.attributes.image_url}`} alt={`${props.attributes.name}`}/>
            </div>
            <div className="airline-name">
                {props.attributes.name}
            </div>
            <div className="airline-score">
                {props.attributes.avg_score}
            </div>
            <div className="airline-link">
                <NavLink to={`/airlines/${props.attributes.slug}`}>View Airline</NavLink>
            </div>
        </div>
    )
}