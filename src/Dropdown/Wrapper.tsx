import React, {
  useState,
  useRef,
  useEffect,
  ReactElement,
  Children,
  BaseSyntheticEvent,
} from 'react';
import cn from 'classnames';

import s from './dropdown.module.scss';

type TProps = {
  children: Array<ReactElement>;
  dark?: boolean;
  top?: boolean;
  search?: boolean;
  searchCallback?: (e: BaseSyntheticEvent | null) => void;
  className?: string;
};

const useDropdown = () => {
  const [show, setShow] = useState(false);

  const wrapperRef = useRef(null);
  const clickOutside = () => setShow(false);
  const handleClickOutside = ({ target }: any): void => {
    const node = wrapperRef.current;
    // @ts-ignore
    if (node && !node.contains(target as Node) && clickOutside) {
      clickOutside();
    }
  };
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return {
    wrapperRef,
    show,
    setShow,
  };
};

const Wrapper = ({ children, dark, top, search, searchCallback, className }: TProps) => {
  const { wrapperRef, show, setShow } = useDropdown();
  return (
    <div
      ref={wrapperRef}
      className={cn(s.container, className, { [s.darkTheme]: dark }, { [s.listDirectionTop]: top })}
    >
      {Children.map(children, child => {
        if (!show && child.props.list) return false;
        return React.cloneElement(child, { show, setShow, top, search, searchCallback });
      })}
    </div>
  );
};

export default Wrapper;
