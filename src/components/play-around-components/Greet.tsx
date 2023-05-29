import Comments from "./Comments";

type GreetProps = {
    name: string;
    age?: number;
}


const Greet = (props: GreetProps) => {
    return (
        <div>
            <h5>Hello {props.name} {props.age}</h5>
            <Comments children='Wondering if I could find more curious things around react'/>
        </div>
    );
}

export default Greet;