import React from 'react'

interface AirlineProps {
    attributes: {
        image_url: String,
        name: String,
        avg_score: Number,
        slug: String
    }
    reviews: [{
        id: string,
        attributes: {
            title: String,
            description: String,
            score: Number,
            airline_id: Number
        }
    }]
}

export function Header(props: AirlineProps) {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length

    return (
        <div className="header-wrapper">
            <h1><img src={`${image_url}`} alt={`${name}`}/>{name}</h1>
            <div>
                <div className="total-reviews">Total Reviews: {total}</div>
                <div className="star-rating"></div>
                <div className="total-out-of">{avg_score} out of 5</div>
            </div>
        </div>
    )
}