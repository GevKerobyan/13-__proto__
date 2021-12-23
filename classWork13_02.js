// Write an Airplane object that initializes name.

// Give airplanes the ability to .takeOff() and .land():

// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

const Airplane = {
    name: "",
    takeOff() {
        if (this.takeOff) return true;
    },
    land(){
        if (this.land) return true;
    },
}

let Boeing747 = {
    __proto__: Airplane,
    isFlying () {
        if (takeOff){
            return true;
        }
        if (land) {
            return false;
        }
    },
}

console.log(Boeing747.isFlying(takeOff));



