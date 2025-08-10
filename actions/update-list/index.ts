"use server";

import type { InputeType, ReturnType } from "./types";

import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateList } from "./schema";

const handler = async (data: InputeType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) return { error: "Unauthorized" };

  const { id, title, boardId } = data;

  let list;

  try {
    list = await db.list.update({
      where: { id, boardId, board: { orgId } },
      data: { title },
    });
    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return { error: "Failed to update." };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const updateList = createSafeAction(UpdateList, handler);
