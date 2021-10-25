import React from "react";
import { useForm } from "react-hook-form";
import { Screen } from "../../components/screen";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import styles from "./sign-up.module.css";

export const SignUpScreen = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.info(data);

  return (
    <Screen centered>
      <Card className={styles.signUpForm} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" {...register("name")} />
          <Input label="Email" name="email" {...register("email")} />
          <Input label="Password" name="password" type="password" {...register("password") } />
          <Button className={styles.signUpForm__button} type="submit">Sign Up</Button>
        </form>
      </Card>
    </Screen>
  );
};
