const Url = require('../models/url-model')

createUrl = (request, response) => {
    const body = request.body;
    if (!body) {
        return response.status(400).json({
            success: false,
            error: "You must provide a URL"
        });
    }

    const url = new Url(body);
    if (!url) {
        return response.status(400).json({
            success: false,
            error: err
        });
    }

    url.save()
        .then(() => {
            return response.status(201).json({
                success: true,
                id: url._id,
                message: "URL created"
            });
        })
        .catch(error => {
            return response.status(400).json({
                error,
                message: "URL was not created"
            });
        });
}

module.exports = {
    createUrl
}