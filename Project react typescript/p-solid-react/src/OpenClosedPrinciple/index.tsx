import { FC, ReactElement } from "react";

type PropsTitle = {
  title: string;
  children: ReactElement | ReactElement[];
};

export const Title: FC<PropsTitle> = ({ title, children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      { children }
    </div>
  );
};
