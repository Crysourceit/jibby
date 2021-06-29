import dummyReports from "./dummyReports.js";
import React, { useState } from 'react'
import './Report.css';
import RandomHr from '../RandomHr/RandomHr';
const axios = require('axios').default;


function Report() {
  document.title = `Report | Saleng.th`;
  const [reports, setReport] = useState([]);

  async function fetchParcel() {
    const response = await axios.get("/parcel");
    setReport(response.data);
    // console.log(response.data);
    console.log("Fetching data...")
  }

  // Fetch data for the first time!
  const ALWAYS_FETCH = false

  if (ALWAYS_FETCH ? reports : reports.length === 0) {
    console.log("No report");
    fetchParcel();
  }


  return (
    <div class="report_container">
      <div>
        <h1>Report</h1>
      </div>

      <RandomHr width='100%' />

      <div>
        <h2>All parcels</h2>
      </div>

      {/* How to do auto refresh?? */}
      <button onClick={fetchParcel} style={{ marginBottom: '10px' }}>Refresh</button>

      <table>
        <tr>
          <th>_id</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Status</th>
          <th>Cost</th>
        </tr>

        {dummyReports.map((report, index) => {
          return (<tr>
            <td>{report._id}</td>
            <td>{report.sender}</td>
            <td>{report.recipient}</td>
            <td style={{ backgroundColor: report.deliverStatus === "Success" ? 'lime' : 'none' }}>{report.deliverStatus}</td>
            <td>{report.cost}</td>
          </tr>
          )
        })}

        {reports ? reports.map((report, index) => {
          return (
            <tr>
              <td>{report._id}</td>
              <td>{report.sender.firstName}</td>
              <td>{report.recipient.firstName}</td>
              <td style={{ backgroundColor: report.deliverStatus === "Success" ? 'lime' : 'none' }}>{report.deliverStatus}</td>
              <td>{report.parcel.cost}</td>
            </tr>
            /*<Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />  */
          );
        }) : 0}
      </table>

    </div>
  )
}

export default Report
