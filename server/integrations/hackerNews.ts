import { HackerNewsResult, HackerNewsItem } from "../models/hackerNewsItem";

const fetch = require("node-fetch");

/**
 * This is a simple integration with HackerNews
 */
export class HackerNewsIntegration {
  /**
   * Fetch the top 10 stories from HN
   * 
   * @returns A promise that resolves to a list of the top 10 stories
   */
  public static async fetchTodaysTop10(): Promise<HackerNewsResult> {
    try {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      );
      if (!res.ok) {
        return {
          ok: false,
          items: [],
        };
      }

      let items: HackerNewsItem[] = [];

      /**
       * Returns a list of the top 500 HN Items: [36239212,36239195,...]
       */
      const json = (await res.json()) as number[];

      for (let idx = 0; idx < 10; ++idx) {
        /**
         * Fetching an individual article
         */
        const itemRes = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${json[idx]}.json`
        );
        items.push((await itemRes.json()) as HackerNewsItem);
      }

      return {
        ok: true,
        items,
      };
    } catch (e) {
      console.error(e);

      return {
        ok: false,
        items: [],
      };
    }
  }
}
