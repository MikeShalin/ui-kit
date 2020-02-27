import React, { BaseSyntheticEvent } from 'react';

import Search from './Search';
import s from './dropdown.module.scss';

class SearchInput extends React.Component<{ callback?: (e: BaseSyntheticEvent | null) => void }> {
  componentWillUnmount(): void | null {
    const { callback } = this.props;
    if (!callback) return null;
    callback(null);
  }

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label htmlFor="" className={s.searchBox} data-search="">
        <Search className={s.searchIcon} />
        <input type="text" className={s.searchInput} onChange={this.props.callback} />
      </label>
    );
  }
}

export default SearchInput;
