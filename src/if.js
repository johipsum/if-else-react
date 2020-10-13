import { bool, node, oneOfType, arrayOf } from 'prop-types';
import Else from './else';

function getIndexOfElse(children) {
  if (!Array.isArray(children)) {
    return -1;
  }
  return children.findIndex(child => child && child.type === Else);
}

const If = ({ condition, children }) => {
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

If.defaultProps = {
  condition: false,
  children: []
}

export default If;
