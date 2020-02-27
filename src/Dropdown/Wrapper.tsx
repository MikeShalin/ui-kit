import React, {
  ReactElement,
  Children,
  BaseSyntheticEvent,
} from 'react'
import cn from 'classnames';
// @ts-ignore
import s from './dropdown.module.scss';

type TProps = {
  children: Array<ReactElement>;
  dark?: boolean;
  top?: boolean;
  search?: boolean;
  searchCallback?: (e: BaseSyntheticEvent | null) => void;
  className?: string;
};

class Wrapper extends React.Component<TProps>{
  private readonly wrapperRef: any;
  constructor(props: any) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  state = {
    show: false
  };
  setShow = (show: boolean) => this.setState({ show });
  handleClickOutside = ({ target }: any): void => {
    const clickOutside = () => this.setShow(false);
    const node = this.wrapperRef.current;
    // @ts-ignore
    if (node && !node.contains(target as Node) && clickOutside) {
      clickOutside();
    }
  };
  componentDidMount(): void {
    window.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillMount(): void {
    window.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { children, dark, top, search, searchCallback, className } = this.props;
    const { show } = this.state;
    return (
      <div
        ref={this.wrapperRef}
        className={cn(s.container, className, { [s.darkTheme]: dark }, { [s.listDirectionTop]: top })}
      >
        {Children.map(children, child => {
          if (!show && child.props.list) return false;
          return React.cloneElement(child, { show, setShow: this.setShow, top, search, searchCallback });
        })}
      </div>
    );
  }
}

export default Wrapper;
