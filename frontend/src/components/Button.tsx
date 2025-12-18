type ButtonProps = {
    type?: "button" | "submit" | "reset";
    text: string;
    handleClick?: () => void;
};

const LoginButton = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            className="p-1.5 bg-[#B94FDD] text-white hover:bg-[#ba4fddd1] rounded-md "
            onClick={props.handleClick}
        >
            {props.text}
        </button>
    );
};

export default LoginButton;
