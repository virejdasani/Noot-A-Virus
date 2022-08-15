// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");

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

  app.dock.hide();

  // mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setSkipTaskbar(true);
  // mainWindow.setResizable(false);
  // mainWindow.setFocusable(false);
  // mainWindow.setAlwaysOnTop(true, "floating", 1);
  // mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setFullScreenable(false);

  if (process.platform == "darwin") {
    // Don't show the app in the dock for macOS
    app.dock.hide();
  } else {
    // To hide the app in the dock for windows and linux
    window.setSkipTaskbar(true);
  }

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
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
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
