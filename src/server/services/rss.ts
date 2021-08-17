import axios from 'axios';

export async function getFeed(url?: string): Promise<RSSResponse> {
  if (!url) {
    return {
      status: 'error',
      message: 'Empty feed url',
    };
  }

  try {
    const response = await axios.get<RSSResponse>(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);

    return response.data;
  } catch (e) {
    return <RSSResponse>{ status: 'error', message: 'error' };
  }
}

export default { getFeed };
