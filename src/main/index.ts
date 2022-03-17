// Native
import { join } from 'path'

// Packages
import { BrowserWindow, app } from 'electron'
import isDev from 'electron-is-dev'
import { createServer } from 'vite'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
    },
  })

  if(isDev) {
    const server = await createServer({
      configFile: 'src/renderer/vite.config.ts'
    })
    await server.listen()
    win.loadURL(`http://localhost:${server.config.server.port}`)
  }
  else {
    win.loadURL(`file://${join(__dirname, "../renderer/index.html")}`)
  }
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)