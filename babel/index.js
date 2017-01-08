// Just to have the dev server reload on save
require('../index.html');
require('../css/style.css');

var moment = require('moment');

class Clock {
    constructor() {
        this.now = moment();
    }

    getDegrees(value, format) {
        var degrees = value * (360/format)- 90;
        return degrees;
    }

    setDegree(elm, value) {
        elm.style.transform = "rotate("+value+"deg)";
    }

    setHour () {
        var hourNow = this.now.hour();
        var hourNow = hourNow > 12 ? (hourNow - 12) : hourNow;
        this.setDegree(hour, this.getDegrees(hourNow, 12));
    }
    setMinute () {
        var minNow = this.now.minute();
        this.setDegree(minute, this.getDegrees(minNow, 60));
    }
    setSecond () {
        var secNow = this.now.second();
        this.setDegree(second, this.getDegrees(secNow, 60));
    }
    setTime() {
        this.setHour();
        this.setMinute();
        this.setSecond();
        setTimeout(this.setTime, 1000);
    }
};

var clock = new Clock;
clock.setTime();