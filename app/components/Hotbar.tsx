function Hotbar() {
    return (
        <div className="bg-gray-700 text-white flex justify-center py-5">
            <ul className="flex justify-between gap-10 uppercase [&>*:hover]:text-gray-300 [&>*:hover]:cursor-pointer">
                <li>Home</li>
                <li>Personagens</li>
                <li>Locais</li>
            </ul>
        </div>
    );
}

export default Hotbar;