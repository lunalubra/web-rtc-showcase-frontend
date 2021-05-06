import { IconButton } from '@chakra-ui/button';
import { MdCallEnd } from 'react-icons/md';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

import { hangUp } from '../utils/webRTC/webRTCHandler';

const CallingDialog = () => {
  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <Flex direction="column">
      <Text mb={2} color="white" fontSize="lg" fontWeight="semibold">
        Calling
      </Text>
      <IconButton
        rounded="full"
        icon={<MdCallEnd />}
        onClick={handleHangUpButtonPressed}
      />
    </Flex>
  );
};

export default CallingDialog;
