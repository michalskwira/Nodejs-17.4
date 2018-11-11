var os = require('os');
var uptime = os.uptime();

function secToHour() {
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    var seconds = uptime - (hours * 3600) - (minutes * 60);
    var minutesTime = minutes + ' min ' + seconds.toFixed(0) + ' sec ';
    var hoursTime = hours + ' h ' + minutesTime;
    if (uptime < 3600) {
        return minutesTime;
    } else {
        return hoursTime;
    }
}

exports.print = secToHour;