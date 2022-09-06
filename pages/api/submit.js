
import { google } from "googleapis";


export default async function handler(
    req,
    res
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }

    const body = req.body

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:K1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [
                        datetime,
                        body.name,
                        body.email,
                        body.github,
                        body.linkedin,
                        body.discord,
                        body.resume,
                        body.projects,
                        body.skills,
                        body.domains,
                        body.interests
                    ]
                ]
            }
        });

        return res.status(201).json({
            data: response.data
        })
    } catch (e) {
        return res.status(e.code).send({ message: e.message })
    }

}
