import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ModalWindow } from "../../../components/modal-window";
import styles from "./create-finance-group-modal.module.css";

export const CreateFinanceGroupModal = ({ onClose }) => {
  const { handleSubmit, register } = useForm();
  
  // TODO: Send api request 
  return (
    <ModalWindow onClose={onClose} open>
      <form onSubmit={handleSubmit(console.info)}>
        <Input label="Group name" name="name" {...register("name")} />
        <Input label="Description" name="description" {...register("description")} />
        <Button className={styles.createFinanceGroup__button} type="submit">Create group</Button>
      </form>
    </ModalWindow>
  );
};
