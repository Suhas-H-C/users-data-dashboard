import Account from "./Account";
import Comments from "./Comments";
import Greet from "./Greet";
import MyButton from "./MyButton";

const PlayAround = () => {
    return (
        <div>

            <Greet name='Suhas' />
            <Comments>Wondering something</Comments>
            <MyButton handleClick={(event) => {
                console.log('clicked', event);
            }} />
            <Account />
        </div>
    );
}

export default PlayAround;