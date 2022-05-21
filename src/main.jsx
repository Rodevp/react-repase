import ReactDOM from 'react-dom/client'
import './index.css'


//HOOKS
import { useState, useEffect } from 'react'
import { useCustomHook } from './hook.js'

//HOOK DE ESTADO
// LOS HOOKS SON UN ENFOQUE MAS FUNCIONAL Y MÁS CERCANO A JS VANILLA

function Count(props) {

  const [value, setValue] = useState(0)

  return <div>
    <h1>{value}</h1>
    <button onClick={(e) => { setValue(value + 1) }}  >Increment</button>
  </div>

}

const Say = ( { name } ) => {

  useEffect(() => {

    //CUANDO SE MONTA
    window.localStorage.clear()

    return () => { //CUANDO SE DESMONTE EL COMPONENTE - (COMPONENTDIDUMMOUNT)
      console.log('adio -> ', name)
      console.log('me desmonté')
      window.localStorage.setItem('name', name)
    }

  })

  return <div>
    <p>Hola {name}</p>
  </div>


}


function HookEffect(props) {
  // CUANDO SE ACTUALIZAN LAS PROPS Y EL ESTADO DEL COMPONENTE SE RENDERIZA DE NUEVO
  const [count, setCount] = useState(0)
  const message = useCustomHook(count)

  useEffect(() => { //cuando se monta el componente componentDidMount
    
    console.log('me monté')
    const h1 = document.getElementById('hi')

  })

  return <div>
    <h1 id='hi' >Hola mundo</h1>
    <h1>{count}</h1>
    {  count >= 10 && <h2>{message}</h2> }
    {  count > 10 && <Say  name='JOJO'  />  }
    <button onClick={(e) => { setCount(count + 1) }}  >Increment</button>
    <button onClick={(e) => { setCount(count - 1) }}  >Dec rement</button>
  </div>
}


const root = document.getElementById('root')
const root_react = ReactDOM.createRoot(root)

root_react.render(<HookEffect />)
