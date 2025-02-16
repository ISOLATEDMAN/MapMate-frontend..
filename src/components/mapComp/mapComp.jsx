import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import UserProfileMap from "./userProfile";

// Custom icon for user markers
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  iconSize: [40, 40],
});

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [users, setUsers] = useState([]);

  // Get the current user's location
  useEffect(() => {
    const fetchUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    };

    // Fetch users from Firestore
    const fetchUsersFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map((doc) => doc.data());
        setUsers(usersData);
      } catch (err) {
        console.error("Error fetching users from Firestore:", err);
      }
    };

    fetchUserLocation();
    fetchUsersFromFirestore();
  }, []);

  return (
    <MapContainer
      center={userLocation || [0, 0]} // Default to [0, 0] if user location is not available
      zoom={userLocation ? 13 : 2} // Adjust zoom based on user location availability
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Current User Location */}
      {userLocation && (
        <Marker position={userLocation} icon={customIcon}>
          <Popup>
            🚀 You are here!
            <UserProfileMap />
          </Popup>
        </Marker>
      )}

      {/* Other Users' Locations */}
      {users.map((user, index) => (
        user.latitude && user.longitude ? ( // Ensure latitude and longitude exist
          <Marker
            key={index}
            position={[user.latitude, user.longitude]}
            icon={customIcon}
          >
            <Popup>
              <b>{user.name}</b> <br />
              <a href={user.profileUrl} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </Popup>
          </Marker>
        ) : null
      ))}
    </MapContainer>
  );
};

export default MapComponent;
