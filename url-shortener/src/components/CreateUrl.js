import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react'

const CreateUrl = () => {
    const [url, setUrl] = useState();
    const [expirationDate, setExpirationDate] = useState(new Date());
    const [remember, setRemember] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(shortenUrl());
    };

    const shortenUrl = () => {
        return nanoid(6, url);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Input a URL </label>
                <input type="url" id="input-url" onChange={event => setUrl(event.target.value)}></input>
                <button type="submit" value="Create URL">Create URL</button>
            </form>
        </div>
    )
}

export default CreateUrl