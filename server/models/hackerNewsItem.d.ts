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

export interface HackerNewsResult {
  ok: boolean,
  items: HackerNewsItem[],
}
