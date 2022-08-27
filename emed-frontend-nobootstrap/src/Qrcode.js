import React from "react";
import QRCode from "react-qr-code";
import Pdf from "react-to-pdf";
const ref = React.createRef();
function Qrcode() {

    return (

        <div ref={ref}>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <h1>Medikamentenverordnung</h1>
            <br/>
            <QRCode value="Hello, World!" />
            <br/>

            <h2>Patientendaten</h2>
            <br/>
            <h3>Geschlecht</h3>
            <br/>
            <h3>Vorname, Nachname</h3>
            <br/>
            <h3>Geburtsdatum</h3>
            <br/>
            <h6>Verordnung erstellt am DATUM um ZEIT</h6>
            <br/>


            <table>
                <tr>
                    <th>Medikament</th>
                    <th>Morgen</th>
                    <th>Mittag</th>
                    <th>Abend</th>
                    <th>Zur Nacht</th>
                    <th>Einheit</th>
                    <th>Art der Medikation</th>
                    <th>Von bis und mit</th>
                    <th>Hinweis</th>

                </tr>
                <tr>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                </tr>
                <tr>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                    <td>****</td>
                </tr>
            </table>
            <br/>

            <h2>Verordnung ausgestellt durch</h2>
            <br/>
            <h4>Arzt Name</h4>
            <br/>
            <h4>Praxis Name</h4>
            <br/>
            <h4>Adresse von Praxis</h4>
            <br/>
            <h4>Telefon</h4>
            <br/>
            <h4>E-Mail</h4>
            <br/>
            <h4>ZSR-Nr.:</h4>

        </div>
    );
}

export default Qrcode;
