import fs from "fs";
import PDFDocument from "pdfkit";
import { fromMachId } from "../services/account.service";

// Example: get "documentNumber" from "Account service" by machId
const machId = "123asd-123asd-asdasd";
const { documentNumber } = fromMachId(machId);

export const createEncryptedPDF = (outputName: string) => {
  const pdfDoc = new PDFDocument({
    //Set the password from last 4 digits from documentNumber without verification digit
    userPassword: documentNumber.substring(
      documentNumber.length - 5,
      documentNumber.length - 1
    ),
    ownerPassword: "RANDOM_STRONG_PASSWORD",
    permissions: { printing: "highResolution" },
  });

  pdfDoc.pipe(fs.createWriteStream(`./${outputName}.pdf`)); // write to PDF
  pdfDoc.fontSize(32);
  pdfDoc.text("PDF Test with pdfkit", 10, 10);
  pdfDoc.end();

  //pdfDoc.save(`./${outputName}.pdf`);
};
