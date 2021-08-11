'use strict';


Donation.allDonations = [];
let finalDonation=[];


//create a constructor function
function Donation(name, amount, age) {
    this.name = name;
    this.amount = amount;
    this.age = age;

    Donation.allDonations.push(this);

}

// create random function of age
function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let form = document.getElementById('form');

form = document.addEventListener('submit', submitter);

// create function of click on the submit button
function submitter(event) {
    event.preventDefault();
    // location.reload():


    let name = event.target.name.value;
    let amount = event.target.amount.value;
    let age = randomAge(18, 100);

    let newDonation = new Donation(name, amount, age);
    setToLocalStorage();
    table.textContent='';
    header();
    tableBody();

}

let table = document.getElementById("table");


//create function for header of table
function header() {
    let tableRow1 = document.createElement('tr');
    table.appendChild(tableRow1);

    let tableHead1 = document.createElement('th');
    let tableHead2 = document.createElement('th');
    let tableHead3 = document.createElement('th');

    tableRow1.appendChild(tableHead1);
    tableRow1.appendChild(tableHead2);
    tableRow1.appendChild(tableHead3);

    tableHead1.textContent = 'Donator Name';
    tableHead2.textContent = 'Donation Amount';
    tableHead3.textContent = 'Age';



}

console.log(Donation.allDonations);

//create function for header of table
function tableBody() {
    for (let i = 0; i < Donation.allDonations.length; i++) {

        let tableRow2 = document.createElement('tr');
        table.appendChild(tableRow2);

        let tableData1 = document.createElement('th');
        let tableData2 = document.createElement('th');
        let tableData3 = document.createElement('th');

        tableRow2.appendChild(tableData1);
        tableRow2.appendChild(tableData2);
        tableRow2.appendChild(tableData3);

        tableData1.textContent = Donation.allDonations[i].name;
        tableData2.textContent = Donation.allDonations[i].amount;
        tableData3.textContent = Donation.allDonations[i].age;


        console.log(Donation.allDonations);

    }

}

console.log(Donation.allDonations);

function setToLocalStorage() {
    localStorage.setItem('donations', JSON.stringify(Donation.allDonations));


}

function getFromLocalStorage() {
    let parseData = JSON.parse(localStorage.getItem('donations'));

    if (parseData !== null) {
       for (let j = 0; j < parseData.length; j++) {
           let newDonation2=(parseData[j].name, parseData[j].amount, parseData[j].age)
           finalDonation.push(newDonation2);
           
       }

    }


}

getFromLocalStorage();
header();
tableBody();





