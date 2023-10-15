import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="rgb(227, 77, 51)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
