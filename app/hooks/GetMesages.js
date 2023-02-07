import { useState, useEffect } from 'react';
import SmsRetriever from 'react-native-sms-retriever';

function useMessages() {
  const [messages, setMessages] = useState([]);
 
  // Get the phone number (first gif)
   _onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
   };
   
  // Get the SMS message (second gif)
  _onSmsListenerPressed = async () => {
    try {
      const registered = await SmsRetriever.startSmsRetriever();
      if (registered) {
        SmsRetriever.addSmsListener(event => {
          console.log(event.message);
          SmsRetriever.removeSmsListener();
        }); 
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  useEffect(() => {
    _onPhoneNumberPressed()
    _onSmsListenerPressed()

  }, []);

  return messages;
}

export default useMessages;