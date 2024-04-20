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
        if (this._tail === null && this._head) return this._tail;
    }

    /**
     * adds a new node containing value to the end of the list
     * @param {number} value value of a node
     */
    append(value) {
        const newNode = new NodeClass(value);
        this._size += 1;
        const tail = this.tail();
        if (tail !== null) {
            this._beforeTail = tail;
            tail.nextNode = newNode;
        } else {
            this._head = newNode;
            this._tail = newNode;
            this._beforeTail = null;
        }
    }
}
