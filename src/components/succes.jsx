import "./navbar.css"
export default function Toaster(statement){

    let state={}
    if(statement===true){
        state={class:"task-soon", message:"Din task blev sparad"}}
    else{
        state={class:"task-urgent", message:"Något blev fel"}
    }
return (
    <div className={`toaster ${state.class}` }><span>{state.message}</span></div>
)
}