import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    req.status(401).end();
  }

  console.log(req.body);
  res.json({ ok: true });
}
