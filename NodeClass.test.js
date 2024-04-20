import { test, expect } from "vitest";
import NodeClass from "./NodeClass";

test("Test NodeClass creation", () => {
    const node = new NodeClass(5);

    expect(node.nextNode, "Next node should be null").toBeNull();
    expect(node.value, "The value should be 5").toBe(5);
});

test("Test nodeClass behavior", () => {
    const node1 = new NodeClass(4);
    const node2 = new NodeClass(5);

    node1.nextNode = node2;

    expect(node1.nextNode, "Node1.next Should be node 2").toBe(node2);
    expect(node1.nextNode.value, "the value should be 5").toBe(5);
});
