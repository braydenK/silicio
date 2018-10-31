import { app, BrowserWindow } from 'electron';

// Global reference of window object needed so that the window doesn't
// get automatically closed with the JS object is garbage collected.
let window;

function createWindow() {
  // Create the browser window.
  window = new BrowserWindow({ width: 800, height: 600 });
  window.loadFile('index.html');

  // Opens DevTools
  window.webContents.openDevTools();

  // Emitted when the window is closed.
  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (window == null) {
    createWindow();
  }
});
