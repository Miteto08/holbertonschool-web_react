import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';
import { connect } from 'react-redux';

export function Footer({ user }) {
  return (
    <div>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(isIndex)}
      </p>
      {user &&
        <p>
          <a href="#">Contact us</a>
        </p>
      }
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object
}

Footer.defaultProps = {
  user: null
}

function mapStateToProps(state) {
  return {
    user: state.get('user'),
  };
}

export default connect(mapStateToProps)(Footer);
