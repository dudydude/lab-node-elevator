class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = []; // a list of pending requests. Floors where the elevator must stop.
    this.passengers = []; // people currently in the elevator
    this.waitingList = []; // people waiting for the elevator
    // this.destinationFloor = 0;
  }

  // UP & DOWN

  floorUp() {
    if (this.floor === this.MAXFLOOR) {
      console.log("Attention la tête");
    } else {
      this.floor++;
    }
  }

  floorDown() {
    if (this.floor === 0) {
      console.log("Do you want ants? cause this is how you get ants");
    } else {
      this.floor--;
    }
  }

  // START STOP

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  // Update the position
  update() {
    this.log();
    this._passengersEnter();
    this._passengersLeave();

    // tried to set an if statement when as soon as the elevator is empty,
    //it goes back to the bottom (floor 0) to take new people,
    // sadly nobody want to come :( so it is stuck in some kind of infinite loop (will try to fix it)

    if (this.passengers.length === 0) {
      this.floorDown();
    } else {
      this.floorUp();
    }
  }

  // Passengers in / out / call

  _passengersEnter() {
    // console.log("DEBUG this.waitingList", this.waitingList);
    for (let i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor === this.floor) {
        this.passengers.push(this.waitingList[i]);
        this.requests.push(this.waitingList[i].destinationFloor);
        console.log(`${this.waitingList[i].name} has entered the elevator`);
        this.waitingList.splice(i, 1);
      }
    }
  }

  _passengersLeave() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor == this.floor) {
        console.log(`${this.passengers[i].name} has left the elevator`);
        this.passengers.splice(i, 1);
      }
    }
  }

  call(x) {
    //this.requests.push(x);
    this.waitingList.push(x);
    this.requests.push(x.originFloor);
  }

  log() {
    var direction = "";
    if (this.destinationFloor < this.floor) {
      direction = "down";
    } else {
      direction = "up";
    }
    console.log(
      `Direction : ${direction} | Floor : ${this.floor} | Passengers: ${
        this.passengers.length
      }`
    );
  }
}

module.exports = Elevator;
