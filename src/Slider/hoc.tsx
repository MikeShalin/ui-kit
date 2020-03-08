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
} from './types'
// todo как типизировать метод?
export const hocSlider = (WrappedComponent: ElementType) => {
  return class extends Component<TProps, TState> {
    private readonly range: TRefRange;
    private readonly button: TRefButton;
    private readonly handleMouseDown: TOnMouseDown;
    private readonly handleMouseUp: TOnMouseUp;
    private readonly handleMouseMove: TOnMouseMove;
    private readonly handleChange: TOnChange;
    private readonly step: number;

    constructor(props: TProps) {
      super(props);
      this.button = createRef();
      this.range = createRef();
      this.handleMouseDown = this.onMouseDown.bind(this);
      this.handleMouseUp = this.onMouseUp.bind(this);
      this.handleMouseMove = this.onMouseMove.bind(this);
      this.handleChange = this.onChange.bind(this);
      this.step = props.step || 1;
      this.state = {
        value: props.value,
        isDrag: false,
        ref: null,
      };
    }

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

    get minRange() {

      // console.log(this.range.current && this.range.current.offsetLeft)
      return this.range.current ? this.range.current.offsetLeft : 0;
    }
    get maxRange() {
      // console.log(this.range.current && this.range.current.offsetWidth)
      return this.range.current ? this.range.current.offsetWidth + this.minRange : 0;
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
      if (this.state.isDrag && minRange < e.pageX && maxRange > e.pageX) {
        this.setState({ value: e.pageX - Number(this.state.ref) });
      }
    };
// @ts-ignore
    onChange({ target: { value }}) {
      this.setState({ value });
    }

    render() {
      console.log([this.minRange, this.maxRange])
      return <WrappedComponent
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
        onChange={this.handleChange}
        button={this.button}
        range={this.range}
        step={this.step}
        min={this.minRange}
        max={this.maxRange}
        {...this.props}
        {...this.state}
      />;
    }
  };
};
