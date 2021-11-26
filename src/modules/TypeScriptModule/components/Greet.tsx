type GreetProps = {
    name: string
};

export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28 text-white">{props?.name}</h2>
        </div>
    )
}
