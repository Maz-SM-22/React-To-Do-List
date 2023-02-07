const { GeneralError, BadRequest, NotFoundError } = require('../utils/error');

const handleErrors = (err, req, res, next) => {
    if (err instanceof NotFoundError) {
        return res.status(err.getStatusCode()).json({ error: err, message: err.message });
    }
    else if (err instanceof BadRequest) {
        return res.status(err.getStatusCode()).json({ error: err, message: err.message });
    }
    return res.status(500).json({
        error: new GeneralError('Unknown Error'),
        message: err.message
    });
}

module.exports = handleErrors; 
