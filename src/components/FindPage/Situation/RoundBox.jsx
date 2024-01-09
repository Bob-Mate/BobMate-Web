import classNames from 'classnames';
import React from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';

const RoundBox = ({ title, isSelected, className }) => {
  return (
    <MaxWidthWrapper
      className={classNames(
        'rounded-2xl bg-gray-300 flex flex-col items-center text-center p-10 ',
        'hover:scale-105 hover:bg-slate-400 transition-transform ease-in-out duration-500 ',
        { 'scale-105 bg-gray-400': isSelected },
        className
      )}
    >
      <div className='text-xl font-bold lg:text-2xl max-w-prose'>{title}</div>
    </MaxWidthWrapper>
  );
};

export default RoundBox;