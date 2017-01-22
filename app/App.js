import React from 'react';
import styles from './main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.app}>
        Hello world!
      </div>
    );
  }
}
