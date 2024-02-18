/**
 * @file main.js
 * @author typedef
 * @title constelia x3
 * @description Constellation4 configuration editor and AI.
 */
const {
    app,
    BrowserWindow
} = require('electron');

/**
 * useful to automatically reload the page instead of having to relaunch the application per edit to index.html
 * only needed for debug development
 */
/*
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});
 */

/**
 * main
 *
 * create our browser window
 */
function main()
{
    /**
     * the reason why `alwaysOnTop` is enabled is for Linux users with tiling managers. the attribute treats the window as a floating window instead.
     * this doesn't really work for hyprland, you would need to manually do this: windowrule = float,^(consteliax3)$ # consteliax3
     *
     * i guess windows users benefit from this too lol
     * @type {Electron.CrossProcessExports.BrowserWindow}
     */
    const window = new BrowserWindow({
        width: 1024,
        height: 800,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    /**
     * hide the menu bar
     */
    window.setMenuBarVisibility( false );

    /**
     * window created, let's load our html file now.
     */
    window.loadFile('index.html');
}

app.on('ready', main);