import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Screen } from "../../components/screen";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { useStore } from "../../storage";
import styles from "./sign-up.module.css";

export const SignUpScreen = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { authStore } = useStore();

  const onSubmit = async data => {
    const success = await authStore.signUp(data);
    if (success) {
      history.push("/");
    }
  };

  return (
    <Screen centered>
      <Card className={styles.signUpForm} >
        <h1>Create new account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" {...register("name", { required: true })} />
          <Input label="Email" name="email" {...register("email", { required: true })} />
          <Input label="Password" name="password" type="password" {...register("password", { required: true }) } />
          <Link className={styles.signUpForm__link} to="/login" text="Already have an account?" />
          <Button className={styles.signUpForm__button} type="submit">Sign Up</Button>
        </form>
      </Card>
    </Screen>
  );
};
