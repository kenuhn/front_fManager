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
  const nomClubRef = useRef<HTMLInputElement>(null)
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

      console.log( {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        pseudo: pseudotRef.current.value,
        password: passwordRef.current.value,
        confirmPassword : confirmPasswordRef.current.value
      })

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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [nomClub, setNomClub] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePseudo = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setPseudo(event.target.value);
  };

  const handleNomCLub = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setNomClub(event.target.value);
  };

  const handleEmail= (event :  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event :  React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Stack sx={{ width: "200px", gap: "1px" }}>
      <FormControl ref={ref}>
        <TextField placeholder="Write your firstName" inputRef={firstNameRef} value={firstName} onChange={handleFirstNameChange} />
        <TextField placeholder="Write your lastName" inputRef={lastNameRef} value={lastName} onChange={handleLastNameChange} />
        <TextField placeholder="Write your pseudo" inputRef={pseudotRef} value={pseudo} onChange={handlePseudo} />
        <TextField placeholder="Write your email" inputRef={nomClubRef} value={nomClub} onChange={handleNomCLub} />
        <TextField placeholder="Write your email" inputRef={emailRef} value={email} onChange={handleEmail} />
        <TextField
          placeholder="password"
          inputRef={passwordRef}
          value={password} onChange={handlePassword} 
        />
        <TextField
          placeholder="confirm password"
          inputRef={confirmPasswordRef}
          value={confirmPassword} onChange={handleConfirmPassword} 
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
