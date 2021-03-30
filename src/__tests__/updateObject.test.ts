import { updateObject } from '../utilities/updateObject';

describe('updateObject utility function works correctly if', () => {
  it('update object appropriately', () => {
    const oldObj = { name: 'Mike', age: 28 };
    const updatedProperties = { name: 'John' };
    const expectedResult = { name: 'John', age: 28 };

    expect(updateObject(oldObj, updatedProperties)).toEqual(expectedResult);
  });
  it('doesnt change object if given updatedProperty is empty {}', () => {
    const oldObj = { name: 'Mike', age: 28 };
    const updatedProperties = {};

    expect(updateObject(oldObj, updatedProperties)).toEqual(oldObj);
  });
});
