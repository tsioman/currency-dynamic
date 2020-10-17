import { parser } from "../parser";

describe("Parser correct cases", () => {
  it("9 + 9 **", () => {
    expect(parser("9 + 9 **")).toEqual([9, "+", 9, "**"]);
  });

  it("5 ! + 10", () => {
    expect(parser("5 ! + 10")).toEqual([5, "!", "+", 10]);
  });

  it ("2 ^ 3", ()=> {
    expect(parser("2 ^ 3")).toEqual([2, "^", 3])
  });

  it ("2 ^ 3 + 1", ()=> {
    expect(parser("2 ^ 3 + 1")).toEqual([2, "^", 3, "+", 1])
  });

  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(
      TypeError("Unexpected string")
    );
  });

  it("1 ! 33 - 2", () => {
    expect(() => parser("1 ! 33 - 2")).toThrow(TypeError("Unexpected string"));
  });
});