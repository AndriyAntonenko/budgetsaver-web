import { AuthStore } from "./auth.store";
import { ProfileStore } from "./profile.store";

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
    this.profileStore = new ProfileStore();
  }
}
