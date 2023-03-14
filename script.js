const randomNumberGenerator = num =>{
    return Math.floor(Math.random() * num);
};

const ffMessages = {
    name: ['Cloud', 'Squall', 'Zidane', 'Tidus', 'Lightning', 'Noctis'],
    attack: ['Omnislash', 'Lionheart', 'Blitz Ace', 'Army of One', 'Armiger'],
    quote: ['Let\'s mosey', '...', 'This is my story', 'Worst birthday ever', 'I wanna be a blitzball!', 'Sharp errday']
};

let mergeMessages = [];

for (let prop in ffMessages) {
    let index = randomNumberGenerator(ffMessages[prop].length);
    switch (prop) {
        case 'name':
            mergeMessages.push(`${ffMessages[prop][index]} gets ready for battle.`);
            break;
        case 'attack':
            mergeMessages.push(`Uses ${ffMessages[prop][index]}!`);
            break;
        case 'quote':
            mergeMessages.push(`"${ffMessages[prop][index]}"`);
            break;
        default:
            mergeMessages.push(`Not enough info`);
    }
};

const displayMessages = message => {
    const joined = mergeMessages.join('\n');
    console.log(joined);
}

displayMessages(mergeMessages);