import Cache from 'node-cache';

const localCache = new Cache({
  stdTTL: 10 * 60 * 1000,
});

export default localCache;
