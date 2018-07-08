// Native
const { format } = require('url')

// Packages
const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

require('electron-debug')()

//let mainWindow = AppWindow

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./app/src/ui')

  const mainWindow = new BrowserWindow({
    width: 960,
    height: 660,
    backgroundColor: '#fff',
    acceptFirstMouse: true,
  })

  const devPath = 'http://localhost:8000/app'

  const prodPath = format({
    pathname: resolve('renderer/out/start/index.html'),
    protocol: 'file:',
    slashes: true,
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
