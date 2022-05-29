import { NextApiRequest, NextApiResponse } from "next";
import client from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      email: "hi",
      name: "hi",
    },
  });

  res.json({
    ok: true,
    data: "xx",
  });
}
