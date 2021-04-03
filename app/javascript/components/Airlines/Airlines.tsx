import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Airline } from './Airline'

export function Airlines () {
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        // Get all airlines from API
        axios.get('/api/v1/airlines.json')
        .then( resp => {
            console.log(resp)
            setAirlines(resp.data.data)
        })
        .catch( err => console.error(err))
        
    }, [airlines.length])

    const list = airlines.map( (item: any) => {
        return (
            <Airline 
                key={item.attributes.name}
                attributes={item.attributes} 
            />
        )
    })

    return (
        <Fragment>
            <div className="home">    
                <div className="header">
                    <h1>OpenFlights</h1>
                    <div className="subheader">Honest, unbiased airline reviews.</div>
                </div>
                <div className="grid">
                    {list}
                </div>
            </div>
        </Fragment>
    )
}