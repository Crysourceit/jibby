import dummyReports from "./dummyReports.js";
import NumberFormat from 'react-number-format';
import React, { useState, useEffect } from 'react'
import './Report.css';
import RandomHr from '../RandomHr/RandomHr';
import axios from 'axios';

function Report() {


  document.title = `Report | Jibby`;
  const [reports, setReport] = useState([]);
  const [isInitialFetch, setIsinitialFetch] = useState(false);

  function ActualReports(props) {

    return (
      <tr>
        <td>{props._id}</td>
        <td>{props.senderFName}</td>
        <td>{props.recipientFName}</td>
        <td style={{ backgroundColor: props.deliverStatus === "Success" ? 'lime' : 'none' }}>{props.deliverStatus}</td>
        <td><NumberFormat value={props.parcelCost} displayType={'text'} thousandSeparator={true} prefix={'THB '} /></td>
        <td><button onClick={() => { props.deleteParcel(props._id) }}>Del</button></td>
      </tr>
    )
  }

  // Fetch
  async function fetchParcel() {
    const response = await axios.get("/parcel");
    setReport(response.data);
    // console.log(response.data);
    console.log("Fetching data...")
    setIsinitialFetch(true);
  }

  // Delete
  async function handleDelete(_id) {
    try {
      await axios.delete('/parcel/' + _id, {
        _id: _id
      });
    } catch (error) {
      console.log(error)
    }
  }

  function deleteParcel(id) {
    // console.log("Called")
    // console.log(`id is ${id}`)
    const _id = id
    handleDelete(_id);
    fetchParcel();
    // setReport(prevReports => {
    //   return prevReports.filter((report, index) => {
    //     return index !== id
    //   });
    // });
  }

  // Initial fetch
  if (!isInitialFetch) {
    fetchParcel();
  }

  // DOESN'T WORK!
  // Set timer (fetch every 5 sec)
  // setInterval(() => {
  //   setIsinitialFetch(false)
  // }, 5000);

  return (
    <div class="report_container">
      <div>
        <h1>Report</h1>
      </div>

      <RandomHr width='100%' />

      <div>
        <h2>All parcels</h2>
      </div>
      <button onClick={fetchParcel} style={{ marginBottom: '10px' }}>Refresh</button>

      <table>
        <tr>
          <th>_id</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Status</th>
          <th>Cost</th>
          <th>Delete</th>
        </tr>

        {/* {dummyReports.map((report, index) => {
          return (<tr>
            <td>{report._id}</td>
            <td>{report.sender}</td>
            <td>{report.recipient}</td>
            <td style={{ backgroundColor: report.deliverStatus === "Success" ? 'lime' : 'none' }}>{report.deliverStatus}</td>
            <td><NumberFormat value={report.cost} displayType={'text'} thousandSeparator={true} prefix={'THB '} /></td>
            <td><button>Del</button></td>
          </tr>
          )
        })} */}

        {reports.map((report, index) => {
          return (
            <ActualReports
              key={index}
              id={index}
              _id={report._id}
              senderFName={report.sender.firstName}
              recipientFName={report.recipient.firstName}
              deliverStatus={report.deliverStatus}
              parcelCost={report.parcel.cost}
              deleteParcel={deleteParcel}
            />
          );
        })}
        {/* <button onClick={deleteParcel} >Test</button> */}
      </table>
    </div>
  )
}

export default Report


