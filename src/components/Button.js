import '../App.css';

const Button = ({ label }) => {
    const click = () => {
        console.log('click')
    }

    return (
        <>
            <button className='btn-primary' onClick={click}>
                {label}
            </button>
        </>
    )
}


export default Button