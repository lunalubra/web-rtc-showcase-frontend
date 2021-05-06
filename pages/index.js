import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Button, Input, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useState } from 'react';

import { registerNewUser } from '../utils/wssConnection/wssConnection';
import { setUsername } from '../redux/actions/dashboard.actions';

function LoginPage({ saveUsername }) {
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name === '')
      return toast({
        title: 'Please, enter a name',
        status: 'info',
        duration: 4000,
        isClosable: true
      });
    router.push('/dashboard');
    registerNewUser(name);
    saveUsername(name);
  };

  return (
    <Flex minW="100vw" direction="column" alignItems="center">
      <Flex
        maxW="600px"
        minH="100vh"
        px={10}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>Welcome to this WebRTC showcase!</Heading>
        <Input
          my={3}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button minW="100%" onClick={handleSubmit}>
          Start using video chater
        </Button>
      </Flex>
    </Flex>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
