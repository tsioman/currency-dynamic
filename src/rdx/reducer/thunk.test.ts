import { fetchPeople } from "../actions/thunk";
import { store } from "../../containers/AppRouter";

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
        const { error } = store.getState();
        return error;
      })
    ).toEqual(errorText);
  });

  it("data from state correct when fetch has been done", async () => {
    expect(
      await store.dispatch(fetchPeople()).then(() => {
        const { data } = store.getState();
        return data;
      })
    ).toEqual(mockResponse);
  });
});
