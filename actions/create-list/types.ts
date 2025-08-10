import type { List } from "@prisma/client";
import type { ActionState } from "@/lib/create-safe-action";

import { CreateList } from "./schema";
import { z } from "zod";

export type InputeType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputeType, List>;
