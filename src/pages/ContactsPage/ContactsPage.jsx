import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';

export default function contactsPage() {
  return (
    <div>
      <ContactForm />
      <ContactList />
      <Filter />
    </div>
  );
}
