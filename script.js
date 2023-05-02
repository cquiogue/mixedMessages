const randomNumberGenerator = num => {
  return Math.floor(Math.random() * num);
};

const ffMessages = {
  name: [
    'Cloud',
    'Squall',
    'Zidane',
    'Tidus',
    'Lightning',
    'Noctis',
    'Vaan',
    'Terra',
  ],
  attack: [
    'Omnislash',
    'Lionheart',
    'Blitz Ace',
    'Army of One',
    'Armiger',
    'Quickening',
    'Trance',
    'Firaga',
    'Blizzaga',
    'Thundaga',
    'Ultima',
  ],
  quote: [
    "Let's mosey.",
    '... Whatever.',
    'This is my story.',
    'Worst. Birthday. Ever.',
    'I wanna be a blitzball!',
    'Sharp errday.',
    "What, are you kidding? I don't wanna stick around this place.",
    'But... I want to know what love is... now!',
  ],
  imagePath: [
    'images/cloud.png',
    'images/squall.png',
    'images/zidane.png',
    'images/tidus.png',
    'images/lightning.png',
    'images/noctis.png',
    'images/vaan.png',
    'images/terra.png',
  ],
};

const container = document.querySelector('.container');
const messageDiv = document.querySelector('#message');
const generateBtn = document.querySelector('#generate-btn');
const charImage = document.querySelector('#char-image');
const charQuote = document.querySelector('#char-quote');

generateBtn.addEventListener('click', () => {
  let mergeMessages = [];
  let charName = ' ';
  let quote = ' ';
  charImage.style.opacity = 0;
  charQuote.style.opacity = 0;
  messageDiv.style.opacity = 0;
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
        quote = ffMessages[prop][index];
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
  charQuote.innerHTML = quote;
  messageDiv.style.opacity = 1;
  charImage.style.opacity = 1;
  charQuote.style.opacity = 1;
});
