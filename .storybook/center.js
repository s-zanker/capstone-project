import React from 'react'

const styles = {
  display: 'grid',
  gap: '30px',
  justifyContent: 'center',
  padding: '100px',
}
const Center = ({ children }) => <div style={styles}>{children}</div>

export default Center
