import express from 'express';
import uniqid from 'uniqid'
import { genres } from './genresData';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});

export default router;