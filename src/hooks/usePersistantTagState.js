import { useState, useEffect } from 'react'

export default function usePersistantTagState({ tagName }) {
  const [isSelected, setIsSelected] = useState(
    JSON.parse(localStorage.getItem(tagName) || false)
  )

  useEffect(() => {
    localStorage.setItem(tagName, isSelected)
    console.log('customHook: ' + tagName + ' isSelected: ' + isSelected)
  }, [isSelected, tagName])

  return [isSelected, setIsSelected]
}
