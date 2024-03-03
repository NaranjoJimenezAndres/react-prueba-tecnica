import { useState, useEffect } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/';
// CUSTOM HOOKS
export function useCatImage ({fact}) {
    const [ imageUrl, setImageUrl ] = useState('');
    
    //efecto que se ejecuta cuando cambia el valor de fact
    useEffect(() => {
      if (!fact) return;
    
      const threeFirstWord = fact.split(' ', 3).join(' ');

      fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
        .then((response) => response.json())
        .then(data => {
            const { _id } = data
            const url = `/cat/${_id}/says/${threeFirstWord}`
            console.log(url)
            setImageUrl(url)
          })
        }, [fact])

        return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }; //se retorna la imagen
  }