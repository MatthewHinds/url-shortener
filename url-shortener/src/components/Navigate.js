import React, { useState, useEffect } from 'react'
import api from '../api/url'

const Navigate = (props) => {

    useEffect(() => {
       async function getUrl() {
           await api.getUrl(props.match.params.shortUrl).then(response => {
               if (response.data.success) {
                   const data = response.data.data;
                   window.location.replace(data.url);
               }
           })
           .catch(error => console.error(error));
       }
       getUrl();
    });

    return (
        <div>
            <h1>Wooo! Redirecting...</h1>
        </div>
    )
}

export default Navigate
