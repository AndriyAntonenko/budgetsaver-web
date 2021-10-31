import React from "react";
import { useForm } from "react-hook-form";
import { Screen } from "../../components/screen";
import { Card } from "../../components/card";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import styles from "./sign-in.module.css";

export const SignInScreen = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.info(data);

  return (
    <Screen centered>
      <Card className={styles.signInForm} >
        <h1>Sign In, please</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" name="email" {...register("email", { required: true })} />
          <Input label="Password" name="password" type="password" {...register("password", { required: true })} />
          <Link className={styles.signInForm__link} to="/sign-up" text="Haven't account yet?" />
          <Button className={styles.signInForm__button} type="submit">Sign In</Button>
        </form>
      </Card>
    </Screen>
  );
};