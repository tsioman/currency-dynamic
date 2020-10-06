import { responseRUB, responseUSD } from "../../../__mocks__/rates";
import { ratesToData, normalize } from "./index";

describe("Currency tests cases", () => {
  it("Convert raw data for RUB rates working corect", () => {
    const expectedData = [81.1888, 79.6793];
    expect(ratesToData(responseRUB.rates, "RUB")).toEqual(
      expect.arrayContaining(expectedData)
    );
  });

  it("Convert raw data for USD rates working corect", () => {
    const expectedData = [1.1414, 1.12];
    expect(ratesToData(responseUSD.rates, "USD")).toEqual(
      expect.arrayContaining(expectedData)
    );
  });

  it("Normalize for value=1 and range min=10 and max=100 is 0", () => {
    expect(normalize(10, 10, 100)).toBe(0);
  });
  it("Normalize for value=100 and range min=10 and max=100 is 1", () => {
    expect(normalize(100, 10, 100)).toBe(1);
  });
  it("Normalize for value=1000 and range min=10 and max=100 is 11", () => {
    expect(normalize(1000, 10, 100)).toBe(11);
  });
});
