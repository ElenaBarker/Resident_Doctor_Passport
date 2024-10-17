# Resident Doctor Passport

Table of Contents:

- Project Overview
- Problem Statement
- Solution
- Features
- Tech Stack
- Installation
- Usage
- Contributing


Project Overview

Resident Doctor Passport is a web application designed to simplify the process of managing and sharing doctor information between medical professionals and healthcare organisations. The platform allows doctors to enter their details once, keep them up to date, and securely share them with multiple organisations. Healthcare organisations can request access to doctors’ information without needing manual form exchanges, ensuring efficient and error-free data sharing.

Problem Statement

Doctors, especially those in training, often have to complete multiple forms every few months when they rotate through new jobs. The current process is inefficient and repetitive, as they must input the same information on different forms over and over. The issues include:

- Repetition and inefficiency: Doctors waste time entering the same details repeatedly on poorly designed forms.
- Manual errors: Data is often manually copied by organisations, leading to mistakes in records.
- Delays: Doctors frequently respond late to form requests, delaying the onboarding process.
- Data inconsistencies: Administrators must manually transcribe doctor information into databases, risking errors and delays.
  
For healthcare administrators, it’s a struggle to receive up-to-date and accurate information. They often wait for doctors to submit forms and then manually input the data into trainee databases. This can lead to further mistakes and a slower process.

Solution

The Resident Doctor Passport application addresses these problems by offering:

- One-time data entry: Doctors enter their details once and can easily update them when needed. This avoids the need to fill out the same information repeatedly.
- Up-to-date and accurate information: Organisations can access the most recent information directly, ensuring that no manual copying or errors occur.
- Efficient communication: Organisations request access to doctor data through the platform, and doctors can grant or deny access quickly. No more delays caused by slow email exchanges.
- Data control: Doctors maintain full control over which organisations can access their personal and professional information, ensuring their privacy is protected.
  
Key Benefits:

- For Doctors: Doctors only need to enter their details once and can manage them in one centralised system. Organisations that request access to their data receive the most up-to-date information without additional forms.
- For Employers: Organisations gain access to standardised, accurate data in a timely manner without needing to manually process or input the information, saving time and reducing errors.
  
Features

- Doctor Profile Management: Doctors can create an account, manage their profile, and update it as needed with their personal and professional details (e.g., qualifications, certifications).
- Organisation Search: Healthcare organisations can search for doctors by their GMC number and request access to their details.
- Access Control: Doctors are notified when an organisation requests access and can approve or deny the request at their discretion.
- Real-time Data Updates: Whenever a doctor updates their information, the changes are automatically shared with all authorised organisations, ensuring up-to-date records.

Tech Stack

The project uses the following technologies:

- Frontend: React (with Material UI for user interface components)
- Backend: Node.js with Express
- Database: PostgreSQL for securely storing doctor and organisation data
- Libraries:
pg-pool for handling PostgreSQL connections

Installation

To run this project locally, follow these steps:

Clone the repository:

- git clone https://github.com/ElenaBarker/Resident_Doctor_Passport.git
- cd Resident_Doctor_Passport

Install server dependencies:

- cd server
- npm install

Install client dependencies:

- cd ../client
- npm install

Start the backend server:

- cd ../server
- npm start

Start the frontend client:

- cd ../client
- npm start
- Visit http://localhost:3000 in your browser to view the app.

Usage

- Doctor Login: Doctors can log into the platform, complete the Doctor Information Form, and submit their details.
- Profile Management: Doctors can update their profile as their qualifications or details change, ensuring organisations always have access to the latest information.
- Organisation Login: Healthcare organisations can log into the platform, search for doctors by their GMC number, and request access to their profiles.
- Granting Access: Doctors can review access requests from organisations and approve or deny them, giving them full control over who can view their information.

Contributing

Contributions are welcome! Here's how you can contribute to the project:

- Fork the repository.
- Create a new branch (git checkout -b feature-branch-name).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch-name).
- Create a new Pull Request.
