import {
  Button,
  Input,
  useToast,
  Image,
  Stack,
  useBreakpointValue,
  FormControl,
  useColorModeValue
} from '@chakra-ui/react';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useState } from 'react';

import { registerNewUser } from '../utils/wssConnection/wssConnection';
import { setUsername } from '../redux/actions/dashboard.actions';

function LoginPage({ saveUsername }) {
  const router = useRouter();
  const toast = useToast();

  const [name, setName] = useState('');
  const [state, setState] = useState('initial');

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
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1
              }}
            >
              WebRTC
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              VideoChat Project
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            This projecte is a showcase of what i have learned about webRTC. To
            enter, please, enter your name
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            as={'form'}
            spacing={'12px'}
            onSubmit={(e) => {
              e.preventDefault();
              setState('submitting');
              handleSubmit();
            }}
          >
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400'
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'name'}
                type={'name'}
                required
                placeholder={'Your name'}
                aria-label={'Your name'}
                value={name}
                disabled={state !== 'initial'}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: '100%', md: '40%' }}>
              <Button
                colorScheme={state === 'success' ? 'green' : 'blue'}
                isLoading={state === 'submitting'}
                w="100%"
                type={state === 'success' ? 'button' : 'submit'}
              >
                {state === 'success' ? <CheckIcon /> : 'Submit'}
              </Button>
            </FormControl>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1611679782010-5ac7ff596d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
