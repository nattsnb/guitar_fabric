class Neck {

}

class Strings {

}

class Body {

}

class Guitar {
    constructor(neck,strings,body){
        this.neck = neck;
        this.strings = strings;
        this.body = body;
        this.isTuned = false;
        this.isFaulty = Math.random() < 0.7;
    }

    tune() {
        this.isTuned = true;
    }

    isPlayable() {
        if (
            this.neck instanceof Neck &&
            this.strings instanceof Strings &&
            this.body instanceof Body &&
            this.isTuned === true &&
            this.isFaulty === false
        ) {
            console.log("guitar is playing just fine!")
            return true;
        } else {
            console.log("The guitar is not playable!")
            return false;
        }
    }
}

class Supplier {
    constructor() {
        this.lastDeliveryDateTime = 0;
        this.frequencyInSeconds = 2;
    }

    delivery() {
        setTimeout( function (){
            let arrayLength = getRandomIntInclusive(3,6);
            const suppliesArray = []
            suppliesArray.length = arrayLength
            let iteration = 0;
            while(iteration < arrayLength) {
                const availableSupplies = ["neck", "strings"]
                const randomElement = availableSupplies[Math.floor(Math.random() * availableSupplies.length)];
                const supply = suppliesArray.splice(iteration, 1, randomElement);
                iteration++;
            }
            console.log(suppliesArray);
            this.lastDeliveryDateTime = new Date();
            console.log(this.lastDeliveryDateTime)
        },this.frequencyInSeconds*1000);
    }
}

const neck = new Neck();

const strings = new Strings();

const body = new Body();

const guitar = new Guitar(
    neck, strings, body
)

const supplier = new(Supplier);

console.log(guitar);
guitar.tune();
console.log(guitar);
console.log(guitar.isPlayable());
console.log(supplier);
supplier.delivery();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
