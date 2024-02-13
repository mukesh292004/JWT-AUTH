const express = require('express');
const {getall,getid,postit,deleteit,update} = require('./RouteController');
const AuthMiddleware=require('../middleware/AuthMiddleware')

const router = express.Router();
router.use(AuthMiddleware)
router.get('/',getall );
router.get('/:id',getid);
router.post('/',postit );
router.patch('/:id',update);
router.delete('/:id', deleteit);
module.exports = router;
