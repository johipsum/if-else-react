import React from 'react';
import { bool, node, oneOfType, arrayOf } from 'prop-types';
import Else from './else';

const If = ({ condition, children }) => {
  if (!Array.isArray(children)) {
    return condition ? children : null;
  }

  const indexOfElse = getIndexOfElse(children);

  if (indexOfElse === -1) {
    return condition ? children : null;
  }

  if (condition) {
    return children.slice(0, indexOfElse);
  }

  return children.slice(indexOfElse);
};

If.propTypes = {
  condition: bool,
  children: oneOfType([arrayOf(node), node])
};

export default If;

function getIndexOfElse(children) {
  if (!Array.isArray(children)) {
    throw new Error('getIndexOfElse requires an Array as parameter.');
  }
  return children.findIndex(child => child && child.type === Else);
}
