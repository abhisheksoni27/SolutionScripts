const fs = require('fs');
const coordinates = JSON.parse(fs.readFileSync('coordinates.json').toString()).coordinates;

const groups = [];
const alreadyAccountedFor = [];

let k = 0;
let notK = 0;

for (let i = 0; i < coordinates.length; i++) {
    if (alreadyAccountedFor.indexOf(i) > -1) continue;
    let x1 = coordinates[i].x;
    let y1 = coordinates[i].y;

    const group = new Set();
    group.add(coordinates[i]);
    alreadyAccountedFor.push(i);

    for (let j = i + 1; j < coordinates.length; j++) {
        if (alreadyAccountedFor.indexOf(j) > -1) continue;
        let x2 = coordinates[j].x;
        let y2 = coordinates[j].y;

        const slope = Math.abs((y2 - y1) / (x2 - x1));

        if (slope <= 0.2) {
            alreadyAccountedFor.push(j);
            group.add(coordinates[j]);
        }
    }

    if (group.size > 1) {
        groups.push([...group]);
    }
}

console.log(groups, groups.length);