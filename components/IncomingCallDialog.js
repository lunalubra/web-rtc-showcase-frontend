import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import {
  acceptIncomingCallRequest,
  rejectIncomingCallRequest
} from '../utils/webRTC/webRTCHandler';

const IncomingCallDialog = ({ callerUsername }) => {
  const handleAcceptButtonPressed = () => {
    acceptIncomingCallRequest();
  };

  const handleRejectButtonPressed = () => {
    rejectIncomingCallRequest();
  };

  return (
    <Flex direction="column">
      <Text mb={2} color="white" fontSize="lg" fontWeight="semibold">
        {`${callerUsername} is calling you`}
      </Text>
      <Button my={2} onClick={handleAcceptButtonPressed}>
        Accept
      </Button>
      <Button onClick={handleRejectButtonPressed}>Reject</Button>
    </Flex>
  );
};

export default IncomingCallDialog;
