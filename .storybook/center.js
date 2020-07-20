import React from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px',
}
const Center = ({ children }) => <div style={styles}>{children}</div>

export default Center
