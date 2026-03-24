# Chat Focus Mode Mockup

This is a small browser prototype for a chat layout where previous conversations stay hidden until the user hovers near the left edge.

## Files

- `index.html`: markup for the sidebar and active chat
- `styles.css`: layout, hover reveal, typography, and responsive behavior
- `script.js`: pin, temporary reveal, and keyboard behavior for the sidebar
- `.vscode/extensions.json`: recommends a simple local preview extension in VS Code

## How to use

Open `index.html` in a browser.

Interaction details:

- Hover near the left edge to reveal old chats
- Click the left-edge handle to temporarily open the history
- Click `Pin sidebar` to keep the history open
- Press `[` to pin the sidebar
- Press `]` or `Esc` to release it back to hover mode

## VS Code workflow

If you use VS Code, install the recommended preview extension for one-click local browser preview.
