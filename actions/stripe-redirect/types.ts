import { z } from "zod";
import { StripeRedirect } from "./schema";
import type { ActionState } from "@/lib/create-safe-action";

export type InputeType = z.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputeType, string>;
