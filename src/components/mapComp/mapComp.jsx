import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import UserProfileMap from "./userProfile";

// Custom icon (avatar marker)
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Replace with user avatar URL
  iconSize: [40, 40],
});

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [users, setUsers] = useState([]);

  // Get current user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );

    // Fetch all users from Firestore
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map(doc => doc.data());
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Show Current User Location */}
      {userLocation && (
        <Marker position={userLocation} icon={customIcon}>
          <Popup>
            🚀 You are here!
            <UserProfileMap />
          </Popup>
        </Marker>
      )}

      {/* Show Other Users */}
      {users.map((user, index) => (
        <Marker key={index} position={[user.latitude, user.longitude]} icon={customIcon}>
          <Popup>
            <b>{user.name}</b> <br />
            <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">View Profile</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;