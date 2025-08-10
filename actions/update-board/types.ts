import type { ActionState } from "@/lib/create-safe-action";
import type { Board } from "@prisma/client";

import { z } from "zod";
import { UpdateBoard } from "./schema";

export type InputeType = z.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputeType, Board>;
