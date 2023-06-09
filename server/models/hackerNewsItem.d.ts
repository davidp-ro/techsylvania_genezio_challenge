/**
 * Hacker News Article, as returned by the API
 */
export interface HackerNewsItem {
  "by": string,
  "descendants": number,
  "id": number,
  "kids": number[],
  "score": number,
  "time": number,
  "title": string,
  "type": string,
  "url": string
}

/**
 * Method reply 
 */
export interface HackerNewsResult {
  ok: boolean,
  items: HackerNewsItem[],
}
