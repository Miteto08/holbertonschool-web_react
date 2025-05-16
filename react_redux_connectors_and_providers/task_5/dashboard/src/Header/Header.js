import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';
import { connect } from 'react-redux';

export class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  static defaultProps = {
    user: null,
    logout: () => { }
  }

  render() {
    const { user, logout } = this.props;

    return (
      <header className={css(styles.header)}>
        <img className={css(styles.img)} src={logo} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user && (
          <section id="logoutSection">
            Welcome {user.email}
            <a href="#" onClick={(event) => {
              event.preventDefault();
              logout();
            }}>Logout</a>
          </section>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: '6px',
    borderBottom: '4px solid #cf4550',
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    height: '240px',
  },
  h1: {
    padding: '10px',
    fontSize: '40px',
    color: '#cf4550',
  },
});

const mapDispatchToProps = {
  logout
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
