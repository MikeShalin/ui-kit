import React from 'react';

type TProps = {
  className: string;
};

const Search = (props: TProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.3333 8.66667C14.3333 11.7963 11.7963 14.3333 8.66667 14.3333C5.53705 14.3333 3 11.7963 3 8.66667C3 5.53705 5.53705 3 8.66667 3C11.7963 3 14.3333 5.53705 14.3333 8.66667Z"
      stroke="white"
      strokeWidth="2"
    />
    <path d="M13.1109 13.1111L17.1356 17.1357" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default Search;
