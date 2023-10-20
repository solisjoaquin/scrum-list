"use client";
import { CardContent } from "./card";

export default function CardList({ randomList }) {
  return (
    <>
      <CardContent>
        {randomList.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </CardContent>
    </>
  );
}
