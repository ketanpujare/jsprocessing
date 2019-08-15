class Train {
    constructor(_color, no_rakes, tsignals) {
        this._color = _color;
        this.no_rakes = no_rakes;
        this.x = 0;
        this.y = 20;
        this.trainsignals = tsignals
    }

    createTrain() {
        let rakes = [];
        for (let i = 0; i < this.no_rakes; i++) {
            rakes[i] = createVector()
        }
    }

    trainUpdate() {
        let xspeed = 1;
        if (floor(dist(this.x, this.y, this.trainsignals[0].x, this.trainsignals[0].y)) < 12) {
            if (this.trainsignals[0].checkSignalStatus()) {
                this.x = this.x + xspeed;
                this.trainsignals.shift(this.trainsignals)
            } else {
                this.x = this.x
            }
        } else {
            this.x = this.x + xspeed;
        }
        this.x = constrain(this.x, 0, width - 100)
    }
    trainShow() {
        noStroke();
        fill(this._color);
        rect(this.x, this.y, 8, 3, 0, 20, 20, 0);
    }
}

class TrainStrcture {
    constructor() {
        this.x1 = 0;
        this.y1 = 21;
        this.x2 = width
        this.y2 = this.y1
    }

    trainStrShow() {
        fill(0);
        noStroke();
        // strokeWeight(10);
        rect(this.x1, this.y1, width, 1);
    }
}

class Signal {
    constructor(x, y, status) {
        this.r = 5;
        this.x = x;
        this.y = y;
        this.status = status
    }

    signalShow() {
        if (this.status == false) {
            fill('#c91b0e');
        } else {
            fill('#0F0')
        }
        circle(this.x, this.y, this.r);
    }

    checkSignalStatus() {
        if (this.status == true) {
            return true;
        }
        return false;
    }
}