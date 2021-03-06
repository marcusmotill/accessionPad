/**
 * Amy is Awesome!
 */
'use strict';
const app = require('app');
const ipc = require('ipc');

const BrowserWindow = require('browser-window');
const Menu = require('menu');

const angular = require('./bower_components/ng-electron/ng-bridge');

function createMainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true
    });

    win.loadUrl(`file://${__dirname}/index.html`);
    win.on('closed', onClosed);

    return win;
}

function onClosed() {
    mainWindow = null;
}
// prevent window being GC'd
let mainWindow;

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate-with-no-open-windows', function () {
    if (!mainWindow) {
        mainWindow = createMainWindow();
    }
});

app.on('will-quit', function () {

});

app.on('ready', function () {
    mainWindow = createMainWindow();
    
    mainWindow.webContents.on('dom-ready', function (e) {
        //try and manually bootstrap AngularJS
        var code = "angular.bootstrap(document, ['app']);";
        mainWindow.webContents.executeJavaScript(code);
    });
    mainWindow.openDevTools();
    mainWindow.webContents.on('did-finish-load', function (e) {
        var menu = new Menu();
        var tpl = [
            {
                label: 'AccessionPad',
                submenu: [
                    {
                        label: 'About Amy',
                        click: function () {
                            console.log('Version 1.Amy.Awesome!');
                        }
                    },
                    {
                        label: 'Quit',
                        click: function () {
                            app.quit();
                        },
                        accelerator: 'Command+Q'
                    }
                ]
            },
            {
                label: 'Actions',
                submenu: [
                    {
                        label: 'Host to Client',
                        click: function (msg) {
                            var msg = 'Host: Hiya Amy App Stack!';
                            angular.send(msg);
                        }
                    }
                ]
            }
        ];
        menu = Menu.buildFromTemplate(tpl);
        Menu.setApplicationMenu(menu);

        //Start listening for client messages
        angular.listen(function (msg) {
            console.log('Client: ' + msg);
        });

    });
});
