import React from "react";
import { GroupCardContainer } from "./common";
import { ReactComponent as HumanIcon } from "../../assets/human.svg";
import styles from "./group-card.module.css";

export const GroupCard = ({ group }) => {
  return (
    <GroupCardContainer>
      <p className={styles.groupCard__name}>{group.name}</p>
      <div className={styles.groupCard__separator} />
      <p className={styles.groupCard__description}>{group.description}</p>

      <div className={styles.groupCard__membersCount}>
        <div className={styles.groupCart__memberIconWrapper}><HumanIcon /></div>
        <span>{group.membersCount}</span>
      </div>
    </GroupCardContainer>
  );
};
