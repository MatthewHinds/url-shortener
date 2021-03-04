import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import api from '../api/url'

const CreateUrl = () => {
    const [url, setUrl] = useState("https://www.google.com/");
    const [shortUrl, setShortUrl] = useState();
    const [expirationDate, setExpirationDate] = useState(new Date());
    const [remember, setRemember] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        shortenUrl();
    };

    const shortenUrl = async () => {
        const date = new Date();
        const payload = {
            url: url,
            shortUrl: nanoid(6, url),
            expirationDate: date.toISOString()
        };

        await api.storeUrl(payload)
            .then(response => {
                if (response.data.success) {
                    setShortUrl(`${window.location.href}${payload.shortUrl}`);
                }
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Input a URL </label>
                <input type="url" id="input-url" onChange={event => setUrl(event.target.value)}></input>
                <button type="submit" value="Create URL">Create URL</button>
            </form>

            <h1>Short Url: <a href={shortUrl}>{shortUrl}</a></h1>
        </div>
    )
}

export default CreateUrl
