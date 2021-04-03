import React, { useState, useEffect, Fragment, MetaHTMLAttributes} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import axios from 'axios'
import { Header } from './Header'
import { ReviewForm } from './ReviewForm'
import './airline-show.scss'
import { WithMetadata } from 'typescript'

interface MatchParams {
    slug: string,
}

export function Airline({ match }: RouteComponentProps<MatchParams>) {
    const [airline, setAirline]:Array<any> = useState([])
    const [review, setReview] = useState({
        title: '',
        description: '',
        score: 0,
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const slug = match.params.slug
        const url = `/api/v1/airlines/${slug}`
        axios.get(url)
        .then(resp => {
            console.log(resp)
            setAirline(resp.data)
            setLoading(true)
        })
        .catch(err => console.error(err))
    }, [])

    const handleChange = (e: Event) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[(e.target as HTMLTextAreaElement).name]: (e.target as HTMLTextAreaElement).value}))

        console.log('review', review)
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        
        const csrfToken = (document.querySelector('[name=csrf-token]') as HTMLMetaElement).content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const airline_id = airline.data.id
        axios.post('/api/v1/reviews', {review, airline_id})
        .then(resp => {
            const included = [...airline.included, resp.data.data]
            setAirline({...airline, included})
            setReview({
                title: '',
                description: '',
                score: 0
            })
        })
        .catch( err => console.error(err))
    }

    return (
        <div className="wrapper">
            {loading && 
                <Fragment>
                    <div className="column">
                    <div className="main">
                        <Header 
                            attributes={airline.data.attributes}
                            reviews={airline.included}
                        />
                        <div className="review">

                        </div>
                    </div>
                    </div>
                    <div className="column">
                        <ReviewForm 
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={airline.data.attributes}
                            review={review}
                        />
                    </div>
                </Fragment>
            }
        </div>
    )
}