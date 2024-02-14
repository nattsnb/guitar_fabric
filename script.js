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
            console.log("guitar is playing just fine!");
            return true;
        } else {
            console.log("The guitar is not playable!");
            return false;
        }
    }
}

class Supplier {
    constructor(frequencyInSeconds,supply) {
        this.lastDeliveryDateTime = new Date().getTime();
        this.frequencyInSeconds = frequencyInSeconds;
        this.supply = supply;

    }

    delivery() {
        const newDeliveryDateTime = new Date().getTime();
        const deliveryTimeDifference = newDeliveryDateTime - this.lastDeliveryDateTime;
        if (deliveryTimeDifference > (this.frequencyInSeconds*1000)){
            const arrayLength = getRandomIntInclusive(3,6);
            let suppliesArray = [];
            suppliesArray.length = arrayLength;
            suppliesArray.fill(this.supply);
            this.lastDeliveryDateTime = newDeliveryDateTime;
            return suppliesArray;
        }
        return null
    }
}

class stringsSupplier extends Supplier {
}

class neckSupplier extends Supplier {

}
class Storage {

}

class Factory {
    constructor() {
        this.neckSupplier = new neckSupplier(3, "neck");
        this.stringsSupplier = new stringsSupplier(4, "strings");
        this.storage = new Storage;
        this.neckArray = [];
        this.stringsArray = [];
    }

    produceBody(){
        return new Body;
    }

    runProductionLine () {
        setInterval(() => {
            if (this.neckArray.length === 0) {
                this.neckArray.push.apply(this.neckArray, this.neckSupplier.delivery());
                console.log("neck delivery");
                console.log(this.neckArray.length);
            }
            if (this.stringsArray.length === 0) {
                this.stringsArray.push.apply(this.stringsArray, this.stringsSupplier.delivery());
                console.log("strings delivery");
                console.log(this.stringsArray.length);
            } else {
                const neck = new Neck;
                this.neckArray.splice(0,1);
                const strings = new Strings;
                this.stringsArray.splice(0,1);
                const body = new Body;
                const newGuitar = new Guitar(neck,strings,body)
                console.log("guitar produced")
            }


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

factory = new Factory()
factory.runProductionLine()


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
