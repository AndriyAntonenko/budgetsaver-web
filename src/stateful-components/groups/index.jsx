import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../storage";
import { AddGroupCard, GroupCard } from "../group-card";
import styles from "./groups.module.css";

export const Groups = observer(() => {
  const { financeGroupStore } = useStore();

  useEffect(() => {
    financeGroupStore.fetchGroups();
  });

  return (
    <div className={styles.groups}>
      <AddGroupCard />
      {financeGroupStore.groups.map(group => <GroupCard key={group.id} group={group} />)}
    </div>
  );
});
