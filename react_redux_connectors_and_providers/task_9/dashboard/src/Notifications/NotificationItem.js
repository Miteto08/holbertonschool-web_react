import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types'

class NotificationItem extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  static defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => {},
    id: null
  };

  handleClick = () => {
    const { markAsRead, id } = this.props
    console.log("ceci est la key", id )
    if (markAsRead && id !== null) {
      markAsRead(id)
    }
  };

  render() {
    const { type, value, html } = this.props
    const style = type === 'urgent' ? styles.urgent : styles.default;

    if (html) {
      return (
        <li
          className={css(style, styles.media)}
          data-notification-type={type}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={html}
        ></li>
      )
    } else {
      return (
        <li  className={css(style, styles.media)} data-notification-type={type} onClick={this.handleClick}>
          {value}
        </li>
      )
    }
  }
}

const styles = StyleSheet.create({
  media: {
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  default: {
    color: '#180C5F',
  },
  urgent: {
    color: 'red',
  }
});

export default NotificationItem
