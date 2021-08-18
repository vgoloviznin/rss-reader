import axios from 'axios';

import cache from '../utils/cache';

export async function getFeed(url?: string): Promise<RSSResponse> {
  if (!url) {
    return {
      status: 'error',
      message: 'Empty feed url',
    };
  }

  const cached = cache.get<RSSResponse>(url);

  if (cached) {
    return cached;
  }

  const response = await axios.get<RSSResponse>(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);

  cache.set(url, response.data);

  return response.data;
}

export default { getFeed };
