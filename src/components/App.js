import React, {useState} from 'react'
import ResourceList from './ResourceList'
// using a class based component
/*
class App extends React.Component{
    state = {resource:'posts'}
    render(){
        return (
            <div>
                <div>
                    <button onClick={()=>this.setState({resource:'posts'})}>Posts</button>
                    <button onClick={()=>this.setState({resource:'todos'})}>Todos</button>
                </div>
                {this.state.resource}
            </div>
        )
    }
}
*/



//functional component
const App = () => {

    //array destructering
    // first element is the currentValue
    // second element is the function we call to update state

    // in useState we set the initialValue of state
    const [resource,setResource] =  useState('posts')


    return (
        <div>
            <div>
                <button onClick={()=>setResource('posts')}>Posts</button>
                <button onClick={()=>setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
}

export default App