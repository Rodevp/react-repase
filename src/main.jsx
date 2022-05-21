import React from 'react'
import ReactDOM from 'react-dom/client'
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


//Estados

class ShareScreen extends React.Component {

  constructor (props) {
    
    super(props)
    
    this.state = {
      isShare: false
    }

    this.closeScreen = this.closeScreen.bind(this)
    this.share = this.share.bind(this)

  }

  closeScreen(e) {
    this.setState({
      isShare: false
    })
  }

  share(e) {
    this.setState({
      isShare: true
    })
  }

  componentDidMount() {
    console.log('cuando me monté -> componente padre')
  }


  render() {

    if (this.state.isShare) {
      console.log('share')
    } else {
      console.log('screen not share')
    }

    return (
      <div>
        {  this.state.isShare && <ShareMessage />   }
        <button onClick={this.share}>Compartir</button>
        <button onClick={this.closeScreen}>Dejar de compartir</button>
      </div>
    )
  }

}

class ShareMessage extends React.Component {
  
  constructor(props) {
    super(props)
  }

  //cuando el html se crea (monta) se ejecuta 
  componentDidMount() {
    console.log('creee dom o me monté -> componente hijo')
  }

  //cuando el html desaparece (desmonta) se ejecuta
  componentWillUnmount() {
    console.log('desapeci del dom o desmonté -> componente hijo')
  }

  render() {
    return (
      <p>
        SHARE...
      </p>
    )
  }


}

//COMPONENTES BASADOS EN FUNCIONES


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


root_react.render(<ShareScreen />)


