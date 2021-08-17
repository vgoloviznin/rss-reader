interface RSSItem {
  title: string;
  description: string;
  url: string;
}

interface RSSResponse {
  status: 'ok' | 'error';
  message?: string;
  items?: RSSItem[];
}

interface RSSQuery {
  url: string;
}
