import { AuthStore } from "./auth.store";

/**
 * @class
 * @constructor
 * @public
 */
export class RootStore {
  constructor() {
    /**
     * @type {AuthStore}
     * @public
     */
    this.authStore = new AuthStore();
  }
}
