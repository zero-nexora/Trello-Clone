import { z } from "zod";

import type { Card } from "@prisma/client";

import { UpdateCard } from "./schema";
import type { ActionState } from "@/lib/create-safe-action";

export type InputeType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputeType, Card>;
