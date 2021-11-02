import { RootStore } from "./root.store";

const rootStore = new RootStore();

/**
 * 
 * @returns {RootStore}
 */
export const useStore = () => {
  return rootStore;
};
