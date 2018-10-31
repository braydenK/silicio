const { app, BrowserWindow } = require('electron')


function createWindow() {
  // Create the browser window.
  window = new BrowserWindow({ width: 800, height: 600 })
  window.loadFile('index.html')
}

app.on('ready', createWindow)