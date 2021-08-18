interface RSSVue {
  hasError: boolean;
  message: string;
  feedUrl: string;
  items: RSSItem[];
}

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
