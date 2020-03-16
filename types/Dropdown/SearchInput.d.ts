import React, { BaseSyntheticEvent } from 'react';
declare class SearchInput extends React.Component<{
    callback?: (e: BaseSyntheticEvent | null) => void;
}> {
    componentWillUnmount(): void | null;
    render(): JSX.Element;
}
export default SearchInput;
