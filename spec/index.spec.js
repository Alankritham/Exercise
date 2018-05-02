// import * as foo from './index';
var foo = require("./../index.js");

describe('findLongestWordAndLength()', function () {

  it('Should trigger the function ', function () {
    spyOn(foo, 'findLongestWordAndLength').andCallThrough();
    foo.findLongestWordAndLength("The the", true, true)
    expect(foo.findLongestWordAndLength).toHaveBeenCalled();
  });

  it('Should return the longest word and length', function () {
    var expectedValue = {
      "longestWord": ['Thewerer'],
      "longestWordLength": 8
    }
    expect(foo.findLongestWordAndLength("Thewerer the", true, true)).toEqual(expectedValue);
  });

  it('Should return no value if an empty string is passed', function () {
    var expectedValue = {
      "longestWord": [''],
      "longestWordLength": 0
    }
    expect(foo.findLongestWordAndLength("", true, true)).toEqual(expectedValue);
  });

  it('Should return multiple words if they have same max length', function () {
    var expectedValue = {
      "longestWord": ['jumped', 'jumper'],
      "longestWordLength": 6
    }
    expect(foo.findLongestWordAndLength(" The jumped jumper", true, true)).toEqual(expectedValue);
  });

  it('Should check both the check boxes', function () {
    expect(foo.findLongestWordAndLength(" ", false, false)).toEqual(undefined);
  });

  it('Should ignore the special characters', function () {
    var expectedValue = {
      "longestWord": ['jumped', 'jumper'],
      "longestWordLength": 6
    }
    expect(foo.findLongestWordAndLength(" The jumped! jumper@", true, true)).toEqual(expectedValue);
  });

  it('Should ignore the numbers', function () {
    var expectedValue = {
      "longestWord": ['jumped', 'jumper'],
      "longestWordLength": 6
    }
    expect(foo.findLongestWordAndLength(" The jumped12 jumper21", true, true)).toEqual(expectedValue);
  });

});