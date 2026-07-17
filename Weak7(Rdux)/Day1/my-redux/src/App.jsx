import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Increment from './Component/Increment'
import './test'
import Decrement from './Component/Decrement'
import ProductList from './Component/productList/ProductList'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Provider store={store}> */}

<ProductList/>
<Header/>
    <Increment/>
    <Decrement/>

    {/* </Provider> */}
    </>
  )
}

export default App
