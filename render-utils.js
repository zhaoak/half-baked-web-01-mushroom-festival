const mushroomTypes = ['porcini', 'chanterelle', 'morel'];

export function renderMushroom() {
    const div = document.createElement('div');
    const shroomType = Math.floor(Math.random() * mushroomTypes.length);
    div.classList.add(mushroomTypes[shroomType]);

    return div;
}

export function renderFriend(friend) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('friend');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = friend.name;

    if (friend.satisfaction === 1) {
        emojiEl.textContent = '😒';
    }

    if (friend.satisfaction === 2) {
        emojiEl.textContent = '😐';
    }

    if (friend.satisfaction === 3) {
        emojiEl.textContent = '😀';
    }

    div.append(nameEl, emojiEl);
    return div;
}
