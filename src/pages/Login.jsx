import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../components/API';
import { Button, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Flex justifyContent="center" width="100%" mt="10" mb="10">
      <Helmet>
        <title>Phonebook Login</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <Button type="submit" bg="#bbd0f7">
          Login
        </Button>
      </form>
    </Flex>
  );
};
