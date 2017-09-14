/**
 * Created by Sohail and Immanuel on 6/6/2017.
 */
import {API_URL} from '../../utils/react_constants';
exports.get = (req, res) => {
    if(req.App.user === undefined){
        res.redirect('/');
    }
    res.render('badges', {
        scripts: ['/static/react_apps.js'],
        userId: req.App.user.userId,
        apiUrl: API_URL
    });
};