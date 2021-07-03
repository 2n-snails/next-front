import { NextApiRequest, NextApiResponse } from "next";

interface API {
  req: NextApiRequest;
  res: NextApiResponse;
}
export default async ({ req, res }: API): Promise<void> => {
  if (req.method === "POST") {
    return res.end();
  }

  res.statusCode = 405;

  return res.end();
};
