const express = require ('express');
const postControllers = require ('../controllers/post');

const router = express.Router();

router.get('/', postControllers.getPosts);
router.post('/', postControllers.createPost);

module.exports = router;
