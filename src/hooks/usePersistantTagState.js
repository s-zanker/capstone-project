import { useState, useEffect } from 'react'

export default function usePersistantTagState({ tagName, initalState }) {
  const [isSelected, setIsSelected] = useState(
    localStorage.getItem(tagName) || initalState
  )

  useEffect(() => {
    localStorage.setItem(tagName, isSelected)
    console.log(
      'usePersistantTagState: ' + tagName + ' isSelected: ' + isSelected
    )
  }, [isSelected, tagName])

  return [isSelected, setIsSelected]
}
