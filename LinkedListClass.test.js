import { test, expect } from "vitest";
import { LinkedListClass } from "./LinkedListClass";

test("Test empty linkedList", () => {
    const list = new LinkedListClass();

    expect(list.size()).toBe(0);
    expect(list.head()).toBeNull();
    expect(list.tail()).toBeNull();
});

test("Test append method", () => {
    const list = new LinkedListClass();
    list.append(4);

    expect(list.size()).toBe(1);
    expect(list.head().value).toBe(4);
    expect(list.tail().value).toBe(4);

    list.append(5);

    expect(list.tail().value).toBe(5);
    expect(list.head().value).toBe(4);
    expect(list.size()).toBe(2);

    list.append(6);
    expect(list.tail().value).toBe(6);
    expect(list.head().value).toBe(4);
    expect(list.head().nextNode.value).toBe(5);
});

test("Test prepend method", () => {
    const list = new LinkedListClass();
    list.prepend(4);

    expect(list.size()).toBe(1);
    expect(list.head().value).toBe(4);
    expect(list.tail().value).toBe(4);

    list.prepend(5);

    expect(list.tail().value).toBe(4);
    expect(list.head().value).toBe(5);
    expect(list.size()).toBe(2);

    list.prepend(6);
    expect(list.tail().value).toBe(4);
    expect(list.head().value).toBe(6);
    expect(list.head().nextNode.value).toBe(5);
});

test("test at method", () => {
    const list = new LinkedListClass();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);
    list.append(9);
    list.append(10);

    expect(() => list.at(-1), "expect a RangeError").toThrow("index -1 is negative");
    expect(() => list.at(10), "expect a RangeError").toThrow("index:10 >= size:10");
    expect(() => list.at(11), "expect a RangeError").toThrow("index:11 >= size:10");

    expect(list.at(9).value).toBe(10);
    expect(list.at(9)).toBe(list.tail());

    expect(list.at(0).value).toBe(1);
    expect(list.at(0)).toBe(list.head());

    for (let i = 0; i < 10; i++) {
        expect(list.at(i).value).toBe(i + 1);
    }
});

test("test pop method", () => {
    const list = new LinkedListClass();

    for (let i = 0; i < 20; i++) {
        list.append(i);
    }
    for (let i = 19; i >= 0; i--) {
        expect(list.tail().value).toBe(i);
        expect(list.size()).toBe(i + 1);
        list.pop();
    }
    expect(list.tail()).toBeNull();
    expect(list.head()).toBeNull();
    expect(list.size()).toBe(0);
});

test("test contains method", () => {
    const list = new LinkedListClass();
    expect(list.contains(5)).toBeFalsy();
    list.prepend(554545);
    list.append(554545);
    list.append(554545);
    list.append(554545);
    list.append(554545);
    list.prepend(10);
    list.append(554545);
    list.append(554545);
    list.append(55);

    expect(list.contains(55)).toBeTruthy();
    expect(list.contains(10)).toBeTruthy();
    expect(list.contains(554545)).toBeTruthy();
    expect(list.contains(-554545)).toBeFalsy();
});
test("test find method", () => {
    const list = new LinkedListClass();
    expect(list.find(5)).toBeNull();
    list.prepend(554545);
    list.append(20);
    list.prepend(10);
    list.append(554545);
    list.append(55);

    expect(list.find(55)).toBe(4);
    expect(list.find(10)).toBe(0);
    expect(list.find(554545)).toBe(1);
    expect(list.find(-554545)).toBeNull();
});
