import React, {
  createRef,
  ElementType,
  Component,
} from 'react';

import {
  TProps,
  TState,
  TRefButton,
  TRefRange,
  TOnMouseDown,
  TOnMouseUp,
  TOnMouseMove,
  TOnChange,
} from './types';
// todo как типизировать метод?
export const hocSlider = (WrappedComponent: ElementType) => {
  return class extends Component<TProps, TState> {
    private readonly range: TRefRange;
    private readonly button: TRefButton;
    private readonly handleMouseDown: TOnMouseDown;
    private readonly handleMouseUp: TOnMouseUp;
    private readonly handleMouseMove: TOnMouseMove;
    private readonly handleChange: TOnChange;

    constructor(props: TProps) {
      super(props);
      this.button = createRef();
      this.range = createRef();
      this.handleMouseDown = this.onMouseDown.bind(this);
      this.handleMouseUp = this.onMouseUp.bind(this);
      this.handleMouseMove = this.onMouseMove.bind(this);
      this.handleChange = this.onChange.bind(this);
      this.state = {
        value: props.value,
        isDrag: false,
        ref: null,
        //@ts-ignore
        minRange: props.minRange || 0,
        //@ts-ignore
        maxRange: props.maxRange || 100,
        count: props.value,
      };
    }

// todo сделать с range
    componentDidUpdate(_: Readonly<TProps>, prevState: Readonly<TState>) {
      const { isDrag } = this.state;
      if (isDrag && !prevState.isDrag) {
        document.addEventListener('mousemove', (e: any) => this.handleMouseMove(e));
        document.addEventListener('mouseup', this.handleMouseUp);
      } else if (!isDrag && prevState.isDrag) {
        document.removeEventListener('mousemove', (e: any) => this.handleMouseMove(e));
        document.removeEventListener('mouseup', this.handleMouseUp);
      }
    }

// @ts-ignore
    onMouseDown(e) {
      this.setState({
        isDrag: true,
        ref: e.pageX - this.button.current.offsetLeft,
      });
    };

    onMouseUp() {
      this.setState({ isDrag: false });
    };

// @ts-ignore
    onMouseMove(e) {
      if (!this.state.isDrag) return null;
      const minRange = this.range.current.offsetLeft;
      const maxRange = this.range.current.offsetWidth + minRange;
      const pageX = e.pageX;
      const value = pageX - Number(this.state.ref);
      if (this.state.isDrag && minRange <= pageX && maxRange >= pageX && value >= 0) {
        this.setState({ value }, () => {
          const num = value < this.state.minRange ? this.state.minRange : value;
          const step = this.range.current.offsetWidth / this.state.maxRange;
          const count = +(num / step).toFixed();
          this.setState({ count });
          //todo убрать варнинг, да и в целом убрать этот костыль снизу
          if (maxRange === pageX) {
            this.setState({ count: count + 1 });
          }
        });
      }
    };

// @ts-ignore
    onChange({ target: { value } }) {
      this.setState({ value });
    }

    render() {
      return <WrappedComponent
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        onChange={this.handleChange}
        button={this.button}
        range={this.range}
        min={String(this.state.minRange)}
        max={String(this.state.maxRange)}
        value={this.state.value > 0 ? this.state.value : 0}
        count={this.state.count}
        {...this.props}
        {...this.state}
      />;
    }
  };
};
