import { Link } from "react-router-dom";

function Hotbar() {
    return (
        <div className="bg-gray-700 text-white flex justify-center py-5">
            <ul className="flex justify-between gap-10 uppercase [&>*:hover]:text-gray-300 [&>*:hover]:cursor-pointer">
                <Link to='/'>Home</Link>
                <Link to='/personagens'>personagens</Link>
            </ul>
        </div>
    );
}

export default Hotbar;