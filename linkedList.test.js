import { expect, test } from 'vitest';
import { LinkedList } from './linkedList';

const linkedList = new LinkedList();

linkedList.append('dog', 'cat', 'bird', 'fish');

test('Node.next -> points to next node in the list', () => {
    expect(linkedList.nodes[0].next.data).toBe('cat');
});

test('at(index) -> returns node at index', () => {
    expect(linkedList.at(2).data).toBe('bird');
});

test('contains(value) -> returns true if value is in any node of the list, else false', () => {
    expect(linkedList.contains('cat')).toBe(true);
});

test('find(value) -> returns index of node with value, else null', () => {
    expect(linkedList.find('cat')).toBe(1);
});

test('head() -> returns first node in the list', () => {
    expect(linkedList.head().data).toBe('dog');
});

test('tail() -> returns last node in the list', () => {
    expect(linkedList.tail().data).toBe('fish');
});

test('size() -> returns length of the list', () => {
    expect(linkedList.size()).toBe(4);
});

test('toString() -> returns string representation of the list', () => {
    expect(linkedList.toString()).toBe('( dog ) -> ( cat ) -> ( bird ) -> ( fish ) -> null');
});

test('pop() -> removes last node from the list', () => {
    linkedList.pop();
    expect(linkedList.size()).toBe(3);
    expect(linkedList.tail().data).toBe('bird');
    expect(linkedList.tail().next).toBe(null);
});

test('insertAt(value, index) -> inserts node with value at the specified index', () => {
    linkedList.insertAt('ant', 1);
    expect(linkedList.at(1).data).toBe('ant');
    expect(linkedList.nodes[0].next.data).toBe('ant');
    expect(linkedList.nodes[1].next.data).toBe('cat');
});

test('prepend(value) -> inserts node with value at start of the list', () => {
    linkedList.prepend('lizard');
    expect(linkedList.head().data).toBe('lizard');
    expect(linkedList.head().next.data).toBe('dog');
});

test('removeAt(index) -> removes node at index', () => {
    linkedList.removeAt(2);
    expect(linkedList.at(2).data).toBe('cat');
    expect(linkedList.at(2).next.data).toBe('bird');

    linkedList.removeAt(3);
    expect(linkedList.at(2).next).toBe(null);
});
