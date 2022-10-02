import type { Request } from "@remix-run/node";

export const readFormRequest = async (request: Request) => {
  const form = await request.formData();
  return {
    form,
    headers: request.headers,
  };
};
