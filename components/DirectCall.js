import React from 'react';
import { connect } from 'react-redux';

import {
  callStates,
  setCallRejected,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled
} from '../redux/actions/call.actions';
import ConversationButtons from './ConversationButtons';
import IncomingCallDialog from './IncomingCallDialog';
import CallRejectedDialog from './CallRejectedDialog';
import RemoteVideoView from './RemoteVideoView';
import LocalVideoView from './LocalVideoView';
import CallingDialog from './CallingDialog';
import { Flex } from '@chakra-ui/layout';

const DirectCall = (props) => {
  const {
    localStream,
    remoteStream,
    callState,
    callerUsername,
    callingDialogVisible,
    callRejected,
    hideCallRejectedDialog
  } = props;
  return (
    <Flex position="relative" direction="column" minH="100%">
      <LocalVideoView localStream={localStream} />
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <RemoteVideoView remoteStream={remoteStream} />
      )}
      <Flex direction="column" alignItems="center" justifyContent="center">
        {callRejected.rejected && (
          <CallRejectedDialog
            reason={callRejected.reason}
            hideCallRejectedDialog={hideCallRejectedDialog}
          />
        )}
        {callState === callStates.CALL_REQUESTED && (
          <IncomingCallDialog callerUsername={callerUsername} />
        )}
        {callingDialogVisible && <CallingDialog />}
      </Flex>
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <ConversationButtons {...props} />
      )}
    </Flex>
  );
};

function mapStoreStateToProps({ call }) {
  return {
    ...call
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) =>
      dispatch(setCallRejected(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) =>
      dispatch(setLocalMicrophoneEnabled(enabled))
  };
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
