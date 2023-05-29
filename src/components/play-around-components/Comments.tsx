type commentsProps = {
    children:string
}

const Comments = (props:commentsProps) => {
    return (
        <div>
           {props.children}
        </div>
    );
}

export default Comments;