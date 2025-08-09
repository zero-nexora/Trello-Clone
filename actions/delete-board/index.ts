"use server";

import type { InputeType, ReturnType } from "./types";

import { auth } from "@clerk/nextjs";
import { checkSubscription } from "@/lib/subscription";
import { db } from "@/lib/db";
import { decreaseAvailableCount } from "@/lib/org-limit";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSafeAction } from "@/lib/create-safe-action";
import { DeleteBoard } from "./schema";

const handler = async (data: InputeType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) return { error: "Unauthorized" };

  const isPro = await checkSubscription();

  const { id } = data;

  let board;

  try {
    board = await db.board.delete({
      where: { id, orgId },
    });

    if (!isPro) {
      await decreaseAvailableCount();
    }

    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.DELETE,
    });
  } catch (error) {
    return { error: "Failed to delete." };
  }

  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
};

export const deleteBoard = createSafeAction(DeleteBoard, handler);
