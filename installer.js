var createInstaller = require('electron-installer-squirrel-windows');

createInstaller({
  name : 'TestApp',
  path: './dist/TestApp-win32-x64',
  out: './dist/installer',
  authors: 'creamyCode',
  exe: 'TestApp.exe',
  appDirectory: './dist/TestApp-win32-x64',
  overwrite: true
}, function done (e) {
  console.log('Build success !!');
});
