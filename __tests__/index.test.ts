import { doSomething } from '../src/index';

describe('Some Library', () => {
  describe('doSomething', () => {
    it('should return false', () => {
      expect(doSomething()).toBe(false);
    });
  });
});
