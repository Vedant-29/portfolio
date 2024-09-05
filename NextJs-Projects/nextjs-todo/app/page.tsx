import TodoListItem from "@/components/page-ui/TodoListIem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between h-14  border-b bg-muted/40 px-4 lg:h-[64px] lg:px-16">
        <div>NextJs Todo App</div>
        <Link href="/todo/newtodo"><Button>Add Todo</Button></Link>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-1 lg:gap-6 lg:p-1">
        <div className="flex-grow py-8 md:h-full md:overflow-y-auto px-16">
          <div className="w-full">
            <TodoListItem />
          </div>
        </div>
      </main>
    </div>
  );
}
