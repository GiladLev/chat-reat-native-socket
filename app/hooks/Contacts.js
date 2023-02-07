import { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import socket from '../utils/socket';

export function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
        });
        socket.emit("Contacts", data);
        setContacts(data);
      }
    }

    fetchContacts();
  }, []);

  return contacts;
}