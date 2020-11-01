import { sleep } from "@/utils/sleep";

export const login = async (name: string): Promise<void> => {
  await sleep(500);
  await localStorage.setItem("login", name);
};

export const logout = async (): Promise<void> => {
  await sleep(300);
  await localStorage.removeItem("login");
};

export const getUserSession = async (): Promise<string> => {
  await sleep(1000);
  const login = await localStorage.getItem("login");
  return login || "";
};

export const isLoggedIn = async (): Promise<boolean> => {
  const login = await getUserSession();
  return Boolean(login);
};

export const sentStatistic = async () => {
  await sleep(1000);
  console.log("successed");
};
