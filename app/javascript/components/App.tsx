import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Airline } from '../components/Airline/Airline'
import { Airlines } from '../components/Airlines/Airlines'

export function App() {
    return (
        <Switch>
            <Route exact path="/" component={Airlines}/>
            <Route exact path="/airlines/:slug" component={Airline} />
        </Switch>
    )
}