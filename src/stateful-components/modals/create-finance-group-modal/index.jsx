import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ModalWindow } from "../../../components/modal-window";
import { useStore } from "../../../storage";
import { Textarea } from "../../../components/textarea";
import styles from "./create-finance-group-modal.module.css";

export const CreateFinanceGroupModal = ({ onClose }) => {
  const { financeGroupStore } = useStore();
  const { handleSubmit, register } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => {
    const success = await financeGroupStore.createFinanceGroup(data);
    if (success) {
      onClose();
    }
  };

  return (
    <ModalWindow onClose={onClose} open>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Group name" name="name" {...register("name")} />
        <Textarea label="Description" name="description" {...register("description")} />
        <Button className={styles.createFinanceGroup__button} type="submit">Create group</Button>
      </form>
    </ModalWindow>
  );
};
