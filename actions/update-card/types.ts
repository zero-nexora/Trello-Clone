import type { Card } from "@prisma/client";
import type { ActionState } from "@/lib/create-safe-action";

import { z } from "zod";
import { UpdateCard } from "./schema";

export type InputeType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputeType, Card>;
