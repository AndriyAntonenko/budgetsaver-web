import React from "react";
import { GroupCardContainer } from "./common";
import { useStore } from "../../storage";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import styles from "./group-card.module.css";

export const AddGroupCard = () => {
  const { modalStore } = useStore();
  const showModal = () => modalStore.setActiveModalId(modalStore.modalIdsMap.CREATE_FINANCE_GROUP_MODAL);

  return (
    <GroupCardContainer onClick={showModal}>
      <div className={styles.groupCard__addGroupContainer}>
        <div className={styles.groupCard__addGroupIcon}>
          <PlusIcon/>
        </div>
        <p>Add new finance group</p>
      </div>
    </GroupCardContainer>
  );
};
