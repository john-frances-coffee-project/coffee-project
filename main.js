"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedCoffee = input.value.toLowerCase();
    var filteredCoffees = [];
    console.log(selectedCoffee === 'French');
    coffees.forEach(function(coffee) {
//The include function includes everything you type in and compares to the array??????
        var coff = coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase());
//Are we going to filter by roast? No.
        console.log(coffee.roast);
//Whenever out selected roast is all, we are only going to filter by coffee name.
        if (selectedRoast === 'all'){
            if (coff) {
                filteredCoffees.push(coffee);
            }
// Filters by COFFEE ROAST AND NAME
        } else {
            if (coffee.roast === selectedRoast && coff) {
                filteredCoffees.push(coffee);
            }
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

coffees.reverse();



// function addCoffee(e) {
//     e.preventDefault();
//     let newCoffee = {
//         id : coffees.length + 1,
//         name : coffeeName.value,
//         roast : roastAdd.value
//     }
//     coffees.push(newCoffee)
// }
//
// let coffeeName = document.querySelector('#userInput');
// let roastAdd = document.querySelector('#roast-selection2');
// let submitButton2 = document.querySelector('#submit2');
// submitButton2.addEventListener('click', addCoffee);


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);


const input = document.querySelector('#inp');
input.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)


