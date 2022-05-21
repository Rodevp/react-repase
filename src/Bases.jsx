import React, { usestate } from "react"

function say(gretting = 'hi') {
    alert(gretting)
  }
  
  //REACT API
  const button = React.createElement('button', {
    children: 'JOJO MIRA COMO APRENDEMOS REACT',
    className: 'btn',
    onClick: say,
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
  
    constructor(props) {
  
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
          {this.state.isShare && <ShareMessage />}
          {
            this.state.isShare ? <ShareMessage /> : <p>No Share</p>
          }
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
  function Form(props) {
  
    //[state, setState]
  
    /** 
     * constructor(props) {
     *  super(props)
     *  this.state = {
     *    name: ''
     *  }
     * }
     * 
     * 
    */
  
    const [name, setName] = useState('')
    const [fruit, setFruit] = useState('')
  
    const [formState, setFormState] = useState({
      name: '',
      fruit: ''
    })
  
    const handleFormInput = e => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value
      })
    }
  
  
    const handleInput = (e) => {
      let nameUser = e.target.value
      setName(nameUser)
    }
  
    const handleSelect = e => {
      let fruitSelect = e.target.value
      setFruit(fruitSelect)
    }
  
    const handleSubmit = e => {
      e.preventDefault()
      console.log('el nombre es -> ', name, 'y la fruita es -> ', fruit)
      console.log('estado form', formState)
    }
  
    return <form onSubmit={handleSubmit}>
      <h2>
        {name} - fruta - {fruit}
      </h2>
  
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" onChange={handleFormInput} name='name'/>
      </div>
      <div>
        <label htmlFor="">Select fruit</label>
        <select onChange={handleFormInput} name='fruit'>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
      <button type='submit' >Enviar</button>
    </form>
  
  }
  
  
  //Renderizando listas
  
  function RenderList(props) {
  
    const friends = [
      {
        "id": 0,
        "name": "Waters Lyons"
      },
      {
        "id": 1,
        "name": "Amie Vargas"
      },
      {
        "id": 2,
        "name": "Priscilla Johnson"
      }
    ]
  
    const printFriends = friends.map((friend) => (
      <p key={friend.id} >{friend.name}</p>
    ))
  
    console.log(printFriends)
  
    return <div>
      {
  
        friends.map((friend) => (
          <p
            key={friend.id}
            className={friend.id === 1 && 'green'}
          >
            {friend.name}
          </p>
        ))
  
        //INTERNAMENTE
  
        // friends.map((friend) => (
  
        //   React.createElement('p', {
        //     children: friend.name,
        //     key: friend.id
        //   })
  
        // ))
  
      }
    </div>
  
  }
  
  //


  root_react.render(welcome())

root_react.render(
  <WelcomeWithJSX name="JOJO">
    {/* <h3>JOJO APRENDIENDO REACT PARA UTILIZAR LOS MODELOS</h3> */}
    <Link
      url={urlGOOGLE}
      refe="Google"
    />
  </WelcomeWithJSX>
)


//Pensando en react

const listProducts = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function FilterableProductTable(props) {
  return <div>
      <SearchBar />
      <ProductTable />
  </div>
}

function SearchBar(props) {
  return <div>
    <input type="text" placeholder='search' />
  </div>
}


function ProductTable(props) {
  return <div>
    <ProductCategoryRow />
    <ProductRow />
  </div>
}


function ProductCategoryRow(props) {
  return <h3>

  </h3>
}


function ProductRow(props) {
  return <p></p>
}

