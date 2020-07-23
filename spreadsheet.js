const { GoogleSpreadsheet } = require("google-spreadsheet");
const { promisify } = require("util");

const creds = require("./client_secret.json");

async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet("1BafSrhRTLCd1AyqPdKSN2dtpvIE8kuWFoQGSYHzVcrc");

  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  console.log(doc.title);
  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  const testRow = await sheet.addRow({
    "Student Name": "Peter Parker",
    Gender: "Male",
    "Home State": "NY",
  });
}

accessSpreadsheet();
