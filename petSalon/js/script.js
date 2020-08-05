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

const scrappy=new Pet(" Scrappy ", 5, " Dane ", " Dog ", " Male ", " Nails Cut ", " Shaggy ", " 666-666-6666 ");

const lady=new Pet(" Lady ", 10, " Corgi ", " Dog ", " Female ", " Hair Cut ", " Fred ", " 777-777-7777 ");

const tramp=new Pet(" Tramp ", 15, " Mutt ", " Dog ", " Male ", " Shots ", " Velma ", " 888-888-8888 ");

const cali=new Pet(" Cali ", 4, " Calico ", " Cat ", " Female ", " De-clawing ", " Jim Carrey ", " 999-999-9999 ");


//add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(lady);
salon.pets.push(tramp);
salon.pets.push(cali);

// Number of pets

console.log(salon.pets.length); 

//for loop

// A loop to pull just pet names
function petNames(){

let namePet="";
for(var i=0; i<salon.pets.length; i++){
    namePet += salon.pets[i].petName;
}
    return namePet;
}
let namePet = petNames();
console.log(namePet);

// A loop to pull just owner names

function ownerNames(){

    let nameOwner="";
    for(var i=0; i<salon.pets.length; i++){
        nameOwner += salon.pets[i].ownerName;
    }
        return nameOwner;
    }
    let nameOwner = ownerNames();
    console.log(nameOwner);

// A loop to pull the age of the pet

// function petAge(){

//     let agePet=0;
//     for(var i=0; i<salon.pets.length; i++){
//         agePet += salon.pets[i].age;
//     }
//         return agePet;
//     }
//     let agePet = petAge();
//     console.log(agePet);

// A loop to pull the pets breed

function petBreed(){

    let breedPet="";
    for(var i=0; i<salon.pets.length; i++){
        breedPet += salon.pets[i].breed;
    }
        return breedPet;
    }
    let breedPet = petBreed();
    console.log(breedPet);

// A loop to pull what type of animal it is

function petType(){

    let typePet="";
    for(var i=0; i<salon.pets.length; i++){
        typePet += salon.pets[i].type;
    }
        return typePet;
    }
    let typePet = petType();
    console.log(typePet);

// A loop to pull what service the animal is getting

function petService(){

    let servicePet="";
    for(var i=0; i<salon.pets.length; i++){
        servicePet += salon.pets[i].service;
    }
        return servicePet;
    }
    let servicePet = petService();
    console.log(servicePet);

// A loop to pull owners contact number

function contactPhone(){

    let phoneContact="";
    for(var i=0; i<salon.pets.length; i++){
        phoneContact += salon.pets[i].contactPhone;
    }
        return phoneContact;
    }
    let phoneContact = contactPhone();
    console.log(phoneContact);