
import { mocked } from 'ts-jest/utils'
import axios from 'axios';
import { getFeed } from '../../src/services/rss';
import cache from '../../src/utils/cache';

jest.mock('../../src/utils/cache');
jest.mock('axios');

const mockedCacheGet = mocked(cache.get, true);
const mockedCacheSet = mocked(cache.set, true);
const mockedAxiosGet = mocked(axios.get, true);

describe('-- getFeed test', () => {
  beforeEach(() => {
    mockedCacheGet.mockReset();
    mockedCacheSet.mockReset();
    mockedAxiosGet.mockReset();
  });

  test('returns error message if empty URL is provided', async () => {
    const url = '';
    const toTest = {
      status: 'error',
      message: 'Empty feed url',
    };

    const result = await getFeed(url);

    expect(result).toStrictEqual(toTest);
  });

  test('calls cache.get', async () => {
    const url = 'some-url';
    const toTest = { test: 1 };
    mockedCacheGet.mockReturnValue(toTest);

    await getFeed(url);

    expect(mockedCacheGet).toBeCalledTimes(1);
  });

  test('returns cached value', async () => {
    const url = 'some-url';
    const toTest = { test: 1 };
    mockedCacheGet.mockReturnValue(toTest);

    const result = await getFeed(url);

    expect(result).toStrictEqual(toTest);
  });

  test('calls rss2json with proper url', async () => {
    const url = 'some-url';

    mockedCacheGet.mockReturnValue(false);
    mockedAxiosGet.mockReturnValue(Promise.resolve({ data: {} }));

    await getFeed(url);

    expect(mockedAxiosGet).toBeCalledTimes(1);
    expect(mockedAxiosGet).toBeCalledWith(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
  });

  test('cache is set with returned value', async () => {
    const url = 'some-url';
    const toTest = { items: [{ title: 'a' }] };

    mockedCacheGet.mockReturnValue(false);
    mockedAxiosGet.mockReturnValue(Promise.resolve({ data: toTest }));

    await getFeed(url);

    expect(mockedCacheSet).toBeCalledTimes(1);
    expect(mockedCacheSet).toBeCalledWith(url, toTest);
  });

  test('response from rss2json is returned', async () => {
    const url = 'some-url';
    const toTest = { items: [{ title: 'a' }] };

    mockedCacheGet.mockReturnValue(false);
    mockedAxiosGet.mockReturnValue(Promise.resolve({ data: toTest }));

    const result = await getFeed(url);

    expect(result).toStrictEqual(toTest);
  });
});

