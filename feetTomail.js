// feetToMile
const feetToMile = (feet) => {
    const mot = feet / 5280;
    return mot;
}
const result = feetToMile(5280);
console.log(result)