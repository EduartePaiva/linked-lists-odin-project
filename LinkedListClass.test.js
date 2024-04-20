import { test, expect } from "vitest";
import { LinkedListClass } from "./LinkedListClass";

test("Test empty linkedList", () => {
    const list = new LinkedListClass();

    expect(list.size()).toBe(0);
    expect(list.head()).toBeNull();
    expect(list.tail()).toBeNull();
});
