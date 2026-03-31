import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PrintReceipt = () => {
    const id = useParams(); 
  const [appointment, setAppointment] = useState(null);

  const handlePrint = async () => {
    // console.log("hello")
    try {
      const res = await axios.get(`/api/user/appointments/${id}`);
      console.log(res.data);
      if (res.data.success) {
        console.log(res);
        setAppointment(res.data.data);

        setTimeout(() => {
          window.print(); // Trigger print dialog
        }, 100); // delay to ensure data is rendered
      }
    } catch (err) {
      console.error("Error fetching appointment:", err);
    }
  };

  return (
    <>
      <button
        onClick={handlePrint}
        className="text-sm text-stone-500 sm:min-w-48 py-2 border rounded text-center hover:bg-primary hover:text-white transition-all duration-300"
      >
        Print Receipt
      </button>

      {appointment && (
        <div id="receipt" className="hidden print:block p-4 text-black bg-white">
          <h2 className="text-xl font-bold">Appointment Receipt</h2>
          <p><strong>Doctor:</strong> {appointment.docData.name}</p>
          <p><strong>Speciality:</strong> {appointment.docData.speciality}</p>
          <p><strong>Patient:</strong> {appointment.userData.name}</p>
          <p><strong>Date:</strong> {appointment.slotDate}</p>
          <p><strong>Time:</strong> {appointment.slotTime}</p>
          <p><strong>Amount Paid:</strong> ₹{appointment.amount}</p>
          <p><strong>Status:</strong> {appointment.cancelled ? "Cancelled" : "Confirmed"}</p>
        </div>
      )}
    </>
  );
};

export default PrintReceipt;
