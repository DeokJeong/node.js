const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

const daysOfWeek = [ mon , tue , wed , thu , fri , sat ];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];

console.log(daysOfWeek[5], nonsense[2]);

daysOfWeek.push("sun"); //

console.log(daysOfWeek);

const playerName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const player = ["nico", 1212, false, "little bit"]; 

const playerS = {
    name : "nico",
    points : 121212,
    Handsome : false,
    fat : true,
};

console.log(playerS);
console.log(playerS.name);
console.log(playerS.fat);

playerS.fat = false;

console.log(playerS.fat)

playerS.lastName = "potato";
console.log(playerS);