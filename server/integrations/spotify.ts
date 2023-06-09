/**
 * Spotify integration
 */
export class SpotifyIntegration {
  /**
   * @returns Spotify "Feel Good Morning" playlist URI
   */
  public static getSpotifyPlaylistUri(type: "standalone" | "embed"): string {
    if (type === "standalone") {
      return "https://open.spotify.com/playlist/37i9dQZF1EIhxsZ1zwdwMW?si=4e2ddbe130bf4b01";
    }

    return "https://open.spotify.com/embed/playlist/37i9dQZF1EIhxsZ1zwdwMW";
  }
  
  /**
   * Get the "Feel Good Morning" playlist as an iframe
   * 
   * @returns HTML iframe for the Spotify playlist
   */
  public static getSpotifyEmbedCode(): string {
    return /*html*/`
    <iframe 
      style="border-radius:12px"
      src=${this.getSpotifyPlaylistUri("embed")}
      width="100%" height="500px" frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy">
    </iframe>
    `;
  }
}
