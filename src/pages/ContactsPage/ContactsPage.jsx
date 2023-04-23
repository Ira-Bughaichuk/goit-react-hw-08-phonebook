import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import scss from './contactsPage.module.scss';

export default function contactsPage() {
  return (
    <div>
      <div className={scss.wrapperContact}>
        <ContactForm />
        <ContactList />
      </div>
      <div className={scss.wrapperFilter}>
        <Filter />
      </div>
    </div>
  );
}
