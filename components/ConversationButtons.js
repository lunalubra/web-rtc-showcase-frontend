import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdVideoCall,
  MdCamera
} from 'react-icons/md';
import { IconButton } from '@chakra-ui/button';
import { Stack } from '@chakra-ui/layout';
import React from 'react';

import {
  switchForScreenSharingStream,
  hangUp
} from '../utils/webRTC/webRTCHandler';

const ConversationButtons = (props) => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    setMicrophoneEnabled,
    screenSharingActive
  } = props;

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <Stack
      position="absolute"
      top={['32%', '40%']}
      maxW="20px"
      direction={'column'}
      ml={5}
    >
      <IconButton
        rounded="full"
        icon={localMicrophoneEnabled ? <MdMic /> : <MdMicOff />}
        onClick={handleMicButtonPressed}
      />
      <IconButton
        rounded="full"
        icon={<MdCallEnd />}
        onClick={handleHangUpButtonPressed}
      />
      <IconButton
        rounded="full"
        icon={localCameraEnabled ? <MdVideocam /> : <MdVideocamOff />}
        onClick={handleCameraButtonPressed}
      />
      <IconButton
        rounded="full"
        icon={screenSharingActive ? <MdCamera /> : <MdVideoLabel />}
        onClick={handleScreenSharingButtonPressed}
      />
    </Stack>
  );
};

export default ConversationButtons;
