import { useClerk } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import MapComponent from "../../components/mapComp/mapComp";
import { db } from "../../firebase";
import InterestsModal from "../../components/IntrestsPopUps/intrestPops";
import AddSocials from "../../components/SocialsAdd/AddSocials";
import { doc, setDoc } from "firebase/firestore";

function DashBoard() {
  const { signOut, user } = useClerk();
  const [interestsModalOpen, setInterestsModalOpen] = useState(true);
  const [socialsModalOpen, setSocialsModalOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const userId = user.id;
  console.log(`here is the userId ${userId}`);

  useEffect(() => {
    // Get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleSaveInterests = async (selectedInterests) => {
    console.log(selectedInterests);
    try {
      await setDoc(doc(db, 'users', userId), {
        interests: selectedInterests,
        location: location,
        timestamp: new Date(),
      }, { merge: true });
      console.log("Interests and location saved!");
      setSocialsModalOpen(true); 
    } catch (error) {
      console.error("Error saving interests and location:", error);
    }
  };

  const handleSaveSocials = async (socials) => {
    console.log(socials);
    try {
      await setDoc(doc(db, 'users', userId), {
        socials: socials,
        timestamp: new Date(),
      }, { merge: true });
      console.log("Socials saved!");
    } catch (error) {
      console.error("Error saving socials:", error);
    }
  };

  const handleOut = () => {
    signOut(() => {
      window.location.href = '/home';
    });
  };

  return (
    <>
      <h1>Welcome to dashboard....</h1>
      <button 
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        onClick={handleOut}
      >
        Logout
      </button>
      {/* Interests Modal */}
      <InterestsModal
        open={interestsModalOpen}
        handleClose={() => setInterestsModalOpen(false)}
        handleSave={handleSaveInterests}
      />
      {/* Add Socials Modal */}
      <AddSocials
        open={socialsModalOpen}
        handleClose={() => setSocialsModalOpen(false)}
        handleSave={handleSaveSocials}
      />
      <MapComponent />
    </>
  );
}

export default DashBoard;