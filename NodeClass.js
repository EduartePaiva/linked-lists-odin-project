export default class NodeClass {
    /**
     *Constructor of a list node
     * @param {number} value the value can be a number or null
     */
    constructor(value) {
        this.value = value;
        /**@type {NodeClass | null} */
        this.nextNode = null;
    }
}
