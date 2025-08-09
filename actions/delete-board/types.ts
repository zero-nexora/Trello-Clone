import { z } from "zod";
import { DeleteBoard } from "./schema";
import type { ActionState } from "@/lib/create-safe-action";
import type { Board } from "@prisma/client";

export type InputeType = z.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputeType, Board>;
