// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");

var shortcutPressed = false;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    frame: false,
    transparent: true,
    hasShadow: false,
    show: false,
  });

  mainWindow.maximize();
  mainWindow.show();

  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setSkipTaskbar(true);
  mainWindow.setResizable(false);
  mainWindow.setFocusable(false);
  mainWindow.setAlwaysOnTop(true, "floating", 1);
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setFullScreenable(false);

  if (process.platform == "darwin") {
    // Don't show the app in the dock for macOS
    app.dock.hide();
  } else {
    // To hide the app in the dock for windows and linux
    mainWindow.setSkipTaskbar(true);
  }

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });

  const ret = globalShortcut.register("Alt+Shift+Control+X", () => {
    shortcutPressed = true;
    app.quit();
  });
});

// prevent quitting app except by shortcut
app.on("before-quit", function (event) {
  if (!shortcutPressed) {
    event.preventDefault();
  } else {
    app.quit();
  }
});
