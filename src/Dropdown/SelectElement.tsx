import React, { useState, useEffect, BaseSyntheticEvent } from 'react';

import includes from 'lodash/includes';
import s from './dropdown.module.scss';

import { Wrapper, Option as OptionBox, OptionContainer, SelectedOption } from '.';

type TProps = {
  value: string,
  options: Array<string>,
  disabledOption?: Array<string>,
  onChange: Function,
  search?: boolean,
  dark?: boolean;
  top?: boolean;
}

const SelectElement = ({ value, options, onChange, disabledOption, search, dark, top }: TProps) => {
  const [selectedOption, handleChange] = useState(value);
  const [filterString, setFilterString] = useState('');
  useEffect(() => {
    // @ts-ignore
    handleChange(value);
  }, [value]);
  const filterOptions = options
    .filter((option: string) => option !== value)
    .filter((option: string) => option.toLowerCase().includes(filterString.toLowerCase()));

  return (
    <div className={s.wrapper}>
      <Wrapper
        searchCallback={(e: BaseSyntheticEvent | null) => setFilterString(e ? e.currentTarget.value : '')}
        search={search}
        dark={dark}
        top={top}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/*
         // @ts-ignore */}
        <SelectedOption className={s.toggler}>
          {selectedOption}
        </SelectedOption>
        {/*
         // @ts-ignore */}
        <OptionContainer list>
          {filterOptions.map((option: string) => {
            const disabled = includes(disabledOption, option);
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              // @ts-ignore
              <OptionBox
                key={option}
                // eslint-disable-next-line consistent-return
                onClick={() => {
                  if (disabled) return false;
                  handleChange(option);
                  onChange(option);
                }}
                disabled={disabled}
              >
                {option}
              </OptionBox>
            );
          })}
        </OptionContainer>
      </Wrapper>
    </div>
  );
};

export default SelectElement
