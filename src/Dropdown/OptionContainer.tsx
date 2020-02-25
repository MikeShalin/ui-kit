import React, { BaseSyntheticEvent, Children, ReactElement } from 'react';
import cn from 'classnames';

import s from './dropdown.module.scss';
import SearchInput from './SearchInput';

type TProps = {
  children: Array<ReactElement>;
  active?: boolean;
  list: boolean;
  setShow: any;
  top?: boolean;
  search?: boolean;
  show?: boolean;
  className?: string;
  searchCallback?: (e: BaseSyntheticEvent | null) => void;
};

const OptionContainer = ({ children, active = true, setShow, top, search, className, searchCallback }: TProps) => (
  <div
    className={cn(s.dropdown, className, 'dropdownlist', {
      [s.dropdown_active]: active,
      [s.dropdownTop]: top,
      [s.withSearch]: search,
    })}
    data-list=""
  >
    {search && <SearchInput callback={searchCallback} />}
    <div className={s.optionsBox}>
      {Children.map(children, child => React.cloneElement(child, { onClose: () => setShow(false) }))}
    </div>
  </div>
);

export default OptionContainer;
