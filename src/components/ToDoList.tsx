import styles from '../css/ToDoList.module.scss'
import { useState } from 'react'
import { ToDoItem } from './ToDoItem'

export function ToDoList() {
    const name = 'lucky'; //variable
    //allows us to track state in a function component. first passed variable is lst
    const [itemx, setxItems] = useState<{ id: number, name: string }[]>([
        {
            id: 1,
            name: "a",
        },
        {
            id: 2,
            name: "b",
        },
        {
            id: 3,
            name: "c",
        }
    ])
    // create a state to connect with 'input' in element section
    const [textx, setTexts] = useState<string>('')

    function addItem() {
        //1.  let newItemx = itemx.push(textx) //itemx = 3 ['almond', 'oat', 'soy'] 
        // => prints lst.length only -> react push into array turns result into number
        //2. let newItemx = [...itemx, textx] //...arrayx - update previous array with new array. 
        // itemx still the previous list - unchanged
        // console.log('old itemx - ', itemx) // previous list - same
        let newItemx = [...itemx, {
            id: itemx[itemx.length - 1].id + 1,
            name: textx
        }]
        setxItems(newItemx)
        // console.log('new itemx - ', itemx) // previous list - same
    }

    function onDeletehere(passedindex: number) {
        let newItemx = itemx.filter((i: { id: number, name: string }, index: number) => {
            return index != passedindex
        })
        console.log('new item - ', newItemx)
        setxItems(newItemx)
    }


    // shows the xitem [adding] 0
    function ShowAllitemx(lst: { id: number, name: string }[]) {
        // [test] if without '(index: number) ... key = index', the whole thing wont work. 
        // [me] maybe becoz ToDoItem returned component needs itemm and count
        return (<div> To Do lists: {lst.map((itemhere: { id: number, name: string }, indexhere: number) =>
            // must set itemhere.id, or itemx['id'] or when delete item => item amount wil be passed from previous to next
            <ToDoItem key={itemhere.id} index={indexhere} itemm={itemhere.name} onDelete={onDeletehere} />)}</div>)
    }
    let element = (<div style={{ textAlign: 'center' }}>
        <div className={styles.ToDoList}><h2>I'm an h2</h2></div>
        <input value={textx} onChange={(event) => setTexts(event.target.value)} />
        <button onClick={function () { addItem() }}>Add</button>
        {ShowAllitemx(itemx)}
        {/* if component func need pass in params, use {Component(...)}. 
        //if component not need pass in params, use <Component/>*/}
    </div>)
    return element
}