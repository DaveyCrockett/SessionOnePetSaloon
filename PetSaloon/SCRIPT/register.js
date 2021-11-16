console.log("Register Page!");

let saloon = {
    name: "The Pet Store",
    address: {

        street: "Pet Drive",
        number: "55555",
        zip: "12345",
        state: "CA",
        city: "Los Angeles"
    },
    hours: {
        open: "9:00 am",
        close: "10:00 pm"
    },
    pets:[
        {
            name: "Scooby",
            age: 60,
            gender: "Male",
            breed: "Dane",
            service: "Grooming",
            owner: "Shaggy",
            phone: "222-222-2222"
        },
        {
            name: "Scrappy",
            age: 50,
            gender: "Male",
            breed: "Mixed",
            service: "Grooming",
            owner: "Shaggy",
            phone: "333-333-3333"
        },
        {
            name: "Tatsu",
            age: 8,
            gender: "Male",
            breed: "Siberian Husky",
            service: "Training",
            owner: "David",
            phone: "444-444-4444"
        },
        {
            name: "Yoshi",
            age: 2,
            gender: "Male",
            breed: "Husky",
            service: "Training",
            owner: "David",
            phone: "444-444-4444"
        },
    ]
}

console.log(saloon.address.city);
console.log(saloon.pets);

alert(`Number of pets: ${saloon.pets.length}`)

function simpleDisplay(){
    for(i=0; i<saloon.pets.length;i++){
        console.log(saloon.pets[i].name);
    }
}

simpleDisplay();
