import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const RelativeTime = ({ date, classNameProps }) => {
  return (
    <span className={classNameProps}>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
  );
};

export default RelativeTime