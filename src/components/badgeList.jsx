"use client";
import { useThemeContext } from "../context/list";
import { Badge } from "./badge";

export default function BadgeList() {
  const { list } = useThemeContext();

  return (
    <>
      <div className="flex space-x-2 my-2 max-w-xl mx-auto flex-wrap">
        {list.map((item) => (
          <div key={item.id}>
            <Badge>{item.name}</Badge>
          </div>
        ))}
      </div>
    </>
  );
}
