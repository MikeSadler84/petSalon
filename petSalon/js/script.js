//obj literal for the salon
const salon={
    name:"The Fashion Pet",
    phone:"777-777-7777",
    address:{
        city:"Springfield",
        street:"South Lane",
        number:"202"
    },
    pets:[]
}

let {name, phone, address:{city,street,number}}= salon;
console.log(city);

document.getElementById("info").innerHTML=`
    <p class="footer-info"> ${name}<br> ${phone}<br> ${number} ${street}, ${city}`; //template string

//obj constructor for the pets

class Pet{
    constructor(petName, age, breed, type, gender, service, ownerName, contactPhone){
        this.petName=petName;
        this.age=age;
        this.breed=breed;
        this.type=type;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
    }
}





const scooby=new Pet(" Scooby ", 50, " Dane ", " Dog ", " Male ", " Full Service ", " Shaggy ", " 555-555-5555 ");

const scrappy=new Pet(" Scrappy ", 5, " Dane ", " Dog ", " Male ", " Nails Cut ", " Shaggy ", " 555-555-5555 ");

const lady=new Pet(" Lady ", 10, " Corgi ", " Dog ", " Female ", " Hair Cut ", " Fred ", " 555-555-5555 ");

const tramp=new Pet(" Tramp ", 15, " Mutt ", " Dog ", " Male ", " Shots ", " Velma ", " 555-555-5555 ");

const cali=new Pet(" Cali ", 4, " Calico ", " Cat ", " Female ", " De-clawing ", " Jim Carrey ", " 555-555-5555 ");


//add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(lady);
salon.pets.push(tramp);
salon.pets.push(cali);

// Number of pets

console.log(salon.pets.length); 

//for loop

function petNames(){

let namePet="";
for(var i=0; i<salon.pets.length; i++){
    namePet += salon.pets[i].petName;
}
    return namePet;
}
let namePet = petNames();
console.log(namePet);

//for of loop

// for(let names of salon.pets){
//     console.log(names);
// }

// For each loop

// salon.pets.forEach(function(pets, index, array){
//     console.log(array);
// });
