import React, { BaseSyntheticEvent } from 'react';

import includes from 'lodash/includes';
import s from './dropdown.module.scss';

import {
  Wrapper,
  Option as OptionBox,
  OptionContainer,
  SelectedOption,
} from '.';

type TProps = {
  value: string,
  options: Array<string>,
  disabledOption?: Array<string>,
  onChange: Function,
  search?: boolean,
  dark?: boolean;
  top?: boolean;
}

export class SimpleDropdown extends React.Component<TProps> {
  state = {
    selectedOption: this.props.value,
    filterString: '',
  };

  render() {
    const {
      value,
      options,
      disabledOption,
      onChange,
      search,
      dark,
      top,
    } = this.props;

    const { filterString, selectedOption } = this.state;
    const filterOptions = options
    .filter((option: string) => option !== value)
    .filter((option: string) => option.toLowerCase().includes(filterString.toLowerCase()));
    return (
      <div className={s.wrapper}>
        <Wrapper
          searchCallback={(e: BaseSyntheticEvent | null) => this.setState({ filterString: e ? e.currentTarget.value : '' })}
          search={search}
          dark={dark}
          top={top}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          {/*
           // @ts-ignore */}
          <SelectedOption className={s.clickElement}>
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
                    this.setState({ selectedOption: option });
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
  }
}
