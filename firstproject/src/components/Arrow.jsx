 export function Arrow(){
    function abc(){
        alert("click to call function");
    }
    const fruit=(name)=>{
        alert (name);
    }
    return( 
        <>
        <h1>This is an example of arrow function</h1>
        <button onClick={abc}>Click to call function</button>
         <button onClick={()=>fruit("First project")}> Arrow function</button>
         <button onClick={()=>fruit("click on apple")}> Apple</button>
         <button onClick={()=>fruit("click on banana")}> Banana</button>
        </>
    )
 }
 export default Arrow