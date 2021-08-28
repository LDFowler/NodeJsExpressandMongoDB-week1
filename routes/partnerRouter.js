const express = require('express');
const partnerRouter = express.Router();


//This is the weekend workshop addition portion
partnerRouter.route('/:partnerId')//this is a URL parameter
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
 //res.end('Will send all the partnerid to you');
 res.end(`Will add the partnerId: ${req.params.partnerId}`);
})
.post((req, res) => {
    res.end(`Will add the partnerId: ${req.params.partnerId} with description: ${req.body.description}`);//the only way to reference a url parameter is to use params - req.params.description does not yet exist and will comeback undefined as is.  You have to use body to have a description.
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partner.Id'); //must match the same as what is in the url exactly.
})
.delete((req, res) => {
    res.end('Deleting all partner.Id');
});


//This is the original partnerRouter added during the week.  This is an end point. starts always need endpoint
partnerRouter.route('/') 
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;