//import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);

  //console.log(contacts);
  const inputFilter = useSelector(state => state.filter);

  if (contacts.length === 0) return;
  return (
    <ul className={css.contactList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(inputFilter))
        .map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <ContactItem
              className={css.contactItem}
              name={name}
              number={number}
              id={id}
            />
          </li>
        ))}
    </ul>
  );
}
