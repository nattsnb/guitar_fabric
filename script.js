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
    constructor(frequencyInSeconds) {
        this.lastDeliveryDateTime = new Date().getTime();
        this.frequencyInSeconds = frequencyInSeconds;
    }

    delivery() {
        setInterval( function (){
            let arrayLength = getRandomIntInclusive(3,6);
            const suppliesArray = []
            suppliesArray.length = arrayLength
            console.log(suppliesArray);
            let newDelivery = new Date().getTime();
            let lastDeliveryDifference = newDelivery - supplier.lastDeliveryDateTime;
            this.lastDeliveryDateTime = newDelivery;
            console.log("difference: " + lastDeliveryDifference);
        },this.frequencyInSeconds*1000);
    }
}
class Storage {

}

class Factory {
    constructor() {
        this.neckSupplier = new Supplier(3);
        this.stringsSupplier = new Supplier(4);
        this.storage = new Storage;
    }

    produceBody(){
        return new Body
    }

    runProductionLine () {
        setInterval({

        }, 2000);
    }
}

// const neck = new Neck();
//
// const strings = new Strings();
//
// const body = new Body();
//
// const guitar = new Guitar(
//     neck, strings, body
// )
//
// const supplier = new Supplier(2);
//
// console.log(guitar);
// guitar.tune();
// console.log(guitar);
// console.log(guitar.isPlayable());
// console.log(supplier);
// supplier.delivery();
// supplier.delivery();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
