# Green Sphere AI

Green Sphere AI is a comprehensive web application designed to promote sustainable living through various interactive features, including an EcoPlanner, Virtual Eco Guide, Image Upload for eco-friendly product detection, and BigQuery data analysis with predictive recommendations.

## Features

### EcoPlanner
- Organize and manage eco-friendly tasks.
- Set reminders and track progress.
- Share plans with friends and family to promote sustainability.

### Virtual Eco Guide
- Access information on sustainable practices and eco-friendly products.
- Search for specific topics and get actionable advice.

### Image Upload for Eco-Friendly Detection
- Upload images to check if products are eco-friendly.
- Powered by Google Cloud Vision API for accurate analysis.

### BigQuery Data Analysis and Predictive Recommendations
- Fetch and display critical data insights from BigQuery.
- Use Vertex AI to train models and provide predictive recommendations.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/green-sphere-ai.git
    cd green-sphere-ai
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Firebase:**
    - Go to the Firebase Console and create a new project.
    - Obtain the Firebase configuration and add it to `src/firebaseConfig.js`.

4. **Set up Google Cloud Services:**
    - Enable the necessary APIs (e.g., Vision API, BigQuery, Vertex AI).
    - Obtain service account keys for both Firebase and your own service account and save them in the project directory.

5. **Run the backend server:**
    ```bash
    python backend.py
    ```

6. **Start the React application:**
    ```bash
    npm start
    ```

## Usage

### Sign In
- Use the SignIn page to log in with your email and password.
- A loading spinner will indicate the sign-in process.

### Dashboard
- Access the Dashboard to explore different features.
- Fetch BigQuery data and display it in a tabular format.
- Upload images to analyze eco-friendliness.

## Deployment

### Firebase Hosting
- Set up Firebase CLI and log in with your account:
    ```bash
    npm install -g firebase-tools
    firebase login
    ```

- Initialize Firebase in your project directory:
    ```bash
    firebase init
    ```

- Deploy the application:
    ```bash
    firebase deploy
    ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Google Cloud](https://cloud.google.com/) for their powerful APIs.
- [Firebase](https://firebase.google.com/) for authentication and hosting services.
- [React](https://reactjs.org/) for the frontend framework.

## Contact
For any inquiries or feedback, please contact [Siva] at [sivasubramanian86@hotmail.com].

---

### Note
This project aims to promote sustainable living and encourage eco-friendly practices. Let's make a difference together! 🌱✨
