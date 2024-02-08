import { useState, useEffect } from 'react'

const CAT_PREFI_IMAGE_URL = 'https://cataas.com/cat/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tengamos un fact nuevo
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { _id } = response
        const url = `${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFI_IMAGE_URL}${imageUrl}` }
} // { imageUrl: 'https://' }
