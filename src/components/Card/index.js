import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.url} alt="Puppy image"/>
        </div>
    )
}

