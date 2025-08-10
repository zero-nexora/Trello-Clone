import type { ActionState } from "@/lib/create-safe-action";
import type { Card } from "@prisma/client";

import { z } from "zod";
import { UpdateCardorder } from "./schema";

export type InputeType = z.infer<typeof UpdateCardorder>;
export type ReturnType = ActionState<InputeType, Card[]>;
