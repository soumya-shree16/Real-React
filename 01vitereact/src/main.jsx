import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

//const ReactElement = {
  //  type:'a',
  //  props:{
  //      href:'https://google.com',
  //      target:'_blank'
   // },
   // children:'click me'
//}

const anotherElement=(
    <a href="https://google.com" target='_blank'>visit Google</a>
)
const soumyashree="love only trilochan"

const reactElement=React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me',
    soumyashree
)
createRoot(document.getElementById('root')).render(
  
   reactElement
  
)
