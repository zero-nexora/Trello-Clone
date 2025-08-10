import type { ActionState } from "@/lib/create-safe-action";
import type { List } from "@prisma/client";

import { z } from "zod";
import { CopyList } from "./schema";

export type InputeType = z.infer<typeof CopyList>;
export type ReturnType = ActionState<InputeType, List>;
