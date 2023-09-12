function Card(props){
    return (
        <>
            <img src={props.src} alt={props.name}></img>
            <div className="title">{props.name}</div>
            <div className="description">{props.info}</div>
        </>
    )
}
export { Card }