// import component

// import styles
import "./Tax.css";

//display tax
function Tax() {
  const data = {
    companyICON: "ICON_Shopee.jpg",
    companyName: "Cozy Shop on Shopee (สำนักงานใหญ่)",
    companyAddress: [
      "12/1234 กรุงเทพฯ 10160",
      "เลขประจำตัวผู้เสียภาษี 0001212312121",
      "โทร. 020268989",
    ],
    billToName: "ภวิกา พุทธศนากุล",
    billToAddress: [
      "189/48 ซอยลาดพร้าว 1 ถนนลาดพร้าว แขวงจอมพล เขตจตุจักร 10900",
      "โทร. 0999996969",
    ],
    invoiceNumber: "CA2021090002",
    invoiceDate: "22/09/2021",
    sellerName: "Shopee",
    jobName: "#210922VN7DEJJB - Order from Shopee",
    contactName: "ภวิกา พุทธศนากุล",
    contactNumber: "0999996969",
    items: [
      {
        series: 1,
        description: "FlowAccount - Bundle",
        unit: 1,
        unitPrice: 10.0,
        rebate: 0,
        tax: "7%",
      },
      {
        series: 2,
        description: "ค่าจัดส่ง",
        unit: 1,
        unitPrice: 23.0,
        rebate: 0,
        tax: "7%",
      },
    ],
    productValue: 30.85,
    vat: 2.15,
    grandTotal: 33.0,
    discount: 2.0,
    totalPayment: 31.0,
    note: "ได้รับ 2.00 Shopee Coin ",
  };

  const numberToThaiText = (num) => {
    const thaiNumbers = [
      "ศูนย์",
      "หนึ่ง",
      "สอง",
      "สาม",
      "สี่",
      "ห้า",
      "หก",
      "เจ็ด",
      "แปด",
      "เก้า",
    ];
    const units = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

    const convertToThaiText = (numStr) => {
      let length = numStr.length;
      let result = "";
      for (let i = 0; i < length; i++) {
        let digit = parseInt(numStr[i]);
        result += thaiNumbers[digit];
        if (i !== length - 1) {
          result += units[length - i - 1];
        }
      }
      return result;
    };

    let numText = "";
    let numStr = num.toString();

    if (numStr.includes(".")) {
      let [integerPart, decimalPart] = numStr.split(".");
      numText += convertToThaiText(integerPart) + "บาท";
      numText += convertToThaiText(decimalPart) + "สตางค์";
    } else {
      numText += convertToThaiText(numStr) + "บาทถ้วน";
    }

    return numText;
  };

  return (
    <div className="tax-container">
      <div className="tax-header-container">
        <h1>Tax</h1>
      </div>
      <div className="tax-introduce-container">
        <div className="tax-data">
          <div className="tax-data-container">
            <div className="tax-data-header">
              <div className="tax-data-header-left">
                <img src={data.companyICON} alt="Company Logo" />
                <h2>{data.companyName}</h2>
                <p>{data.companyAddress.join(", ")}</p>
              </div>
              <div className="tax-data-header-right">
                <div className="tax-data-header-right-top">
                  <h1>ใบกํากับภาษี/ใบเสร็จรับเงิน</h1>
                  <h6>ต้นฉบับ</h6>
                </div>
                <div className="tax-data-header-right-bottom">
                  <p>เลขที่: {data.invoiceNumber}</p>
                  <p>วันที่: {data.invoiceDate}</p>
                </div>
              </div>
            </div>

            <div className="tax-data-bill-to">
              <h2>ข้อมูลผู้ซื้อ</h2>
              <p>{data.billToName}</p>
              <p>{data.billToAddress.join(", ")}</p>
            </div>

            <table className="tax-data-items">
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>รายละเอียด</th>
                  <th>จำนวน</th>
                  <th>ราคาต่อหน่วย</th>
                  <th>ส่วนลด</th>
                  <th>ภาษี</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item) => (
                  <tr key={item.series}>
                    <td>{item.series}</td>
                    <td>{item.description}</td>
                    <td>{item.unit}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.rebate}</td>
                    <td>{item.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="tax-data-totals">
              <p>รวมเป็นเงิน: {data.productValue}</p>
              <p>ภาษี: {data.vat}</p>
              <p>ยอดสุทธิ: {data.grandTotal}</p>
            </div>

            <div className="tax-data-note">
              <p>{data.note}</p>
            </div>

            <div className="tax-data-thai-text">
              <p>ยอดเงิน (ภาษาไทย): {numberToThaiText(data.grandTotal)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tax;
