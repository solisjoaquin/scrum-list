import CardList from "@/components/CardList";
import { Badge } from "@/components/badge";
import BadgeList from "@/components/badgeList";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from "@/components/card";
import InputName from "@/components/inputName";

const data = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
  {
    id: 3,
    name: "John Smith",
  },
  {
    id: 4,
    name: "Jane Smith",
  },
  {
    id: 5,
    name: "John Doe2",
  },
  {
    id: 6,
    name: "Jane Doe2",
  },
  {
    id: 7,
    name: "John Smith2",
  },
  {
    id: 8,
    name: "Jane Smith2",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            ScrumDaily
          </span>
        </h1>
        <p className="text-center text-gray-500">
          Make a random list for your daily meetings with your team.
        </p>
        <InputName />

        <BadgeList />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-center flex-col text-sm lg:flex">
        <div className="py-6">
          <Button variant="default">Randomize list</Button>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            {/* <CardContent>
              {data.map((item) => (
                <div key={item.id}>
                  <p>{item.name}</p>
                </div>
              ))}
            </CardContent> */}
            <CardList />
            <CardFooter>
              <Button>Copiar lista</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <footer className="flex items-center justify-center w-full border-t pt-6">
        <p
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=tailwindcss&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2023
        </p>
      </footer>
    </main>
  );
}
