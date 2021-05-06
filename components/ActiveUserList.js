import { Flex, Stack, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/react';
import { connect } from 'react-redux';

import { callToOtherUser } from '../utils/webRTC/webRTCHandler';
import { callStates } from '../redux/actions/call.actions';

const ActiveUserList = ({ activeUsers, callState }) => {
  const handleListItemPressed = (activeUser) => {
    if (callState === callStates.CALL_AVAILABLE) callToOtherUser(activeUser);
  };

  return (
    <Flex direction="column" alignItems="center" p={2}>
      <Text fontWeight="semibold" fontSize="lg">
        Connected users
      </Text>
      <Text fontSize="sm">Click one user to video call them</Text>
      <Stack direction="column" spacing={2} p={3}>
        {activeUsers.map((activeUser) => (
          <Flex
            key={activeUser.socketId}
            alignItems="center"
            onClick={() => handleListItemPressed(activeUser)}
          >
            <Avatar name={activeUser.username} />
            <Text pl={3}>{activeUser.username}</Text>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
};

const mapStateToProps = ({ dashboard, call }) => ({
  ...dashboard,
  ...call
});

export default connect(mapStateToProps)(ActiveUserList);
