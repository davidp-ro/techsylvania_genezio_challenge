/**
 * "Minigames" that can be embedded into the app
 */
export class GamesIntegration {
  /**
   * Get an iframe containing the minigames website
   * 
   * @returns HTML iframe embed code for the wordle game
   */
  public static getWebsiteEmbedCode(): string {
    return /*html*/`
    <iframe 
      style="border-radius:12px"
      src="https://wordlegame.org/"
      width="100%" height="1000px" frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
    `;
  }
}
