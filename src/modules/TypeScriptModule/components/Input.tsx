type InputProps = {
    value: string;
    type: string;
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
};

export default function Input(props: InputProps) {
    return (
        <input 
            className="appearance-none border border-transparent py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type={props?.type}
            value={props?.value}
            onChange={props?.handleChange}
            placeholder={props?.placeholder}
        />
    )
}
