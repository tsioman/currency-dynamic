import { zeroPrioritiesCalc, firstPrioritiesCalc, secondPrioritiesCalc } from "../engine";

describe("zeroPrioritiesCalc simple cases", () => {
  it("[5, !]", () => {
    expect(zeroPrioritiesCalc([5, "!"])).toEqual([120]);
  });
})

describe("zeroPrioritiesCalc mixed with first cases", () => {
  it("[10, +, 20, *, 2, +, 5, !]", () => {
    expect(zeroPrioritiesCalc([10, "+", 20, "*", 2, "+", 5, "!"])).toEqual([
      10, "+", 20, "*", 2, "+", 120
    ]);
  });
})

describe("firstPrioritiesCalc simple cases", () => {
  
  it("[2, ^ 3]", () => {
    expect(firstPrioritiesCalc([2, "^", 3])).toEqual([8]);
  });

  it("[1, * 32]", () => {
    expect(firstPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(firstPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });

  it("[32, + 32]", () => {
    expect(firstPrioritiesCalc([32, "+", 32])).toEqual([32, "+", 32]);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[32, /, 32, +, 10, *, 10 + 2 ^ 3]", () => {
    expect(firstPrioritiesCalc([32, "/", 32, "+", 10, "*", 10, "+", 2, "^", 3])).toEqual([
      1,
      "+",
      100,
      "+",
      8
    ]);
  });
});

describe("secondPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => secondPrioritiesCalc([32, "/", 32])).toThrow(
      TypeError("Unexpected stack!")
    );
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[32, + 32]", () => {
    expect(secondPrioritiesCalc([32, "+", 32])).toEqual(64);
  });

  it("[32, - 32]", () => {
    expect(secondPrioritiesCalc([32, "-", 32])).toEqual(0);
  });

  it("[32, - 32, +, 10]", () => {
    expect(secondPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});