import express from 'express'
import { google, Signin, Signup, Signout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup' , Signup)
router.post('/signin' , Signin)
router.post('/google' , google)
router.get('/signout' , Signout)


export default router;