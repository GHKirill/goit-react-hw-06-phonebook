//import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { changeFilter } from 'redux/actions';
import { changeFilter } from '../../redux/filterSlice';

import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default function Filter() {
  const inputFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const idFilter = nanoid();
  return (
    <form className={css.formFilter}>
      <label htmlFor={idFilter} className={css.filterLabel}>
        Find Contact by Name
      </label>

      <input
        type="text"
        name="filter"
        value={inputFilter}
        onChange={event =>
          dispatch(changeFilter(event.target.value.toLowerCase()))
        }
      />
    </form>
  );
}
