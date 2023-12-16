const DoOverlap = (Line1, Line2) => {

    if (Line1[0] >= Line2[1] || Line2[0] >= Line1[1])
        return false;

    // if above condition is false, lines overlap
    return true;
}

const Line1 = [1,5];
const Line2 = [2,6];
const Line3 = [6,8];

console.log(DoOverlap(Line1,Line2));
console.log(DoOverlap(Line1,Line3));



