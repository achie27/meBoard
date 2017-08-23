'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bp = require('body-parser');
const Comment = require('./model/comments');

var app = express();
var router = express.Router();

var port = 8080;

const mongo = 'mongodb://lol:nope@ds151163.mlab.com:51163/storemedaddy';
mongoose.connect(mongo, {useMongoClient : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conn error'));

app.use(bp.urlencoded({extended : true}));
app.use(bp.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', (req, res) => {
    res.json({message : 'working!'});
});

// router.get('/comments', (req, res) => {
//     Comment.find((err, comments) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(comments);
//     })
// });

// router.post('/comments', (req, res)=>{
//     var comment = new Comment();
//     comment.author = req.body.author;
//     comment.text = req.body.text;
    
//     comment.save((err)=>{
//         if(err)
//             res.send(err);
//         res.json({message : 'added!'});
//     })
// });

router.route('/comments')
    .get((req, res)=>{
        Comment.find((err, comments) => {
            if(err){
                res.send(err);
            }
            res.json(comments);
        })
    })
    .post((req, res)=>{
        var comment = new Comment();
        comment.author = req.body.author;
        comment.text = req.body.text;
        
        comment.save((err)=>{
            if(err){
                res.send(err);o
            }
            res.json({message : 'added!'});
        })
    });
    
router.route('/comments/:comment_id')
    .put((req, res) => {
        Comment.findById(req.param.comment_id, (err, comment) => {
        	if(err){
        		res.send(err);
        	} 
        	(req.body.author) ? comment.author = req.body.author : null;
        	(req.body.text) ? comment.text = req.body.text : null;
        	
        	comment.save((err) => {
        		if(err){
        			res.send(err);
        		}
        		res.json({message : 'updated!'});
        	});
        });
    })
    .delete((req, res) => {
    	Comment.remove({ _id : req.param.comment_id}, (err, comment) => {
    		if(err){
    			console.error(err);
    			res.send(err);
    		}
    		res.send(JSON.stringify(comment));
    		res.json({message : 'deleted!'});
    	});
    })
    

app.use('/api', router);

app.listen(port, () => {
    console.log(`on port ${port}`);
});