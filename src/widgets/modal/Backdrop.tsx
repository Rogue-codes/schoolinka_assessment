interface BackDropsProps {
  setShowWelcomeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Backdrop({ setShowWelcomeModal }: BackDropsProps) {
  return (
    <div className="w-full fixed left-0 top-0 h-screen backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="w-[90%] lg:w-[60%] bg-white p-8 rounded-xl shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,_rgba(0,0,0,0.3)_0px_8px_16px_-8px]">
        <h1 className="text-xl lg:text-3xl">
          Hello <strong className="text-[#3F5BF6]">Hiring Manager,</strong>
        </h1>
        <p className="font-medium py-2 text-md lg:text-xl">
          Here's my finalized solution for the schoolinka assement. Below are
          the list of functionalities implemented on the app:
        </p>
        <ul>
          <li className="text-sm lg:text-md py-2">
            Users can <strong className="text-[#3F5BF6]">add a todo</strong>
          </li>
          <li className="text-md py-2">
            Users can <strong className="text-[#3F5BF6]">edit a todo</strong>
          </li>
          <li className="text-sm lg:text-md py-2">
            Users can <strong className="text-[#3F5BF6]"> delete a todo</strong>
          </li>
          <li className="text-sm lg:text-md py-2">
            Users can{" "}
            <strong className="text-[#3F5BF6]">
              {" "}
              see all todos <em>(For each date they select.)</em>
            </strong>
          </li>
          <li className="text-sm lg:text-md py-2">
            All todos are{" "}
            <strong className="text-[#3F5BF6]">
              paginated{" "}
              <em>(Pagination starts when the user adds up to 5 todos)</em>
            </strong>
          </li>
        </ul>

        <div className="w-full flex justify-start items-center mt-5">
          <button
            className="text-md py-3 px-12 rounded-lg bg-[#3F5BF6] text-white hover:scale-110 transition-all"
            onClick={() => setShowWelcomeModal(false)}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
