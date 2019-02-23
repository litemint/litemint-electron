/**
 * @overview Litemint electron.
 * @copyright 2018-2019 Frederic Rezeau.
 * @copyright 2018-2019 Litemint LLC.
 * @license [MIT]{@link https://github.com/litemint/litemint-electron/blob/master/LICENSE}
 */

const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow(
        {
            width: 1024,
            height: 768,
            minWidth: 800,
            minHeight: 600,
            icon: path.join(__dirname, "build/icon.ico")
        });

    mainWindow.loadURL("https://app.litemint.com");
    Menu.setApplicationMenu(null);
    //mainWindow.webContents.openDevTools();

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
