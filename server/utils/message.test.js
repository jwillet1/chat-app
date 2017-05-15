const expect = require("expect");

const {generateMessage} = require("./message");

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var messageObject = generateMessage('jim', 'I am awesome');
    
    expect(messageObject.from).toBe('jim');
    expect(messageObject.text).toBe('I am awesome');
    expect(messageObject.createdAt).toBeA('number');
  });
})