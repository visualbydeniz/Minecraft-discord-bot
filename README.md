# Minecraft Discord Bot 

> ⚠️ **Disclaimer**: Some placeholder names such as `PixelCraft` were used for illustrative purposes only and have no affiliation with any existing brand, company, or server.
> > Note: Some internal filenames like `oylama.js` or `sürüm.js` retain their original Turkish names for legacy consistency. Their functions are fully localized in English.
  
**Note:** This project was originally created in 2022 when I was 15 years old, as one of my very first coding attempts (mainly self-taught and inspired by tutorials).  
In 2025, I revisited the code, refactored it, translated everything into English, and published this improved version here on GitHub.

## 🔧 Features

- Modular command system  
- Embedded message styling  
- Minecraft server status commands  
- Utility commands (ping, version info, etc.)  
- Social & web info embeds  
- Basic moderation commands (vote, message cleanup, etc.)  
- Voice channel giveaway feature  

 ## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   npm install
3. Create a `.env` file in the root directory and add your bot token:
   TOKEN=your_discord_bot_token_here
4. Start the bot:
   node index.js

### Configuration

- Add your bot token to a `.env` file or directly into `index.js`  
  *(Recommended: use `.env` for security purposes)*  
- Place all command files inside the `commands/` directory  
- Customize embeds, images, and links based on your own server

## 📋 Example Commands

- `!ip` → Shows the server IP  
- `!version` → Shows supported Minecraft versions  
- `!wiki` → Shows server wiki  
- `!vote` → Vote link for the server  
- `!clear <number>` → Clears messages (admin only)  
- `!voicegiveaway <reward>` → Picks a random winner from voice chat  
- `!report <message>` → Sends a complaint/report to admins  

## 👤 Author

This bot was developed by **Deniz Ağlar**, initially for a Minecraft project.  
It has since been improved, translated, and adapted for use in English-speaking communities.  
You can reach me via GitHub or check out other projects here.

## 📄 License

This project is licensed under the MIT License.  
You are free to modify, use, and share it — attribution is appreciated but not required.
