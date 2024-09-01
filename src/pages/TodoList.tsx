import TodoContainer from "@/components/todo/TodoContainer";

const TodoList = () => {
  return (
    <div>
      <h1 className="flex justify-center p-5 font-bold text-2xl text-cyan-300 uppercase ">
        this is todo area
      </h1>
      <TodoContainer></TodoContainer>
    </div>
  );
};

export default TodoList;
