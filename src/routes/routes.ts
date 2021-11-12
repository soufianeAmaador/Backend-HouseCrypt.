import express from 'express';
import user from '../controllers/user/log-in';

const router = express.Router();

//user endpoints
router.post('/login',user.login);

router.get('/token',user.generateToken);


export = router;
