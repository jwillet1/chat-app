const expect = require("expect");

const {
  isRealString, 
} = require("./validation");

describe('isRealString', () => {
  it('should return true if usable string', () => {
    var output = isRealString('  jim  ');
    
    expect(output).toBe(true);
  });
  
  it('should return false for non-string values', () => {
    var output = isRealString(98);
    
    expect(output).toBe(false);
  });
  
  it('should return false with only spaces', () => {
    var output = isRealString('     ');
    
    expect(output).toBe(false);
  });
})