import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

//Utility function to parse form dat using Formidable
const getData = async (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
    }
  } catch (error) {}
}
