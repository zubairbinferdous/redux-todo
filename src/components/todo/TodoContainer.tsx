import AddtodoArea from "./AddtodoArea";
import TodoCard from "./TodoCard";
import Todofilter from "./Todofilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex justify-around py-10 ">
          <AddtodoArea></AddtodoArea>
          <Todofilter></Todofilter>
        </div>
        <div className=" bg-red-300 w-full h-full rounded-xl p-10 space-y-5">
          <div className=" font-bold bg-slate-500 flex justify-center items-center rounded p-3">
            <p>there is no task pending </p>
          </div>

          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
