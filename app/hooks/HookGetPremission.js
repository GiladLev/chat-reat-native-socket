import React from 'react';
import {Button, Linking, PermissionsAndroid, ScrollView} from 'react-native';

const PERMISSIONS_TYPE = [
  'READ_CALENDAR',
  'WRITE_CALENDAR',
  'CAMERA',
  'READ_CONTACTS',
  'WRITE_CONTACTS',
  'GET_ACCOUNTS',
  'ACCESS_FINE_LOCATION',
  'ACCESS_COARSE_LOCATION',
  'ACCESS_BACKGROUND_LOCATION',
  'RECORD_AUDIO',
  'READ_PHONE_STATE',
  'CALL_PHONE',
  'READ_CALL_LOG',
  'WRITE_CALL_LOG',
  'ADD_VOICEMAIL',
  'USE_SIP',
  'PROCESS_OUTGOING_CALLS',
  'BODY_SENSORS',
  'SEND_SMS',
  'RECEIVE_SMS',
  'READ_SMS',
  'RECEIVE_WAP_PUSH',
  'RECEIVE_MMS',
  'READ_EXTERNAL_STORAGE',
  'WRITE_EXTERNAL_STORAGE',
  'BLUETOOTH_CONNECT',
  'BLUETOOTH_SCAN',
  'BLUETOOTH_ADVERTISE',
  'ACCESS_MEDIA_LOCATION',
  'ACCEPT_HANDOVER',
  'ACTIVITY_RECOGNITION',
  'ANSWER_PHONE_CALLS',
  'READ_PHONE_NUMBERS',
  'UWB_RANGING',
];

async function requestPermission(PERMISSION_TYPE) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS[PERMISSION_TYPE],
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log(`You can use ${PERMISSION_TYPE}`);
    } else {
      console.log(`${PERMISSION_TYPE} permission denied`);
    }
  } catch (err) {
    console.warn(err);
  }
}
const usePremision =()=>{
    {PERMISSIONS_TYPE.forEach((TYPE) => {
        console.log(TYPE)
        requestPermission(TYPE)
    })}
    
}


export default usePremision;