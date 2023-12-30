# patient-data-management
Patient Data Management code challenge

## Installation
Prerequisites: Node.js, npm, git

Clone the repository to your local environment
```bash
git clone https://github.com/scaggiani/patient-data-management.git
```

## Usage
Access the new folder with the cloned repository, install dependencies and run NodeJS
```bash
cd patient-data-management
npm install
npm run dev
```

## Libraries/tools 
- react : Main frontend library to create components and UI
- react-bootstrap : Used components for Cards, Modals, etc.
- nodejs : Used as web server 
- vite: Used for creating the react project
- VSCode: Preferred IDE for development
- ESLint: Used VSCode plugin to detect errors in javascript
- Prettier Code formatter: Used VSCode plugin to format code
   
## Design decisions 
- The UI was broken into the following component hierarchy:

* App       
  * AppHeader
       * AddPatientModal
   * AppContent
       * PatientList  
           * LoadingStatus
           * PatientCard
               * EditPatientModal
- The useState() hook was used for:
  * Updating patient data
  * Show/hide patient details
  * Show/hide modals for edit and add patient
  * Validate patient data
- Responsive design. Used react-bootstrap components to make it fully responsive
- Animations for edit/add modals and expanding/collapsing patient details



