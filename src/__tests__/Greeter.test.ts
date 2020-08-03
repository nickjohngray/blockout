import { Greeter } from '../index';
describe('First Test', () => {
  test('My Greeter', () => {
    expect(Greeter('Carl')).toBe('Hello Carl');
  });
});
