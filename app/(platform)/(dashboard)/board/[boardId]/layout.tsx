import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { notFound, redirect } from "next/navigation";
import { BoardNavbar } from "./_components/board-navbar";

interface BoardIdLayoutProps {
  children: React.ReactNode;
  params: { boardId: string };
}

const BoardIdLayout = async ({ children, params }: BoardIdLayoutProps) => {
  const { orgId } = await auth();
  if (!orgId) return redirect("/select-org");

  const board = await db.board.findUnique({
    where: { id: params.boardId, orgId },
  });

  if (!board) notFound();

  return (
    <div
      className="relative h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/20" />
      <main className="h-full">
        <div className="relative h-full pt-28">{children}</div>
      </main>
    </div>
  );
};

export default BoardIdLayout;
