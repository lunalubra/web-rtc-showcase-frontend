import React, { useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/layout';

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: ''
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex direction="column">
      <Text mb={2} color="white" fontSize="lg" fontWeight="semibold">
        {reason}
      </Text>
    </Flex>
  );
};

export default CallRejectedDialog;
