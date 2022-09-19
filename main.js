"use strict"

//Here, we changed the tags to refer to the html file. Before, they referred to the table, now they refer to the h2
// and p tags.
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//We did not touch this code
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var selectedCoffee = input.value.toLowerCase();
    var filteredCoffees = [];
    console.log(selectedCoffee === 'French');
//This function looks at everything that is typed in and loops through the array to compare it
    coffees.forEach(function(coffee) {
//We made it case-insensitive
        var coff = coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase());
//Whenever out selected roast is all, we are only going to filter by coffee name.
        if (selectedRoast === 'all'){
            if (coff) {
                filteredCoffees.push(coffee);
            }
//Below, we are using this part to filter by coffee roast AND name
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

//Here, we sorted the IDs in reverse order
coffees.reverse();


var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);


//This is the eventListener that changes the names on the coffee based on each key that is typed in.
const input = document.querySelector('#inp');
input.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)


