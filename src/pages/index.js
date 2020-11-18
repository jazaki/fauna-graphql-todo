import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Todo from '../components/todo'
import styles from './index.module.css'

function Index() {
  const [status, setStatus] = useState('loading...')
  const [todos, setTodos] = useState(null)
  return (
    <main>
      <h1 className={styles.heading}>
        JAMstack TODOs
      </h1>
      { todos ? (<p>Show something..</p>) : (
        <p className={styles.loading}>
          Loading Todos...
        </p>
      )}
    </main>
  )
}

export default Index
