import { calc } from "../calc";

describe("Runner simple cases", () => {
  it("2 ^ 3", () => {
    expect(calc("2 ^ 3")).toEqual(8);
  });

  it("1 * 32", () => {
    expect(calc("1 * 32")).toEqual(32);
  });

  it("2 * 32", () => {
    expect(calc("2 * 32")).toEqual(64);
  });

  it("2 + 32", () => {
    expect(calc("2 + 32")).toEqual(34);
  });
});

describe("Runner tripled/mixed cases", () => {
  it("9 ** + 19", () => {
    expect(calc("9 ** + 19")).toEqual(100);
  });
  
  it("2 ^ 3 * 3", () => {
    expect(calc("2 ^ 3 * 3")).toEqual(24);
  });

  it("2 * 2 * 3", () => {
    expect(calc("2 * 2 * 3")).toEqual(12);
  });

  it("2 * 2 + 3", () => {
    expect(calc("2 * 2 + 3")).toEqual(7);
  });

  it("2 + 2 * 3", () => {
    expect(calc("2 + 2 * 3")).toEqual(8);
  });
});

describe("Runner long cases", () => {
  
  it("2 ** - 2 ^ 2 + 5!", () => {
    expect(calc("2 ** - 2 ^ 2 + 5 !")).toEqual(120);
  });

  it("20 + 1 * 10 - 5 * 3 + 2 ^ 3", () => {
    expect(calc("20 + 1 * 10 - 5 * 3 + 2 ^ 3")).toEqual(23);
  });

  it("20 - 10 * 10 / 5 - 3", () => {
    expect(calc("20 - 10 * 10 / 5 - 3")).toEqual(-3);
  });
});