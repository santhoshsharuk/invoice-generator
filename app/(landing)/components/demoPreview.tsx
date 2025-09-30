import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "z3connect",
    companyAddress: "18/17, Pattariyar W St, Eathancadu, Elankadai, Kottar,",
    companyCity: "Nagercoil",
    companyState: "TamilNadu",
    companyCountry: "India",
    companyLogo: "/invoice-generator/logo.png",
    companyTaxId: "",
    companyZip: "629002",
    email: "z3connect.z3connect@gmail.com",
  },
  yourDetails: {
    yourName: "Santhosh sharuk",
    yourAddress: "Ramanputhur",
    yourCity: "Nagercoil",
    yourState: "TamilNadu",
    yourCountry: "India",
    yourLogo: "/invoice-generator/santhoshlogo.jpg",
    yourEmail: "santhoshsharuk16@gmail.com",
    yourTaxId: "",
    yourZip: "629002",
  },
  paymentDetails: {
    bankName: "Federal Bank",
    accountNumber:"1234567890",
    accountName: "z3connect",
    routingCode: "123456",
    swiftCode: "FEDBINBB1234",
    ifscCode: "FEDBB0000000",
    currency: "INR",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
        qty: 0,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
