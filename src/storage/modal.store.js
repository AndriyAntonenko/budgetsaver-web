import { makeAutoObservable, observable, action } from "mobx";

export class ModalStore {
  activeModalId = null;

  modalIdsMap = {
    CREATE_FINANCE_GROUP_MODAL: "CREATE_FINANCE_GROUP_MODAL"
  };

  constructor() {
    makeAutoObservable(this, {
      activeModalId: observable,
      setActiveModalId: action,
      clearModal: action
    });
  }

  setActiveModalId(id) {
    if (id in this.modalIdsMap) {
      this.activeModalId = id;
    }
  }

  clearModal() {
    this.activeModalId = null;
  }
}
