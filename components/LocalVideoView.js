import { Flex } from '@chakra-ui/layout';
import React, { useEffect, useRef } from 'react';

const LocalVideoView = ({ localStream }) => {
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => localVideo.play();
    }
  }, [localStream]);

  return (
    <Flex
      minH={['30%', '150px']}
      maxH={['30%', '150px']}
      minW={['30%', '150px']}
      maxW={['30%', '150px']}
      alignItems="center"
      justifyContent="center"
      m={5}
      mt={[5, 0]}
    >
      <video
        style={{ width: '100%', height: '100%', borderRadius: '15px' }}
        ref={localVideoRef}
        autoPlay
        muted
      ></video>
    </Flex>
  );
};

export default LocalVideoView;
