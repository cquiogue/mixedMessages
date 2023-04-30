const randomNumberGenerator = num => {
  return Math.floor(Math.random() * num);
};

const ffMessages = {
  name: ['Cloud', 'Squall', 'Zidane', 'Tidus', 'Lightning', 'Noctis'],
  attack: ['Omnislash', 'Lionheart', 'Blitz Ace', 'Army of One', 'Armiger'],
  quote: [
    "Let's mosey",
    '...',
    'This is my story',
    'Worst birthday ever',
    'I wanna be a blitzball!',
    'Sharp errday',
  ],
  imagePath: [
    'images/cloud.png',
    'images/squall.png',
    'images/zidane.png',
    'images/tidus.png',
    'images/lightning.png',
    'images/noctis.png',
  ],
};

const container = document.querySelector('.container');
const messageDiv = document.querySelector('#message');
const generateBtn = document.querySelector('#generate-btn');
const charImage = document.querySelector('#char-image');

generateBtn.addEventListener('click', () => {
  let mergeMessages = [];
  let charName = ' ';
  charImage.style.opacity = 0;
  for (let prop in ffMessages) {
    let index = randomNumberGenerator(ffMessages[prop].length);
    switch (prop) {
      case 'name':
        mergeMessages.push(`${ffMessages[prop][index]} gets ready for battle.`);
        charName = ffMessages[prop][index];
        break;
      case 'attack':
        mergeMessages.push(`${charName} uses ${ffMessages[prop][index]}!`);
        break;
      case 'quote':
        mergeMessages.push(`${charName} says, "${ffMessages[prop][index]}"`);
        break;
      case 'imagePath':
        charImage.src =
          ffMessages['imagePath'][ffMessages['name'].indexOf(charName)];
        break;
      default:
        mergeMessages.push(`Not enough info`);
    }
  }
  const joined = mergeMessages.join('<br><br>');
  messageDiv.innerHTML = joined;
  charImage.style.opacity = 1;
});
