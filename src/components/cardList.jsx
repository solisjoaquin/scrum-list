"use client";
import { useThemeContext } from "../context/list";
import { CardContent } from "./card";

export default function CardList() {
  const { list } = useThemeContext();

  return (
    <>
      <CardContent>
        {list.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </CardContent>
    </>
  );
}
