import { AuthStore } from "./auth.store";
import { ProfileStore } from "./profile.store";
import { ModalStore } from "./modal.store";

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
    this.modalStore = new ModalStore();
  }
}
