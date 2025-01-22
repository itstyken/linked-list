# Linked list
 Linked list implemented in JavaScript for [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists) with Vitest for testing.

## Methods
- `append(value)` adds a new node containing value to the end of the list.
- `prepend(value)` adds a new node containing value to the start of the list.
- `size()` returns the total number of nodes in the list.
- `head()` returns the first node in the list.
- `tail()` returns the last node in the list.
- `at(index)` returns the node at the given index.
- `pop()` removes the last element from the list.
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
- `find(value)` returns the index of the node containing value, or null if not found.
- `insertAt(value, index)` that inserts a new node with the provided value at the given index.
- `removeAt(index)` that removes the node at the given index.

## Unit tests
[Vitest](https://github.com/vitest-dev/vitest) was the testing framework choosed for writing the tests.

To run the tests, first install the packages:
```
npm install
```
Then use:
```
npm run test
```