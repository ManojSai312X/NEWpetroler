import React from "react";

const RequestBox = ({ request, index }) => {
  return (
    <div className="request-box">
      <h3>Request #{index + 1}</h3>
      <p><strong>Litres:</strong> {request.litres}</p>
      <p><strong>Location:</strong> {request.location.lat}, {request.location.lng}</p>
      <p><strong>Timestamp:</strong> {request.timestamp.toDate().toString()}</p>
    </div>
  );
};

export default RequestBox;