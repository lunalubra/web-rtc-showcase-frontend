import { Flex, Grid, GridItem } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { resetCallDataState } from '../redux/actions/call.actions';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import ActiveUserList from '../components/ActiveUserList';
import DirectCall from '../components/DirectCall';

export default function DashboardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    webRTCHandler.getLocalStream();
    () => {
      dispatch(resetCallDataState);
    };
  }, []);

  const { username } = useSelector((state) => state.dashboard);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!username) {
      toast({
        title: 'Disconnected',
        status: 'info',
        duration: 9000,
        isClosable: true
      });
      router.push('/');
    }
  }, [username]);

  return (
    <Flex
      minH="100vh"
      px={10}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        minW="100vw"
        minH="100vh"
        templateRows={['repeat(3, 1fr)', 'repeat(1, 1fr)']}
        templateColumns={['repeat(1, 1fr)', 'repeat(5, 1fr)']}
      >
        <GridItem
          minH={['100vh', '100%']}
          maxH={['100vh', '100%']}
          rowSpan={2}
          colSpan={[1, 4]}
          bg="blue.400"
        >
          <DirectCall />
        </GridItem>
        <GridItem
          colStart={[1, 5]}
          rowStart={[3, 1]}
          rowSpan={[1, 2]}
          minH="100%"
          maxH="100px"
          overflowY="auto"
          bg="white"
        >
          <ActiveUserList />
        </GridItem>
      </Grid>
    </Flex>
  );
}
