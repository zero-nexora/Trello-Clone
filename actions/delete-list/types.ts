import type { ActionState } from "@/lib/create-safe-action";
import type { List } from "@prisma/client";

import { z } from "zod";
import { DeleteList } from "./schema";

export type InputeType = z.infer<typeof DeleteList>;
export type ReturnType = ActionState<InputeType, List>;
