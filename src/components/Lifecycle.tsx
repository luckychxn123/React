import React from 'react'


export default class Lifecycle extends React.Component {
    constructor() {
        super({})
        // [print seq] 1
        console.log('instructor')
    }
    render(): React.ReactNode {
        return (<div>
            LifeCycle
        </div>)
    }
    // [print seq] 2
    public componentDidMount() {
        console.log('componentDidMount')
    }
    public componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    public ComponentWillUnmount() {
        console.log('ComponentWillUnmount')
    }
}

