interface RSSItem {
  title: string;
  description: string;
  link: string;
  guid: string;
}

interface RSSResponse {
  status: 'ok' | 'error';
  message?: string;
  items?: RSSItem[];
}

interface RSSQuery {
  url: string;
}
