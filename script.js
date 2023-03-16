const randomNumberGenerator = num =>{
    return Math.floor(Math.random() * num);
};

const ffMessages = {
    name: ['Cloud', 'Squall', 'Zidane', 'Tidus', 'Lightning', 'Noctis'],
    attack: ['Omnislash', 'Lionheart', 'Blitz Ace', 'Army of One', 'Armiger'],
    quote: ['Let\'s mosey', '...', 'This is my story', 'Worst birthday ever', 'I wanna be a blitzball!', 'Sharp errday']
};

let charName = " ";

const generateMessage = () => {
  let mergeMessages = [];
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
          default:
              mergeMessages.push(`Not enough info`);
      }
  }
  const joined = mergeMessages.join('<br>');
  document.getElementById("message-output").innerHTML = joined;
};

document.getElementById("generate-button").addEventListener("click", generateMessage);
