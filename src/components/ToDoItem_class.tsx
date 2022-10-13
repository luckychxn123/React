import React from 'react'
import styles from '../css/ToDoList.module.scss'

interface Props {
    i_item_c: string,
    i_index: number
    i_onDelete: (index: number) => void
}

interface State {
    i_count: number
}

export class ToDoItem_Class extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { i_count: 0 }
    }
    c_addCount = () => {
        // console.log(this.state.i_count) [problem] cannot call out this.state in func unless in element -> or it will be null
        // [problem] 2.0 [imp] cannot pass in this.setState func with + with param(or any events that possible loop without newupdate) on HTML tag <div>
        this.setState({
            i_count: this.state.i_count + 1
        })
        // [problem solved] Adding shows this.state.i_count here undefined. solution: make c_addCount() as a func with ()
    }

    render(): React.ReactNode {
        return (<div style={{ textAlign: 'center' }} className={styles.ToDoItem_class}>
            <button onClick={() => { this.c_addCount() }}>Adding</button>
            <span className={styles.label}>{this.props.i_item_c}</span>
            <span className={styles.count}>{this.state.i_count}</span>
            <button onClick={() => { this.props.i_onDelete(this.props.i_index) }}>Delete</button>
        </div>)
    }
}