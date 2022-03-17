const { build } = require('electron-builder')

build({
    config: {
        appId: 'com.vite-react-electron.app',
        productName: 'Vite + React + Electron App',
        files: ['out'],
    },
})