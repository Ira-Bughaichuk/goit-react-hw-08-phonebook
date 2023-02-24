import { privateAPI } from '../http/http';

export const fetchContacts = async () => {
  const { data } = await privateAPI.get('/contacts');
  return data;
};
export const addContact = async contact => {
  const { data } = await privateAPI.post(`/contacts`, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await privateAPI.delete(`/contacts/${id}`);
  return data;
};
