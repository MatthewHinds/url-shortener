import React, { useState, useEffect } from 'react'

const Navigate = (props) => {

    useEffect(() => {
        console.log(props.match.params.shortUrl)
    });

    return (
        <div>
            <h1>Wooo! Redirecting...</h1>
        </div>
    )
}

export default Navigate
