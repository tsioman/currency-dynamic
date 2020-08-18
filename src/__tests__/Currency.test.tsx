import { responseRUB, responseUSD } from "../__tests__/__mocks__/rates";
import {
  ratesToData,
  dataToGraph,
  normalize,
  convertCurrencyToGraph,
} from "../services/Currency";

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
  it("Does converting data array to coordinates with area [width:10, height:10] is working correct", () => {
    const data = [1, 2, 3, 4, 5];
    const expectedData = [
      [0, 0],
      [2, 2.5],
      [4, 5],
      [6, 7.5],
      [8, 10],
    ];
    expect(dataToGraph(data, { width: 10, height: 10 })).toEqual(
      expect.arrayContaining(expectedData)
    );
  });
  it("Does data of currency rates with mocks values [81.1888, 79.6793] converting to graph coordinates is working correct", () => {
    const expectedData = [
      [0, 300],
      [150, 0],
    ];
    expect(
      convertCurrencyToGraph(responseRUB.rates, "RUB", {
        width: 300,
        height: 300,
      })
    ).toEqual(expect.arrayContaining(expectedData));
  });
});
