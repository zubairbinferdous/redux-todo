import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className=" h-screen w-full max-w-5xl bg-violet-700 mx-auto">
      {children}
    </div>
  );
};

export default Container;
