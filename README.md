# MapMate

MapMate is the half baked project i worked on its basically a platform to help users find friends with similar intrests on using maps as a for sharing the location....After cosnidering and rationing lot of aspects i am stopping this project for futrther future purpose cause of priorites and stuff.....
Will try to complete i near future but cant gurantee to myself...



# MapMate

MapMate is a social discovery platform that allows users to add their social profiles and display their location on a world map. Users can see the locations of others, view their profiles, and connect with people nearby who share similar interests—just like the Snapchat map feature.

## Features

- User Authentication using [Clerk](https://clerk.dev)
- Real-time location sharing on a world map
- View other users' profiles by clicking on their avatars on the map
- Follow users and connect with people nearby
- Firebase integration for storing user data and locations
- Responsive design for both web and mobile platforms

## Tech Stack

- **Frontend:** React.js
- **Authentication:** Clerk
- **Backend & Database:** Firebase Firestore
- **Maps Integration:** Google Maps API or Mapbox
- **Hosting:** Firebase Hosting (Optional)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js and npm installed
- Firebase project with Firestore enabled
- Clerk account for authentication
- Google Maps API Key (or Mapbox API Key)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mapmate.git
    cd mapmate
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Environment Variables:**

    Create a `.env` file in the root directory and add the following:

    ```
    REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_MAP_API_KEY=your_google_maps_api_key
    ```

    Replace the placeholders with your actual keys.

4. **Firebase Configuration:**

    - Go to the [Firebase Console](https://console.firebase.google.com/)
    - Enable Firestore and set up security rules
    - Update the Firestore rules to allow authenticated read and write access:
    ```json
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /users/{userId} {
          allow read, write: if request.auth.uid != null;
        }
      }
    }
    ```

5. **Start the Development Server:**
    ```bash
    npm start
    ```

    Your application will be running at `http://localhost:3000`.

## Folder Structure

```
src/
│   index.js          # Entry point
│   App.js            # Main component
├── components/       # Reusable UI components
├── pages/            # Application pages
├── services/         # Firebase and API integration
└── styles/           # CSS and styled components
```

## Firebase Setup

- Go to the [Firebase Console](https://console.firebase.google.com/)
- Create a new project and add a web app
- Copy the Firebase configuration and add it to `.env` as shown above

## Clerk Setup

- Go to [Clerk Dashboard](https://dashboard.clerk.dev)
- Create a new application and get the `Frontend API Key`
- Add the `Frontend API Key` to `.env`

## Map Integration

- Go to the [Google Cloud Console](https://console.cloud.google.com/) and enable the Maps JavaScript API
- Get the API Key and add it to `.env` as `REACT_APP_MAP_API_KEY`

## Deployment

You can deploy the app using Firebase Hosting:

```bash
npm run build
firebase login
firebase init
firebase deploy
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Clerk](https://clerk.dev) for authentication
- [Firebase](https://firebase.google.com) for backend and hosting
- [Google Maps](https://cloud.google.com/maps-platform) for maps integration
