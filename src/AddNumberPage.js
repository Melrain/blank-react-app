export const AddNumberPage = (props) => {
    return (
        <div>
            <h1>{props.time}</h1>
            <button onClick={props.getTime}>Get Time</button>
        </div>
    )
}