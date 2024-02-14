import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Yapp(){
  return (
    <h1>Welcome  shukla </h1>
  )
}

/*const ReactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'

}*/
// yaha pr iska ek proper syntax hai ki kaise object tree ya kis format me enter krna hai data 

const anotherElement = (
  <a href="https://google.com"  target='_blank'>Visit Google</a>
)
const anotheruser="Chai Sutta bar"

const ReactElement=React.createElement(
  'a',
  {href:"https://youtube.com", target:'_blank'},
  'Click me to visit Google',
  anotheruser

)




ReactDOM.createRoot(document.getElementById('root')).
render(
    ReactElement
    // <App />
)
