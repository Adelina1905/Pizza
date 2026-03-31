// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };
export const Pizza = (props) => {
    return (
    <div className="pizza" onClick={() =>{
        console.log("h1");
    }}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <img src ={props.image} alt={props.name}/>
    </div>
    )
}
// export default Pizza;