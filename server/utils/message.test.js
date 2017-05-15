const expect = require("expect");

const {
  generateMessage, 
  generateLocationMessage
} = require("./message");

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var messageObject = generateMessage('jim', 'I am awesome');
    
    expect(messageObject.from).toBe('jim');
    expect(messageObject.text).toBe('I am awesome');
    expect(messageObject.createdAt).toBeA('number');
  });
})

describe('generateLocationMessage', () => {
  it('should generate the correct location  object', () => {
    var lat = 40;
    var lng = 40;
    var messageObject = generateLocationMessage('jim', lat, lng);
    
    expect(messageObject.from).toBe('jim');
    expect(messageObject.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    expect(messageObject.createdAt).toBeA('number');
  });
})