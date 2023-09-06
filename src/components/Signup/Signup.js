import React, {useRef} from 'react';
import Input from "../Input/Input";
import IconAt from "../IconAt/IconAt";

const Signup = ({onSubmit}) => {
  const formRef = useRef({
    name: '',
    nick: '',
    email: '',
    gender: '',
    password: '',
    repeat: ''
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
      <Input name="name" label="Введите имя" placeholder="Имя" type="text" radius="md" size="md"/>
      <Input name="nick" label="Введите ник" placeholder="Ник" type="text" radius="md" size="md" icon={<IconAt />}/>
      <Input name="email" label="Введите email" placeholder="Email" type="email" radius="md" size="md"/>
      <div className="">
        <Input name="gender" type="radio" label="Мужской" size="md"/>
        <Input name="gender" type="radio" label="Женский" size="md"/>
      </div>
      <Input name="password" label="Введите пароль" placeholder="Пароль" type="password" radius="md" size="md"/>
      <Input name="repeat" label="Повторите пароль" placeholder="Пароль" type="password" radius="md" size="md"/>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Signup;