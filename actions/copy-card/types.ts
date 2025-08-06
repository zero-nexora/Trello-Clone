import { z } from "zod";
import { CopyCard } from "./schema";
import type { ActionState } from "@/lib/create-safe-action";
import type { Card } from "@prisma/client";

export type InputeType = z.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputeType, Card>;
