import { Badge } from "@/components/badge";
import BadgeList from "@/components/badgeList";
import { Button } from "@/components/button";
import InputName from "@/components/inputName";
import ListContent from "@/components/listContent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
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
        <ListContent />
      </div>
    </main>
  );
}
