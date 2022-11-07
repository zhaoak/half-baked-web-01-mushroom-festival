// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const randomNamePool = [
    'Leah',
    'Dean Dingus',
    'Jerma',
    'Hank',
    'Treat',
    'Nicholas Cage',
    'Oliver',
    'Michael Buble',
];

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    let newFriendName = friendInputEl.value;

    // if no name entered, assign random name
    if (newFriendName === '') {
        newFriendName = randomNamePool[Math.floor(Math.random() * randomNamePool.length)];
    }
    // create a new friend object
    // push it into the friends state array, passed in as an argument
    friendData.push({ name: newFriendName, satisfaction: 1 }); // they're a doubter in the power of shroom
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';

    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        let friendEl = renderFriend(friend);

        // this is a clickable list, so . . .
        // add an event listener to each friend
        friendEl.addEventListener('click', () => {
            // check if you have shrooms, then if friend satisfaction is full
            if (mushroomCount < 1) {
                alert('You have no mushrooms, go forage for some!');
            } else if (friend.satisfaction > 2) {
                alert(`${friend.name} doesn't want any more mushrooms.`);
            }
            // then, having verified satisfaction level is below 3 and you have mushrooms left
            else {
                // increment the friends satisfaction and decrement your mushrooms
                friend.satisfaction++;
                mushroomCount--;
                // then display your friends and mushrooms with the updated state
                displayMushrooms();
                displayFriends();
            }
        });

        // append the friendEl to the friends list in DOM
        friendsEl.appendChild(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        mushroomsEl.appendChild(renderMushroom());
    }
}

displayFriends();
displayMushrooms();
