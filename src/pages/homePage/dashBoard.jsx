import { useClerk, useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import MapComponent from "../../components/mapComp/mapComp";
import { db } from "../../firebase";
import InterestsModal from "../../components/IntrestsPopUps/intrestPops";
import AddSocials from "../../components/SocialsAdd/AddSocials";
import { doc, setDoc, getDoc } from "firebase/firestore";
import PrivacyModal from "../../components/privacyModal/privacyModal";

function DashBoard() {
  const { signOut } = useClerk();
  const { isLoaded, user } = useUser(); // Ensure Clerk's user is loaded
  const [loading, setLoading] = useState(true); // Tracks Firestore loading state
  const [interestsModalOpen, setInterestsModalOpen] = useState(false);
  const [socialsModalOpen, setSocialsModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false); // State for Privacy Modal
  const [location, setLocation] = useState(null); // For geolocation or manual input

  useEffect(() => {
    if (!isLoaded || !user) return; // Wait for Clerk to finish loading the user

    const checkUserExists = async () => {
      try {
        const userDocRef = doc(db, "users", user.id);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          console.log("New user detected, opening Interests modal.");
          setInterestsModalOpen(true);
        } else {
          console.log("User already exists in Firestore.");
        }
      } catch (error) {
        console.error("Error checking user existence:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUserExists();

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
          if (error.code === error.PERMISSION_DENIED) {
            console.log("User denied location access. Opening Privacy Modal.");
            setPrivacyModalOpen(true);
          }
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setPrivacyModalOpen(true); // Open modal if geolocation is unsupported
    }
  }, [isLoaded, user]);

  const handleSaveInterests = async (selectedInterests) => {
    try {
      await setDoc(
        doc(db, "users", user.id),
        {
          interests: selectedInterests,
          location: location,
          timestamp: new Date(),
        },
        { merge: true }
      );
      console.log("Interests and location saved!");
      setSocialsModalOpen(true);
      setInterestsModalOpen(false);
    } catch (error) {
      console.error("Error saving interests and location:", error);
    }
  };

  const handleSaveSocials = async (socials) => {
    try {
      await setDoc(
        doc(db, "users", user.id),
        {
          socials: socials,
          timestamp: new Date(),
        },
        { merge: true }
      );
      console.log("Socials saved!");
      setSocialsModalOpen(false);
    } catch (error) {
      console.error("Error saving socials:", error);
    }
  };

  const handleSaveManualLocation = async (manualLocation) => {
    try {
      setLocation(manualLocation); // Save the manual location to state
      await setDoc(
        doc(db, "users", user.id),
        {
          location: manualLocation,
          timestamp: new Date(),
        },
        { merge: true }
      );
      console.log("Manual location saved!");
      setPrivacyModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error saving manual location:", error);
    }
  };

  const handleOut = () => {
    signOut(() => {
      window.location.href = "/home";
    });
  };

  if (!isLoaded || !user || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <h1>Welcome to dashboard....</h1>
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        onClick={handleOut}
      >
        Logout
      </button>
      <InterestsModal
        open={interestsModalOpen}
        handleClose={() => setInterestsModalOpen(false)}
        handleSave={handleSaveInterests}
      />
      <AddSocials
        open={socialsModalOpen}
        handleClose={() => setSocialsModalOpen(false)}
        handleSave={handleSaveSocials}
      />
      <PrivacyModal
        open={privacyModalOpen}
        handleClose={() => setPrivacyModalOpen(false)}
        handleSave={handleSaveManualLocation} // Save manual location
      />
      <MapComponent />
    </>
  );
}

export default DashBoard;
