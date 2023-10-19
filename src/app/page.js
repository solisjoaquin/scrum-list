import CardList from "@/components/CardList";
import { Badge } from "@/components/badge";
import BadgeList from "@/components/badgeList";
import { Button } from "@/components/button";
import InputName from "@/components/inputName";

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

        {/* <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardList />
            <CardFooter>
              <Button>Copiar lista</Button>
            </CardFooter>
          </Card>
        </div> */}
      </div>
    </main>
  );
}
