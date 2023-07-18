export async function getAllSheetsData() {

    const { google } = require('googleapis');
    const { GoogleAuth } = require('google-auth-library');
    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });
    const service = google.sheets({ version: 'v4', auth });
    const range = 'Sheet1!A1:D200';

    const response = await service.spreadsheets.values.get({
        spreadsheetId: '1ymO8jdOVM3_NQr4bz6uUVKLhEHo0q7MCuIxuS8PR4TY',
        range: range,
    });
    const numRows = response.data.values ? response.data.values.length : 0;
    console.log(`${numRows} rows retrieved.`);

    const keys = response.data.values[0];
    const data = [];

    if (response.data.values && response.data.values.length > 0) {
        const rows = response.data.values;

        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i];
            const obj = <any | null | undefined>{};

            for (let j = 0; j < keys.length; j++) {
                if (rowData[j]) {
                    obj[keys[j]] = rowData[j];
                }
            }

            data.push(obj);
        }
    }
    return data;
}