const consts = require('../../utils/constants');

exports.get = (req, res) => {
    res.render('account', {
        scripts: ['/static/react_apps.js'],
        userId: req.App.user.userId,
        apiUrl: consts.API_URL
    });
};
