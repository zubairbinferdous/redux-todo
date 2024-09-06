import { remove, toggle } from "@/redux/features/TodoSlice";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";

type data = {
  id: string;
  title: string;
  discription: string;
  isCompleted?: boolean;
};
const TodoCard = ({ title, discription, id, isCompleted }: data) => {
  const dispatch = useAppDispatch();

  const completed = () => {
    dispatch(toggle(id));
  };

  return (
    <div>
      <div className=" bg-slate-300 rounded-md flex justify-between items-center p-2">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          onClick={completed}
        />
        <div>
          {isCompleted ? (
            <p className="text-green-500">done</p>
          ) : (
            <p className="text-red-500">Pending</p>
          )}
        </div>

        <p className="font-semibold capitalize">{title} </p>
        <p className="capitalize"> {discription} </p>
        <div className=" space-x-4">
          <Button className="bg-red-900" onClick={() => dispatch(remove(id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Button>
          <Button className="capitalize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
