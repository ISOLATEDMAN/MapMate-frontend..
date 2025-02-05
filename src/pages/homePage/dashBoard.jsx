import { useClerk } from "@clerk/clerk-react";
import MapComponent from "../../components/mapComp/mapComp";
function DashBoard(){
    const { signOut } = useClerk();
    const handleOut = ()=>{
        signOut(()=>{
            window.location.href = '/home';
        })
    }
    return <>
        <h1>Welcome to dashboard....</h1>
        <button 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={handleOut}
        >
            Logout
        </button>
        <MapComponent />
    </>
}

export default DashBoard;