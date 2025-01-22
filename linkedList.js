class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        return `Node ( data -> ${this.data}, next -> ${this.next} )`;
    }
}

class LinkedList {
    constructor() {
        this.nodes = [];
    }

    append(...data) {
        data.forEach((value) => {
            const node = new Node(value);

            if (this.nodes.length > 0) {
                this.nodes[this.nodes.length - 1].next = node;
            }

            this.nodes.push(node);
        });
    }

    prepend(data) {
        const node = new Node(data);

        if (this.nodes.length > 0) {
            node.next = this.nodes[0];
        }

        this.nodes.unshift(node);
    }

    pop() {
        this.nodes.pop();
        this.nodes[this.nodes.length - 1].next = null;
    }

    insertAt(data, index) {
        const node = new Node(data);

        if (this.nodes.length > index) {
            node.next = this.nodes[index];
        }

        if (this.nodes.length > 0 && index > 0) {
            this.nodes[index - 1].next = node;
        }

        this.nodes.splice(index, 0, node);
    }

    removeAt(index) {
        if (this.nodes.length > index + 1) {
            this.nodes[index - 1].next = this.nodes[index + 1];
        } else {
            this.nodes[index - 1].next = null;
        }

        this.nodes.splice(index, 1);
    }

    at(index) {
        return this.nodes[index];
    }

    contains(data) {
        for (let index = 0; index < this.nodes.length; index++) {
            if (this.nodes[index].data === data){
                return true;
            }
        }
        return false;
    }
    
    find(data) {
        for (let index = 0; index < this.nodes.length; index++) {
            if (this.nodes[index].data === data){
                return index;
            }
        }
        return null;
    }

    head() {
        return this.nodes[0];
    }

    tail() {
        return this.nodes[this.nodes.length - 1];
    }

    size() {
        return this.nodes.length;
    }

    toString() {
        let builder = '';

        for (let index = 0; index < this.nodes.length; index++) {
            builder = builder + `( ${this.nodes[index].data} )`;

            if (index != this.nodes.length - 1) {
                builder = builder + ' -> ';
            } else {
                builder = builder + ' -> null'
            }
        }

        return builder;
    }
}

export { LinkedList }
