/** Scope: Launch the starter prompt, provide copy fallback and preserve old model links. */
export class LandingPage {
  constructor(document, location, clipboard) {
    this.document = document;
    this.location = location;
    this.clipboard = clipboard;
  }

  connect() {
    const view = new URLSearchParams(this.location.search).get("view");
    if (["assembled", "exploded"].includes(view)) {
      this.location.replace(`./model.html${this.location.search}${this.location.hash}`);
      return;
    }
    this.prompt = this.document.querySelector("#starter-prompt");
    this.status = this.document.querySelector("#copy-status");
    this.document.querySelector("#desktop-launch").href =
      `codex://new?prompt=${encodeURIComponent(this.prompt.value)}`;
    this.document.querySelector("#copy-prompt").addEventListener("click", () => this.copy());
  }

  async copy() {
    // Clipboard access can fail when the browser denies permission or lacks the API.
    try {
      if (!this.clipboard) throw new Error("Clipboard unavailable");
      await this.clipboard.writeText(this.prompt.value);
      this.status.textContent = "Copied. Paste it into a fresh chat in your AI work application.";
    } catch {
      this.document.querySelector("#prompt-details").open = true;
      this.prompt.focus();
      this.prompt.select();
      this.status.textContent = "Select and copy the prompt below, then paste it into your AI work application.";
    }
  }
}

new LandingPage(document, window.location, navigator.clipboard).connect();
