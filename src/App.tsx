import React from 'react';
import logo from './logo.svg';
import './App.css';
import { truncate } from 'fs';
import { ClassComponent } from './components/ClassComponent'



interface User {
  firstName: string,
  lastName: string,
  img: string
}

// yarn start
function App() {
  const user: User = {
    firstName: 'lucky',
    lastName: 'chan',
    img: logo
  }

  const plst: any = ['python', 'cpp', 'java']

  function addlst(lst: Array<['any']>) {
    let final = ''
    for (let item of lst) {
      final += `<div>${item}</div>`
    }
    console.log('final --', final)
    return final
  }
  let finall: any = addlst(plst)


  const element = (
    <div className="App"><h1> Hello, {displayName(formatname(user)) && formatname(user)} </h1>
      <h3>{displayName(formatname(user)) && <ComponentA />}</h3>
      <img src={user.img} className="App-logo" alt="logo" width="300px" height="300px" />
      <div>Loop: {plst.map((item: string) => { return item + ',' })}</div>
      <div>Final: {finall}</div>
      <ClassComponent />
      {ComponentNewline('line 42')}
    </div>
  )

  // class can also be a type
  function formatname(user: User) {
    return `${user.firstName} ${user.lastName}`
  }
  function displayName(value: string) {
    if (value.length > 0) {
      return true
    }
    return false
  }
  function ComponentA() {
    return (<div>component A</div>)
  }
  // this dont work with loop 
  function ComponentNewline(item: string) {
    // stuff = obj
    let stuff = (<div>{item}</div>);
    let typeofstuff = typeof stuff;
    return typeofstuff;
  }

  return (element)
}

export default App;
