const gamma = 0.5;
const sigma = 0.05;

const fs = require('fs');
const Point = (x, y) => {
    return { x, y };
}

function createCoordinatesAroundPoint(point) {
    const Points = [];

    const x = point.x;
    const y = point.y;


    for (let i = 1; i < (Math.random() * 10) + sigma; i++) {
        const newPoint = Point(x + i * (Math.random() * gamma), y + i * (Math.random() * sigma));
        Points.push(newPoint);
    }

    return Points;

}

function createCoordinates() {
    const coordinates = [];
    for (let i = 0; i < 5; i++) {
        const m = Math.floor(Math.log(Math.random() * 10));
        const n = Math.floor(Math.log(Math.random() * 2));
        const fPoint = Point(m, n);
        const fPointSigma = createCoordinatesAroundPoint(fPoint);
        coordinates.push(fPoint)
        coordinates.push(...fPointSigma)
    }
    return coordinates;
}


const coordinates = createCoordinates();
const data = JSON.stringify({coordinates});

fs.writeFileSync("coordinates.json", data)