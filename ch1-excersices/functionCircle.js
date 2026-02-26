
const PI = Math.PI;

const calculateCircleArea = (radius) => {
    if (typeof radius !== `number` || radius < 0) {
        return `Σφάλμα: η ακτίνα πρέπει να είναι ένας θετικός αριθμός!`
    } 

    return PI * (radius ** 2);
};

let radiusValue = 5;

const area = calculateCircleArea(radiusValue);

console.log(`The area with radius ${radiusValue} is ${area.toFixed(2)}`)