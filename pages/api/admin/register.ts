import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

//Utility function to parse form dat using Formidable
const getData = async (
  req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = { multiples:false};
  options.maxFieldsSize = 4000 * 1024 * 1024; // Set file maximum to 4Gb
  const form = formidable(options);

  return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
    (resolve, reject) => {
      form.parse(req, (err, fields, files) => {

        if (err) {
          reject(err);
        } else {
          // Access the fields under the "product" key and parse as JSON
          const productFields = JSON.parse(fields.product[0])
           // Read file content asynchronously
           const fileContent = await fs.readFile(fields.picture.path)
          resolve({ fields: productFields, files });
        }
      });
    }
  );
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST")
    return res.status(405).json({message: "Method not allowed"})
  try {
    //parse form data using the utility function
    const{fields, files}= await getData(req)

    //access the uploaded file from the parsed files
    const myFiles= files.picture as formidable.File[]
    const file = myFiles[0]
    //convert the file content to buffer for database storage
    const fileContent = await new Promise<Buffer>((resolve, reject)=>{
      const chunks: Buffer[]=[]
      file.
    })
  } catch (error) {
    
  }

}
