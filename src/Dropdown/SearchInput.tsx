import React, { BaseSyntheticEvent, useEffect } from 'react';

import Search from './Search';
import s from './dropdown.module.scss';

const SearchInput = ({ callback }: { callback?: (e: BaseSyntheticEvent | null) => void }) => {
  /** Вернем null, чтобы обнулить строку поиска */
  // @ts-ignore
  useEffect(() => {
    return () => {
      if (!callback) return null;
      callback(null);
    };
  }, []);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor="" className={s.searchBox} data-search="">
      <Search className={s.searchIcon} />
      <input type="text" className={s.searchInput} onChange={callback} />
    </label>
  );
};

export default SearchInput;
