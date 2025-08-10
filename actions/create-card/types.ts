import type { Card } from "@prisma/client";
import type { ActionState } from "@/lib/create-safe-action";

import { CreateCard } from "./schema";
import { z } from "zod";

export type InputeType = z.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputeType, Card>;
