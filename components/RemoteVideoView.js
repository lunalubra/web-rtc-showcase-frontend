import { Flex } from '@chakra-ui/layout';
import { useEffect, useRef } from 'react';

const RemoteVideoView = ({ remoteStream }) => {
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;

      remoteVideo.onloadedmetadata = () => remoteVideo.play();
    }
  }, [remoteStream]);

  return (
    <Flex
      position={['relative', 'absolute']}
      pl={[0, 24]}
      mt={[10, 12, 0]}
      maxW={['null', '80%', '80%', 'null']}
      maxH="100%"
      minH="100%"
      alignSelf={['center', 'flex-end', 'flex-end', 'center']}
    >
      <video ref={remoteVideoRef} autoPlay></video>
    </Flex>
  );
};

export default RemoteVideoView;
