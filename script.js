const randomStart = ['Hello ', 'you have a ', 'Hey, you have a ', 'Hi, you have a '];
const randomMiddle = ['cool ', 'fashionable ', 'stylish '];
const randomEnd = ['coat.', 'dress.', 'shirt.', 'skirt.', 'suit.', 'swimsuit.' ];

const messages = [randomStart, randomMiddle, randomEnd];

function randomMessageGenerator(arr) {
   let randomMessage = [];
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        randomMessage.push(x[Math.floor(Math.random() * x.length)]);
    } 
}
randomMessageGenerator(messages);


