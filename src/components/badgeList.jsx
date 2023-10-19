"use client";
import { useThemeContext } from "../context/list";
import { Badge } from "./badge";

export default function BadgeList() {
  const { list, setList } = useThemeContext();

  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <>
      <div className="flex space-x-2 my-2 max-w-xl mx-auto flex-wrap">
        {list.map((item) => (
          <Badge key={item.id} onClick={() => removeItem(item.id)}>
            {item.name}
          </Badge>
        ))}
      </div>
    </>
  );
}
