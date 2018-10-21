class EmojiPicker extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const template = `
      <style>
        :host {
          width: 100px;
          height: 100px;
          font-size: 80px;
          position: relative;
          display: flex;
        }

        .emoji-panel {
          border: 4px solid var(--blue);
          border-radius: 5px;
          display: flex;
          position: absolute;
          transform: translateY(-50%);
        }
        .emoji-panel.hidden {
          display: none;
        }
        .emoji-panel button {
          border: none;
          background: transparent;
          font-size: inherit;
          cursor: pointer;
          background-color: var(--background);
        }

        .selected-emoji {
          margin: auto;
          color: var(--blue);
        }
      </style>

      <div class="emoji-panel hidden">
        <button>😃</button>
        <button>😞</button>
        <button>🚡</button>
      </div>

      <div class="selected-emoji">+</div>
    `;
    this.shadowRoot.innerHTML = template;

    this.emojiPanel = this.shadowRoot.querySelector('.emoji-panel');
    this.selectedEmoji = this.shadowRoot.querySelector('.selected-emoji');

    this.addEventListener('mouseenter', this.showEmojiPanel.bind(this));
    this.emojiPanel.addEventListener('mouseleave', this.hideEmojiPanel.bind(this));

    this.shadowRoot.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', this.selectEmoji.bind(this));
    })
  }

  showEmojiPanel() {
    this.emojiPanel.classList.remove('hidden');
  }
  hideEmojiPanel() {
    this.emojiPanel.classList.add('hidden');
  }

  selectEmoji(event) {
    const emoji = event.target.textContent;
    this.selectedEmoji.textContent = emoji;
    this.hideEmojiPanel();
  }
}

customElements.define('emoji-picker', EmojiPicker);
