import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email" className={css(styles.form)}>Email:</label>
        <input type="email" id="email" name="email" className={css(styles.form, styles.border)} />
        <label htmlFor="password" className={css(styles.form)}>Password:</label>
        <input type="password" id="password" name="password" className={css(styles.form, styles.border)} />
        <button type="submit" className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '40px',
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
  },
  form: {
    fontWeight: 'bold',
    display: 'inline-block',
    marginRight: '10px',
  },
  border: {
    border: '1px solid #ccc',
  }
})

export default Login;
