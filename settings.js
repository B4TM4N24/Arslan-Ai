// 🔒 ULTRA PRO MAX SECURITY SYSTEM
const fs = require("fs");
const crypto = require("crypto");

// 🔐 Anti-Tamper & Clone Protection
const botName = "𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓";
const ownerNumber = "919847169752";
const securityHash = "a1b2c3d4e5f6g7h8i9j0"; // Change this to your unique hash

// 🚨 Security Check
if (__filename.includes('node_modules') === false) {
    const currentFile = fs.readFileSync(__filename, "utf8");
    const fileHash = crypto.createHash('sha256').update(currentFile).digest('hex');
    
    if (!currentFile.includes(botName) || !currentFile.includes(ownerNumber) || 
        !currentFile.includes(securityHash)) {
        console.log(`
╔══════════════════════════════════╗
║   🚨 UNAUTHORIZED ACCESS ALERT   ║
╠══════════════════════════════════╣
║                                  ║
║  Bot Security Violation Detected ║
║  Original Owner: ${ownerNumber}  ║
║  Current Hash: ${fileHash.slice(0, 12)}... ║
║                                  ║
║  ❌ SYSTEM SHUTDOWN INITIATED    ║
╚══════════════════════════════════╝
        `);
        process.exit(1);
    }
}

// ⚡ ULTRA PRO MAX SETTINGS
const settings = {
  // 🌟 Branding & Identity
  botName: "𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓",
  packname: "𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓",
  author: "𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓",
  version: "3.0.0", // Major version upgrade
  
  // 👑 Ownership
  botOwner: "𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓",
  ownerNumber: "919847169752",
  coOwners: [], // Add secondary owners if needed
  
  // ⚙️ Operation Modes
  MODE: "public", // public/private/group-only
  commandMode: "public", // Legacy support
  
  // 💎 Premium Features
  autoreact: {
    status: false,
    emoji: "❤️", // Default reaction
    whitelist: [] // Numbers to always react to
  },
  
  autoReply: {
    status: false,
    message: "🤖 𝞜𝞢𝞦𝞦𝞓𝞓𝞓𝞓𝞓𝞓 is currently busy. I'll reply soon!"
  },
  
  // 🔐 Security
  antiSpam: true,
  antiVirusScan: true,
  maxCommandUsage: 30, // Commands per minute limit
  
  // 🌐 APIs
  giphyApiKey: "qnl7ssQChTdPjsKta2Ax2LMaGXz303tq",
  openaiKey: "sk-proj-xxxxxxxxxxxxxxxx", // New format
  removeBgKey: "rmbg-xxxxxxxxxxxx",
  
  // 🎨 Media
  menuMedia: {
    image: "https://files.catbox.moe/ol64u7.png",
    video: "https://files.catbox.moe/wjvte9.mp4",
    gif: "https://files.catbox.moe/tg02tg.mp4"
  },
  
  // 📊 Analytics
  analytics: true,
  errorReporting: true,
  
  // 🌍 Metadata
  description: "⚡ The Most Advanced WhatsApp Bot with ULTRA PRO MAX Features",
  website: "https://arslan-md.com",
  ytchannel: "https://youtube.com/@arslanmdofficial",
  repo: "https://github.com/Arslan-MD/Arslan-Ai",
  
  // 🔄 System
  autoUpdate: true,
  backupInterval: 24, // Hours
  maxLogSize: 50 // MB
};

// 💻 Developer Options
settings.devMode = false;
settings.debugLevel = "error"; // error/warning/info/debug

// 🛡️ Security Enhancements
settings.securityHash = securityHash;
settings.encryptionKey = "ultrapro-max-secure-key"; // For sensitive data

// ✅ Backward Compatibility
settings.commandMode = settings.MODE;

module.exports = settings;
