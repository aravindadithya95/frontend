
exports.get = (req, res) => {
    if(req.App.user === undefined){
        return res.redirect(`/?url=${encodeURIComponent(req.originalUrl)}`);
    }
    res.render('everyones-work', {
        scripts: ['/static/react_apps.js'],
        userId: req.App.user.userId,
        assignmentId: req.params.assignmentId
    });
};
