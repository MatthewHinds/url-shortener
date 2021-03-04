const Url = require('../models/url-model')

/**
 * Store the url
 */
const storeUrl = (request, response) => {
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
};

/**
 * Retrieve the short url
 */
const getUrl = async (request, response) => {
    await Url.findOne({ shortUrl: request.params.shortUrl }, (error, url) => {
        if (error) {
            return response.status(400).json({
                success: false,
                error: error
            });
        }

        if (!url) {
            return response.status(400).json({
                success: false,
                error: 'ShortUrl was not found or it has been expired'
            });
        }

        return response.status(200).json({
            success: true,
            data: url
        });

    }).catch(error => console.error(error));
};

/**
 * Exports
 */
module.exports = {
    storeUrl,
    getUrl
};