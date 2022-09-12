import { createEncryptedPDF as createPDFWithjsPDF } from "./helpers/pdf_with_jsPDF";
import { createEncryptedPDF as createPDFWithpdfkit } from "./helpers/pdf_with_pdfkit";

createPDFWithjsPDF("jsPDF");
createPDFWithpdfkit("pdfkit");
