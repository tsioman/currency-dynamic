import { fetchPeople } from "../reducer/people";
import { store } from "../store";

const mockResponse = {
  count: 1,
  next: "string",
  previous: null,
  results: [],
};

describe("test async thunk", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => mockResponse,
    });
  });
  afterEach(() => {
    fetch.mockClear();
  });
  it("data error when response fail", async () => {
    const errorText = "API is down";
    fetch.mockRejectedValueOnce(errorText);
    expect(
      await store.dispatch(fetchPeople()).then(() => {
        const state = store.getState();
        return state.people.error;
      })
    ).toEqual(`Fetch Error: ${errorText}`);
  });

  it("data from state correct when fetch has been done", async () => {
    expect(
      await store.dispatch(fetchPeople()).then(() => {
        const state = store.getState();
        return state.people.data;
      })
    ).toEqual(mockResponse);
  });
});
