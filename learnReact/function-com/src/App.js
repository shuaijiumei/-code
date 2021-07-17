import React from "react";
import ReactDOM from 'react-dom'
import Demo1 from "./components/Demo1";
import { nanoid } from 'nanoid'

export default function App() {
    function unload() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    const [num, setNum] = React.useState(0)

    // eslint-disable-next-line
    const [per, setPer] = React.useState(
        [
            { age: 20, name: 'tby' },
            { age: 21, name: 'hgy' }
        ]
    )

    const listItem = per.map((list) =>
        <li key = { nanoid() } > { list.age } + { list.name } < /li>
    )

    React.useEffect(() => {
        let timer = setInterval(() => {
            setNum(val => val + 1)
        }, 1000)
        console.log('comDidMounted')

        return () => {
            console.log('comWillUnMounted')
            clearInterval(timer)
        }
    }, [])


    return ( <div >
        我是APP组件 <Demo1 /> { num } { /* some question 完全理解，存储一个数组 */ } <button onClick = { unload } > 点击卸载 </button> <ul> { listItem } </ul> </div>
    )
}