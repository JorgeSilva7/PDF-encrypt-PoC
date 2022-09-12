import { jsPDF, EncryptionOptions } from "jspdf";
import { fromMachId } from "../services/account.service";

// Example: get "documentNumber" from "Account service" by machId
const machId = "123asd-123asd-asdasd";
const { documentNumber } = fromMachId(machId);

const encryptionOptions: EncryptionOptions = {
  //Set the password from last 4 digits from documentNumber without verification digit
  userPassword: documentNumber.substring(
    documentNumber.length - 5,
    documentNumber.length - 1
  ),
  ownerPassword: "RANDOM_STRONG_PASSWORD",
  userPermissions: ["print"],
};

export const createEncryptedPDF = (outputName: string) => {
  const pdfDoc = new jsPDF({ encryption: encryptionOptions });

  pdfDoc.setFontSize(32);
  pdfDoc.text("PDF Test with jspdf", 10, 10);
  pdfDoc.save(`./${outputName}.pdf`);
};
