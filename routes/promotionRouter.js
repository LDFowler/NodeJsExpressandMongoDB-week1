const express = require('express');
const promotionRouter = express.Router();


//This is the weekend workshop addition portion
promotionRouter.route('/:promotionId')//this is a URL parameter
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
 //res.end('Will send all the promotionid to you');
 res.end(`Will add the promotionId: ${req.params.promotion}`);
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.params.promotionId} with description: ${req.body.description}`);//the only way to reference a url parameter is to use params - req.params.description does not yet exist and will comeback undefined as is.  You have to use body to have a description.
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotion.Id'); //must match the same as what is in the url exactly.
})
.delete((req, res) => {
    res.end('Deleting all promtion.Id');
});


//This is the original promotionRouter added during the week.  This is an end point. starts always need endpoint
promotionRouter.route('/') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

module.exports = promotionRouter;