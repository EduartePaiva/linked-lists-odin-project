import NodeClass from "./NodeClass";

export class LinkedListClass {
    constructor() {
        /**
         * @private
         * @type {NodeClass | null}
         */
        this._head = null;
        /**
         * @private
         * @type {NodeClass | null}
         */
        this._tail = null;
        /**
         * @private
         * @type {NodeClass | null}
         */
        this._beforeTail = null;
        /**
         * @private
         * @type {number}
         */
        this._size = 0;
    }

    /**
     * Returns the number of nodes
     * @returns {number} Number of nodes in the list
     */
    size() {
        return this._size;
    }
    /**
     * Returns the head ot the list
     * @returns {NodeClass | null} If the list is empty null is returned
     */
    head() {
        return this._head;
    }
    /**
     * Returns the tail ot the list
     * @returns {NodeClass | null} If the list is empty null is returned
     */
    tail() {
        return this._tail;
    }

    /**
     * adds a new node containing value to the end of the list
     * @param {number} value value of a node
     */
    append(value) {
        const newNode = new NodeClass(value);
        this._size += 1;
        if (this._tail !== null) {
            this._beforeTail = this._tail;
            this._tail.nextNode = newNode;
            this._tail = newNode;
        } else {
            this._head = newNode;
            this._tail = newNode;
            this._beforeTail = null;
        }
    }
    /**
     * adds a new node containing value to the start of the list
     * @param {number} value value of the node
     */
    prepend(value) {
        this._size += 1;
        const newNode = new NodeClass(value);
        newNode.nextNode = this._head;
        this._head = newNode;

        if (this._tail === null) {
            this._tail = newNode;
        }
    }
    /**
     * returns the node at the given 0 indexed index
     * @param {number} index index of the list
     * @throws {RangeError} if index is negative or is >= size of the list
     * @returns {NodeClass} returns a node
     */
    at(index) {
        if (index < 0) {
            throw new RangeError(`index ${index} is negative`);
        } else if (index >= this._size) {
            throw new RangeError(`index:${index} >= size:${this._size}`);
        }

        // if it's the last just return tail
        if (index + 1 === this._size) {
            return this._tail;
        }

        let headCopy = this._head;
        for (let i = 0; i < index; i++) {
            headCopy = headCopy.nextNode;
        }
        return headCopy;
    }
}