import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import RequestBox from "./RequestBox";

const Admin = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const querySnapshot = await getDocs(collection(db, "requests"));
      setRequests(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchRequests();
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div id="requestsContainer">
        {requests.map((request, index) => (
          <RequestBox key={index} request={request} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Admin;