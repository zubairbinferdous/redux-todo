import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/TodoSlice";
import { useAppDispatch } from "@/redux/hook";
import { Dialog, DialogClose } from "@radix-ui/react-dialog";
import { FormEvent, useState } from "react";

export function AddtodoArea() {
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useAppDispatch();
  const code = Math.random().toString(36).substring(2, 7);
  const data = {
    id: code,
    title: task,
    description: des,
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(data));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-pink-600 capitalize">Add todo </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Add Task </DialogTitle>
            <DialogDescription className="capitalize text-sm">
              add your task want to finish
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task Title
              </Label>
              <Input
                id="task"
                className="col-span-3"
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                onChange={(e) => setDes(e.target.value)}
              />
            </div>
          </div>

          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddtodoArea;
