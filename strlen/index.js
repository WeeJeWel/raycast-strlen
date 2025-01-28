const clipboardy = require('clipboardy');

async function showClipboardLength() {
  try {
    const text = await clipboardy.read();
    console.log(`Clipboard contains ${text.length} characters.`);
  } catch (error) {
    console.error('Failed to read clipboard:', error);
  }
}

showClipboardLength();
