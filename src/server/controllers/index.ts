import express from 'express';
import rssController from './rss';

// eslint-disable-next-line new-cap
const router = express.Router();

router.use('/rss', rssController);

export default router;
