import { AuthStore } from "./auth.store";
import { ProfileStore } from "./profile.store";
import { ModalStore } from "./modal.store";
import { FinanceGroupStore } from "./finance-group.store";

/**
 * @class
 * @constructor
 * @public
 */
export class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.profileStore = new ProfileStore();
    this.modalStore = new ModalStore();
    this.financeGroupStore = new FinanceGroupStore();
  }
}
