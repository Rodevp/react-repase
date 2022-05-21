import { useState, useEffect} from 'react'

export function useCustomHook(params) {

    //datos -> object, array, string, numero, null, undefined, componente, arrays de objetos 

    //SIEMPRE VERIFICAR EL ESTADO ACTUAL PARA PODER CAMBIARLO

    //NO DEVOLVER EL setState
  
    const [message, setMessage] = useState('cero')
  
    //escribir use effects
    useEffect(() => {
        //hacer algo 
    },[])
  
    console.log(setMessage)
  
    if ( message === 'cero' && params >= 10 ) {
      setMessage('has llegado a la nota maxima')  
    }

    if ( params === 0 && message !== 'cero' ) setMessage('cero')
    
    
    return message
  
}