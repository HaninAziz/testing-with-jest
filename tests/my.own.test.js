const stack = require('../src/stack');

describe('Stack', () => {
    beforeEach(() => {
        // Återställer stacken inför varje test
        stack.clear();
    });

    test('push should add an element to the stack', () => {
        stack.push(5);
        expect(stack.peek()).toBe(5);
    });

    test('pop should remove and return the top element from the stack', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.pop()).toBe(20);
        expect(stack.peek()).toBe(10);
    });

    test('peek should return the top element from the stack without removing it', () => {
        stack.push(15);
        expect(stack.peek()).toBe(15);
        expect(stack.peek()).toBe(15); // Should still be the same after peeking
    });
});
