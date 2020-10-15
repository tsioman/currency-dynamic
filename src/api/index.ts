export const http = async <T>(request: RequestInfo): Promise<T> => {
  const response = await fetch(request, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
  });
  return await response.json();
};
