const WrapperWithState =(props)=>{
    const state="abc"
    return(<div>
        {/* this state will be accessible to all children
        components wrapped with this component*/}
        {props.children(state)}
    </div>)
}
const stateCunsumingChild=()=>{
    return(<WrapperWithState>
        {(state)=>{
            // using the state of the wrapper
            // component for showing it on ui
            return(<h1>{state}</h1>)
        }}
    </WrapperWithState>)
}