import React, { Fragment } from 'react';
import styled from 'styled-components'

interface ReviewFormProps {
    handleChange: (e: Event) => void;
    handleSubmit: (e: Event) => void;
    attributes: {
        image_url: String,
        name: String,
        avg_score: Number,
        slug: String
    };
    review: {
        title: String,
        description: String,
        score: Number
    }
}

export function ReviewForm(props: ReviewFormProps) {

    const ratingOptions = [5,4,3,2,1].map((score, index) => {
        // console.log(index)
        return (
            <Fragment key={index}>
                <input key={score} type="radio" value={score} name="rating" onChange={() => console.log('selected: ', score)} id={`rating-${score}`} />
                <label key={"label" + score}></label>
            </Fragment>
        )
    })
    return(
        <div className="form-wrapper">
            <form onSubmit={(e: any) => props.handleSubmit(e)}>
                <div> Have an experience with {props.attributes.name} </div>
                <div className="field">
                    <input onChange={(e: any) => props.handleChange(e)} value={`${props.review.title}`} type="text" name="title" placeholder="Review Title" />
                </div>
                <div className="field">
                    <input onChange={(e: any) => props.handleChange(e)} value={`${props.review.description}`} type="text" name="description" placeholder="Review Description" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this airline</div>
                        <div className="rating-box">
                            {ratingOptions}
                        </div>
                    </div>
                </div>
                <button type="submit" className="button">Submit Review</button>
            </form>
        </div>
    )
}