import React, { MouseEvent, ReactNode } from 'react';
import cn from 'classnames';

import s from './dropdown.module.scss';

type TProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick: (e: MouseEvent) => void;
  onClose: Function;
};

export const Option = ({ children, onClick, disabled, onClose }: TProps) => {
  const handleClick = (e: MouseEvent) => {
    onClick(e);
    onClose();
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <a className={cn(s.dropdownItem, 'custom-link', { [s.disabled]: disabled })} onClick={handleClick}>
      {children}
    </a>
  );
};
