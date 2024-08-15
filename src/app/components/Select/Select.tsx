import React from 'react'

import styles from './Select.module.css'

const Select = () => {
  return (
    <select
      className={styles.selectContainer}
    >
        <option>EN</option>
        <option>ES</option>
    </select>
  )
}

export default Select