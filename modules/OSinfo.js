var os = require('os');
var formatTime = require('./secToHour');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Window_NT') {
        type = 'Windows';
    }
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu)
    console.log('Uptime:', formatTime.print());
}

exports.print = getOSinfo;