const dogs = [
    // {name: 'Sammy'},
    // {name: 'Roscoe'},
    // {name: 'Pookie'},
    // {name: 'Bailey'},
    // {name: 'Butch'},
    // {name: 'Sunshine'},
]

main();

async function main() {
    await loadDogs();
    displayDogs();
}

function displayDogs() {
    for (let dog of dogs) {
        addDogToDisplay(dog);
    }
}

function addDogToDisplay(dog) {
    const dogItem = document.createElement('a');
    dogItem.href = '#';
    dogItem.innerText = dog.name;
    dogItem.className = 'list-group-item';

    const dogsListUI = document.getElementById('dog-list');
    dogsListUI.appendChild(dogItem);
}


async function loadDogs() {
    const response = await fetch('/api/dogs');
    const retrievedData = await response.json();
    const retrievedDogs = retrievedData.dogs;
    for (let dog of retrievedDogs) {
        dogs.push(dog);
    }
}
