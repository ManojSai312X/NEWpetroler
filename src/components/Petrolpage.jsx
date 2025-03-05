import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Petrolpage = () => {
  const [litres, setLitres] = useState("");
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        toast.error(error.message);
      }
    );
  }, []);

  const handleRequest = async () => {
    if (!litres) {
      toast.error("Please enter the number of litres.");
      return;
    }

    try {
      await addDoc(collection(db, "requests"), {
        litres,
        location,
        timestamp: new Date(),
      });
      toast.success("Request confirmed!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="petrol-container">
      <h1>Request Petrol</h1>
      <p>Your current location: {location.lat}, {location.lng}</p>
      {isLoaded && (
        <GoogleMap
          zoom={15}
          center={location}
          mapContainerClassName="map"
        >
          <Marker position={location} />
        </GoogleMap>
      )}
      <input
        type="number"
        placeholder="Litres"
        value={litres}
        onChange={(e) => setLitres(e.target.value)}
        required
      />
      <button onClick={handleRequest}>Confirm Request</button>
    </div>
  );
};

export default Petrolpage;