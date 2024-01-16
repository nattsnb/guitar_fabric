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
            console.log("Guitar is playing just fine!")
            return true;
        } else {
            console.log("The guitar is not playable!")
            return false;
        }
    }
}

class Supplier {
    constructor(frequency) {
        this.lastDeliveryDateTime = 0;
        this.frequencyInSeconds = frequency;
    }

    delivery() {
        let randomNumber = getRandomIntInclusive(3,6);
        const randomArray = new Array(randomNumber)
        console.log(randomArray)
    }
    setTimeout(delivery, frequencyInSeconds*1000);
}

const neck = new Neck();

const guitar = new Guitar(
    neck, new Strings(), new Body()
)

console.log(guitar);
guitar.tune()
console.log(guitar.isPlayable());

const someDate = new Date("2024-01-01");
console.log(someDate.toISOString());
console.log(someDate.getTime());

// random number (from 3 to 6)

let iteration = 0;
while(iteration < 20) {
    let randomNumber = getRandomIntInclusive(3,6);
    const randomArry = new Array(randomNumber)
    console.log(randomArry)

    iteration++;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
