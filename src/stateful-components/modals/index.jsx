import React from "react";
import { observer } from "mobx-react-lite";
import { CreateFinanceGroupModal } from "./create-finance-group-modal";
import { useStore } from "../../storage";

export const RootModal = observer(() => {
  const { modalStore } = useStore();

  const closeModal = () => modalStore.clearModal();

  if (!modalStore.activeModalId) {
    return null;
  }

  switch (modalStore.activeModalId) {
    case modalStore.modalIdsMap.CREATE_FINANCE_GROUP_MODAL:
      return <CreateFinanceGroupModal onClose={closeModal} />;
  
    default:
      return null
  }
});
