import { FormControl } from "@mui/base/FormControl";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { useRef } from "react";

interface IUser {
  firstName: string;
  lastName: string;
  pseudo: string;
  password: string;
}

const RegisterForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [formData, setFormData] = useState<IUser>({
    firstName: "",
    lastName: "",
    pseudo: "",
    password: "",
  });

  const [isSamePassword, setIsSamePassword] = useState<boolean>(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const pseudotRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (
      firstNameRef.current !== null &&
      lastNameRef.current !== null &&
      pseudotRef.current !== null &&
      emailRef.current !== null &&
      passwordRef.current !== null &&
      confirmPasswordRef.current !== null
    ) {
      console.log("premier condition : ", {
        firstName: firstNameRef.current,
        lastName: lastNameRef.current,
        pseudo: pseudotRef.current,
        password: passwordRef.current,
      });
      if (passwordRef.current.value == confirmPasswordRef.current.value) {
        setFormData({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          pseudo: pseudotRef.current.value,
          password: passwordRef.current.value,
        });
        setIsSamePassword(true);
      } else {
        setIsSamePassword(false);
        console.log("erreur le password est : ", isSamePassword);
      }
    }
    console.log("voici les data du formulaire : ", formData);
  };

  return (
    <Stack sx={{ width: "200px", gap: "1px" }}>
      <FormControl ref={ref}>
        <TextField placeholder="Write your firstName" inputRef={firstNameRef} />
        <TextField placeholder="Write your lastName" inputRef={lastNameRef} />
        <TextField placeholder="Write your pseudo" inputRef={pseudotRef} />
        <TextField placeholder="Write your email" inputRef={emailRef} />
        <TextField
          placeholder="password"
          name="password"
          inputRef={passwordRef}
        />
        <TextField
          placeholder="confirm password"
          name="confirmPassworf"
          ref={confirmPasswordRef}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <p onClick={onSwitch}>se connecter </p>
      </FormControl>
    </Stack>
  );
};

const LoginForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  return (
    <FormControl>
      <input></input>
      <Button>login</Button>
      <p onClick={onSwitch}>s'inscrire</p>
    </FormControl>
  );
};
const Form = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? (
        <RegisterForm onSwitch={handleRegister} />
      ) : (
        <LoginForm onSwitch={handleRegister} />
      )}
    </div>
  );
};

export default Form;
