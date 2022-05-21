import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


function say(gretting = 'hi') {
  alert(gretting)
}

//REACT API
const button = React.createElement('button', {
  children: 'JOJO MIRA COMO APRENDEMOS REACT',
  className: 'btn',
  onClick: say
})

//JS NORMAL
const root = document.getElementById('other_root')
const element_with_js_vanilla = document.createElement('button')
element_with_js_vanilla.textContent = 'js vanilla'
element_with_js_vanilla.addEventListener('click', e => {
  say('saludando desde js vanilla')
})


//JSX
const name = 'pedro'
const urlGOOGLE = "https://www.google.com"
const jsxElement = <h1>

  <a href={urlGOOGLE}>Google</a> 
  <br />
  {name}
  
</h1>


function welcome(props = {}) {
  
  return React.createElement('h1', {
    
    children: React.createElement('p', {
      children: 'Hola mundo'
    }),  

  })

}


function WelcomeWithJSX(props) {
  return <h1>
    <p>Hola {props.name} con jsx </p>
    {props.children}
  </h1>
}

function Link({ url, refe }) {
  return <a href={url}>{refe}</a>
}

//
const root_react = ReactDOM.createRoot(root)

root_react.render( welcome() )

root_react.render(
  <WelcomeWithJSX  name="JOJO">
     {/* <h3>JOJO APRENDIENDO REACT PARA UTILIZAR LOS MODELOS</h3> */}
     <Link
        url={urlGOOGLE}
        refe="Google"
     />
  </WelcomeWithJSX> 
)


