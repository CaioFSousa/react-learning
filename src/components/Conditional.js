const Conditional = (props) => {
    return (
        <div>
        {props.x > 5 && <p>X é maior que 5</p>}
        {props.x > 5 ? <p>X é maior que 5</p> : <p>X é menor que 5</p>}
        </div>
    )
}

export default Conditional