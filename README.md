# Tiles Gallery

A modern and responsive **Tiles Gallery Web Application** built with **Next.js (App Router)**.  
This project allows users to explore beautiful tile designs, view details, and manage their profiles with authentication support.

---


---

##  Project Purpose

The purpose of this project is to build a fully functional tile showcase platform where users can:

- Browse different tile designs
- Search tiles easily
- View detailed tile information
- Register and login securely
- Manage personal profile information

---

##  Key Features

###  Home Page
- Hero banner with "Discover Your Perfect Aesthetic"
- Browse Now button → redirects to All Tiles page
- Marquee with latest updates
- Featured tiles (Top 4 from server)
- Each tile has a "View Details" button

---

###  All Tiles Page
- Search bar for filtering tiles by title
- Grid layout of tile cards
- Each card includes:
  - Image
  - Title
  - Details button

---

###  Tile Details Page
- High-resolution tile preview
- Full tile information:
  - Title
  - Description
  - Category
  - Material
  - Price
  - Dimensions
  - Tags

---

###  Authentication System

#### Login Page
- Email & Password login form
- Google social login
- Error handling with toast message
- Redirect to Home after successful login
- Link to Register page

#### Register Page
- Name
- Email
- Photo URL
- Password
- Google login option
- Redirect to Login page after successful registration

---

###  My Profile (Private Route)
- Display logged-in user information
- Show name, email, and photo
- Update feature:
  - Update Name
  - Update Image URL
- Redirect to update form page

---

