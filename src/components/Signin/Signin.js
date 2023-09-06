import React, {useRef} from 'react';
import Input from "../Input/Input";

const Signin = ({onSubmit}) => {
  const formRef = useRef({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    formRef.current = {
      ...formRef.current,
      [event.target.name]: event.target.value
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formRef.current)
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <Input name="email" label="Введите email" placeholder="Email" type="email" radius="20px" size="16px"/>
      <Input name="password" label="Введите пароль" placeholder="Пароль" type="password" radius="20px" size="16px"/>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Signin;