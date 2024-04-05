import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const result = await fetch('localhost:8080/api/product/page', {
      method: "GET",
      headers:{ key: "Access-Control-Allow-Origin", value: "*" },
      
    });
    const resultJson = await result.json();
    res.status(200).json(resultJson);

  } else {
    // Not allowed methods
    res.status(400).json({
      message: "Method not allowed.",
    });
  }
}
