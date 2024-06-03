import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const {
    name,
    address,
    postcode,
    country,
    phone,
    email,
    message,
    length,
    width,
    depth,
    entry,
    floor,
    foil,
    lighting,
    collector,
    pads,
    nozzels,
    upstream,
    shower,
    cover,
  } = await request.json();

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.websupport.sk",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Send email
  try {
    await transporter.sendMail({
      from: "dev@wavenet.sk",
      to: process.env.SMTP_RECIVE_MAIL,
      cc: "dopyt@egea.sk,egea@egea.sk",
      subject: `Žiadosť o cenovú ponuku`,
      html: `
      <!DOCTYPE html>
      <html>
      
      <head>
          <style>
          *,
          *::before,
          *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          
          .container {
            width: 100%;
            max-width: 650px;
            margin: auto;
          }
          h1 {
            width: 100%;
            background-color: black;
            color: white;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            text-decoration: none;
            text-align: center;
            padding: 18px;
          }
          table {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
            color:black;
            border-collapse: collapse;
            width: 100%;
          }
    
          td,
          th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          td {
            width: 50%;
          }
          </style>
      </head>
      
      <body>
      <div class="container">
      <h1>Informácie používateľa</h1>
      <table>
        <tr>
          <td>Meno a priezvisko</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td>Adresa</td>
          <td>${address}</td>
        </tr>
        <tr>
          <td>PSČ</td>
          <td>${postcode}</td>
        </tr>
        <tr>
          <td>Krajina</td>
          <td>${country}</td>
        </tr>
        <tr>
          <td>Telefón</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${email}</td>
        </tr>
     ${
       message &&
       `<tr>
          <td>Správa</td>
          <td>${message}</td>
        </tr>`
     }
      </table>
      <h1 style="margin-top: 50px">Rozmery bazéna</h1>
      <table>
      <tr>
        <td>Dĺžka</td>
        <td>
         ${length}m
        </td>
      </tr>
      <tr>
        <td>Šírka</td>
        <td>
         ${width}m
        </td>
      </tr>
      <tr>
        <td>Hĺbka</td>
        <td>
         ${depth}m
        </td>
      </tr>
      </table>
      <h1 style="margin-top: 50px">Konfigurácia bazéna</h1>
      <table>
      ${
        entry &&
        ` <tr>
          <td>Schody</td>
          <td>
          ${entry}
          </td>
        </tr>`
      }
        <tr>
          <td>Dlažba</td>
          <td>${floor}</td>
        </tr>
        <tr>
          <td>Fólia</td>
          <td>${foil}</td>
        </tr>
       ${
         lighting &&
         `<tr>
          <td>Svetlo</td>
          <td>${lighting}</td>
        </tr>`
       }
        <tr>
          <td>Skimmer</td>
          <td>${collector}</td>
        </tr>
       ${
         pads &&
         `<tr>
          <td>Protišmykové podložky</td>
          <td>${pads}</td>
        </tr>`
       }
        ${
          nozzels &&
          `<tr>
          <td>Trysky</td>
          <td>${nozzels}</td>
        </tr>`
        }
        ${
          upstream &&
          `<tr>
          <td>Protiprúd</td>
          <td>${upstream}</td>
        </tr>`
        }
        <tr>
          <td>Sprcha</td>
          <td>${shower}</td>
        </tr>
       ${
         cover &&
         `<tr>
          <td>Zastrešenie</td>
          <td>${cover}</td>
        </tr>`
       }
      </table>
    </div>
      </body>
      
      </html>

      `,
    });

    return Response.json({ message: "SEND MAIL" });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
