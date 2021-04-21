let origDogs = ["Bulldog", "Bagle", "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array copy elements
let slicedogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//stack ffunctions (LIFO) push and pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//add and remove from first
let addfirst = dogs.unshift("golden Retriever");
let shiftDog = dogs.shift();

dogs.splice(2,1, "pug", "Boxer");

//array function - Concat , spread, slice, sort
let animals = dogs.concat(cats.birds);
let newAnimal = [...dogs,...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) 
{
    console.log("scan: " + first + " " + second);

}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = " ";
for (let animal of animals) allAnimals += animal + " ";

console.log("Animals : " + allAnimals);