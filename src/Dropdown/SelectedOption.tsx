import React from 'react';

import s from './dropdown.module.scss';
import Arrow from './Arrow';
import cn from 'classnames';

type TProps = {
  show: boolean;
  setShow: Function;
  children: any;
  top: boolean;
  className?: string;
};

export const SelectedOption = ({ setShow, show, children, top, className }: TProps) => {
  // todo стрелка зависит от пропса top
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <a
      className={cn(s.toggler, className, { [s.togglerActive]: show }, { [s.listDirectionTop]: top })}
      role="button"
      onClick={() => setShow(!show)}
      data-list-item=""
    >
      <span className={s.selectedTitle}>{children}</span>
      <Arrow className={cn(s.arrow, { [s.arrowOpen]: show })} />
    </a>
  );
};
