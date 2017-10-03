import styles from './styles.scss'
import React, { Component } from 'react'
import Button from 'material-ui/Button';


export default class App extends Component {
  render () {
    return (
      <div>
        <Button color="primary" className={styles.myButton}>Primary</Button>
      </div>
    )
  }
}