import type { ActionState } from "@/lib/create-safe-action";

import { z } from "zod";
import { StripeRedirect } from "./schema";

export type InputeType = z.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputeType, string>;
