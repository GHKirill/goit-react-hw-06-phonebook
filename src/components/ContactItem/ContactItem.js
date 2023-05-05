import React from 'react';
import { useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/actions';
import { deleteContact } from '../../redux/contactsSlice';
// import css from './ContactItem.Module.css';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton/IconButton';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <IconButton
        type="button"
        onClick={() => dispatch(deleteContact({ id }))}
        aria-label="delete"
      >
        delete
      </IconButton>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
