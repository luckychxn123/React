import { useState } from 'react'
import styles from '../css/ToDoList.module.scss'

type Props = {
    itemm: string
    index: number
    onDelete: (index: number) => void,
}
// [to do]: fix the bug by putting  [count, setCount] = useState<number>(0)
// into ToDoList.tsx as parent element is being deleted but not child
export function ToDoItem(props: Props) {
    let [count, setCount] = useState<number>(0)

    function addCounthere() {
        setCount(count + 1);
    }
    // console.log('props = ', props)
    // props: props =  {index: 2 (e.g. the current index in ToDoList), itemm: 'props.item' (e.g. oat/soy/almond), onDelete: ƒunction}
    return (<div style={{ textAlign: 'center' }}>
        <button onClick={() => { addCounthere() }}>Adding</button>
        <span className={styles.label}>{props.itemm}</span>
        <span className={styles.count}>{count}</span>
        <button onClick={function () { props.onDelete(props.index) }}>Delete</button>
    </div>)
}


//[problem] big 3.0: when delete props.itemm, the count of it passed down to the next
// becoz => 

