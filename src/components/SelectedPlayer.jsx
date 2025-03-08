import { MdDelete } from "react-icons/md";

const SelectedPlayer = ({ selectedPlayer, handleDeleteBtn }) => {
  const { name, country, role } = selectedPlayer;
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-md p-5 mb-5 shadow-md">
      <div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex gap-2 text-gray-500">
          <p>{country}</p>
          <p>{role}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeleteBtn(selectedPlayer)}
        className="cursor-pointer p-2"
      >
        <MdDelete className="text-3xl text-red-500"></MdDelete>
      </button>
    </div>
  );
};

export default SelectedPlayer;
