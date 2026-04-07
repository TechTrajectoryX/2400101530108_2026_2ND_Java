function StateEX(){
    let data ="Demo";
    function update()
    {
        data ="Exapmle"
        alert(data);
    }
    return(
        <>
        <h1>State in React</h1>
        <h1>{data}</h1>
        <button onClick={update}>Change value</button>
        </>
    
    )
}
export default StateEX
