const express = require('express');
const campsiteRouter = express.Router();


//This is the weekend workshop addition portion
campsiteRouter.route('/:campsiteId')//this is a URL parameter
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
 //res.end('Will send all the campsiteid to you');
 res.end(`Will add the campsiteId: ${req.params.campsiteId}`);
})
.post((req, res) => {
    res.end(`Will add the campsiteId: ${req.params.campsiteId} with description: ${req.body.description}`);//the only way to reference a url parameter is to use params - req.params.description does not yet exist and will comeback undefined as is.  You have to use body to have a description.
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites.Id'); //must match the same as what is in the url exactly.
})
.delete((req, res) => {
    res.end('Deleting all campsites.Id');
});


//This is the original campsiteRouter added during the week.  This is an end point. starts always need endpoint
campsiteRouter.route('/') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = campsiteRouter;