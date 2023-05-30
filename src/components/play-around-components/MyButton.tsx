type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MyButton = (props:ButtonProps) => {
    return ( 
        <button onClick={(event) => props.handleClick(event)}>Click me</button>
     );
}
 
export default MyButton;