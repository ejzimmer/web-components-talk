class TwootPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          border: 4px solid var(--blue);
          border-radius: 5px;
        }
        .avatar {
          width: 100px;
          border-right: 4px solid var(--blue);
          flex-shrink: 0;
          align-self: stretch;
          display: flex;
        }
        img {
          width: 100%;
          margin: auto;
        }
        .content {
          font-size: 24px;
          padding: 0 1em;
        }
        emoji-picker {
          flex-shrink: 0;
          border-left: 4px solid var(--blue);
        }
      </style>
      <div class="avatar"><img /></div>
      <div class="content"><slot></slot></div>
      <emoji-picker></emoji-picker>
    `;

    this.shadowRoot.querySelector('img').src = this.attributes.avatar.value;
  }

}

customElements.define('twoot-post', TwootPost);
