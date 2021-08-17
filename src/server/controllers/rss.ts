import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res) => {
  const { url } = req.query;

  return res.json(url);
});

export default router;
