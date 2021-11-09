import React from "react";
import cn from "classnames";
import { observer } from "mobx-react-lite";
import { useStore } from "../../storage";
import styles from "./welcome-message.module.css";

export const WelcomeMessage = observer(
  ({ className }) => {
    const { profileStore } = useStore();

    return (
      <p className={cn(styles.welcomeMessage, className)}>
        Welcome, {profileStore.profile.name} (<span className={styles.welcomeMessage__email}>
          {profileStore.profile.email}
        </span>)!
      </p>
    );
  }
);
