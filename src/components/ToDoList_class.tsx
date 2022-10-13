import React from 'react'
import styles from '../css/ToDoList.module.scss'
import { ToDoItem_Class } from './ToDoItem_class'



interface Props {
    item_c: string
}
interface State {
    text: string,
    items_c: any,

}

export default class ToDoList_Class extends React.Component<Props, State> {
    //class React.Component<P:Props = {}, S:State = {}, SS = any>
    constructor(props: Props) {
        //needs props in here
        super(props);
        // super() is a must => to access extended library's class (React.Component)
        //this.state = interface State{...}
        // use when State value is defined within class
        this.state = {
            text: 'x',
            items_c: ['almond', 'oat', 'soy']
        }
    }

    addListItem_c() {
        this.setState({
            items_c: [...this.state.items_c, this.state.text]
        })
        // console.log(this.state.items_c[0]) //almond
    }


    updateText_c(valuee: string) {
        // this is every key down updated keys
        this.setState({
            text: valuee
        })
    }


    deleteText_c(index: number) {
        const newItems_c = this.state.items_c.filter((item: string, i: number) => {
            return index != i
        })
        this.setState({
            items_c: newItems_c
        })
    }

    render(): React.ReactNode {
        let element = (<div style={{ textAlign: 'center' }} className={styles.ToDoList_class}>
            To Do List - class
            <input value={this.state.text} onChange={(event) => { this.updateText_c(event.target.value) }} />
            {/*  onChange={function (event) { c_updatetext(event.target.value) }}  */}
            <div>this.props.item_c = {this.props.item_c}</div>
            <button onClick={() => { this.addListItem_c() }}>C_Adding</button>
            {/* index/key: have to be unique, within map i++ */}
            {/* [not yet] */}
            <div>{this.state.items_c.map((i: string, index: number) => { return <ToDoItem_Class i_index={index} i_item_c={i} i_onDelete={() => { this.deleteText_c(index) }} /> })}</div>
        </div>)
        return (element)
    }
}

