// Write an Airplane object that initializes name.

// Give airplanes the ability to .takeOff() and .land():

// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

"use strict";

const Airplane = {
    name (planeName) {
        this.name = planeName;
    },
    isFlying: undefined,
    takeOff() {
        return this.isFlying = true;
    },
    land(){
        return this.isFlying = false;
    },
}

Airplane.name (`Kukuruznik`);
console.log(Airplane.name);
Airplane.takeOff();
console.log(Airplane.isFlying);
Airplane.land();
console.log(Airplane.isFlying);