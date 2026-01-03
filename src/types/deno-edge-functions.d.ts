// Ambient declarations so the frontend TS build doesn't fail on backend function files.
// These do not affect runtime.

declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

declare module "https://deno.land/std@0.190.0/http/server.ts" {
  export function serve(handler: (req: Request) => Response | Promise<Response>): void;
}

declare module "npm:resend@2.0.0" {
  export class Resend {
    constructor(apiKey?: string);
    emails: {
      send: (args: any) => Promise<any>;
    };
  }
}

declare module "npm:zod@3.22.4" {
  export const z: typeof import("zod").z;
  export type { ZodError, ZodSchema } from "zod";
}
