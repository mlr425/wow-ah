import React from 'react'
import Item from './Item'
import '../css/items.css'
import { Container } from '@material-ui/core'
export default function Items() {
    //from here we'll pull the list in and start looping thru
    //to display each one
    // pic of item | stats | b.o + ending time
    return (
        <Container className="results-container">
            <Item/>
            <Item/>
            <Item/>
        </Container>
    )
}
