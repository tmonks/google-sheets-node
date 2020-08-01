# Google Sheets Node Example

##  Setup
Follow [the setup process in this video](https://www.youtube.com/watch?v=UGN6EUi4Yio), up to about the 2:30 mark

Here are the basic steps: 

1. Create a project in the Google Developer [Google Developers Console](https://console.developers.google.com)
2. Enable the Google Drive API
3. Create service account credentials for the API and give it Project > Editor access to the project
4. Save the json file as "client_secrets.json" in your project directory
5. Get the `client_email` from the `client_secrets.json` file
6. Create a copy of the [Google Sheet Example](https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit)
7. In the copy, click the Share button and add the email address
7. Copy the spreadsheet ID from the URL (the part between `d/` and `/edit`, for example: _https://docs.google.com/spreadsheets/d/<**alphanumeric spreadsheet ID**>/edit#gid=0_)
8. In `spreadsheet.js`, update the spreadsheet ID on this row:
```
const doc = new GoogleSpreadsheet("1BafSrhRTLCd1AyqPdKSN2dtpvIE8kuWFoQGSYHzVcrc");
```
9. run `node spreadsheet.js` and you should see some details about the sheet output, and a new row added

## Additional Information
- [google-spreadsheet examples](https://www.npmjs.com/package/google-spreadsheet)
