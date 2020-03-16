import React, { Component } from 'react';
import cn from 'classnames';

import s from './switch.module.scss';

type TProps = {
  onToggle?: Function;
  id?: string;
  dark?: boolean;
}

export class Switch extends Component<TProps, { checked: boolean }> {
  private readonly id: string;
  private readonly onToggle: Function | undefined;

  constructor(props: TProps) {
    super(props);
    this.state = {
      checked: false,
    };
    this.onToggle = props.onToggle;
    this.id = props.id || 'Z2^LF9T][qpl';
  }

  onChecked = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
    if (this.onToggle) {
      this.onToggle(!checked);
    }
  };

  render() {
    return (
      <div className={cn(s.wrapper, { [s.dark]: this.props.dark })}>
        <input
          id={this.id}
          type="checkbox"
          defaultChecked={this.state.checked}
          onChange={this.onChecked}
          className={s.input}
        />
        <label htmlFor={this.id} className={s.label} />
      </div>
    );
  }
}