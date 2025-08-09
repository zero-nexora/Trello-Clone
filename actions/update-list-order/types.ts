import type { ActionState } from "@/lib/create-safe-action";
import type { List } from "@prisma/client";

import { z } from "zod";
import { UpdateListOrder } from "./schema";

export type InputeType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputeType, List[]>;
