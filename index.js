
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(multiplier) {
//     return function(fare) {
//         fare * multiplier
//     }
// }
// The reason the above function was not doing anything is because the inner funfction wasn't returning anything!
// Lesson learned to use arrow function, because of implicit return !!!!!! 

function createFareMultiplier(multiplier) {
    return fare => fare * multiplier;
}

const fareQuadrupler = createFareMultiplier(4);
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstLast) {
    if (firstLast === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    } else if (firstLast === returnLastTwoDrivers) {
        return drivers.slice(2,4);
    }
}