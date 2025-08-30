# Ikshant Shukla - Portfolio

A modern, responsive portfolio website showcasing my skills as a Full Stack Developer and Web3 enthusiast.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful animations and smooth transitions
- **Contact Form**: Functional contact form with email integration
- **Skills Showcase**: Interactive skill charts and progress indicators
- **Project Gallery**: Showcase of my best projects
- **Mobile-First**: Hamburger menu for mobile navigation

## 🛠️ Technologies Used

### Frontend
- **React.js** - Main framework
- **Framer Motion** - Animations
- **CSS3** - Styling with custom animations
- **FontAwesome** - Icons
- **React Scroll** - Smooth scrolling navigation

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **Google OAuth2** - Email authentication

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Main.jsx
│   │   ├── About_me.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ContactForm.jsx
│   │   └── BackToTopButton.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── about_me.css
│   │   ├── style.css
│   │   └── stylle.css
│   ├── images/
│   └── App.js
├── server.js
├── package.json
└── .env
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ikshantshukla123/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values.

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Start the backend server** (in a new terminal)
   ```bash
   node server.js
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
GOOGLE_REDIRECT_URI=https://developers.google.com/oauthplayground

# Email Configuration
GMAIL_USER=your_gmail_user
RECIPIENT_EMAIL=your_recipient_email
CONTACT_EMAIL=your_contact_email

# Contact Information
PHONE_NUMBER=your_phone_number

# Server Configuration
PORT=3033
NODE_ENV=development

# Frontend Configuration
REACT_APP_API_URL=http://localhost:3033
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Backend Deployment

For the backend server, you can deploy to:
- **Heroku**
- **Vercel**
- **Railway**
- **Render**

## 📱 Features

- **Responsive Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Between sections
- **Contact Form**: With email integration
- **Skills Visualization**: Interactive charts
- **Project Showcase**: With links to live demos
- **Social Media Integration**: Links to GitHub, LinkedIn, etc.

## 🎨 Design Features

- **Gradient Animations**: Beautiful text gradients
- **Hover Effects**: Interactive elements
- **Loading Animations**: Smooth page transitions
- **Modern Typography**: Clean and readable fonts
- **Color Scheme**: Professional blue theme

## 📞 Contact

- **Email**: ikshankshukla44@gmail.com
- **Phone**: +91 8109537034
- **GitHub**: [ikshantshukla123](https://github.com/ikshantshukla123)
- **LinkedIn**: [Ikshant Shukla](https://www.linkedin.com/in/ikshant-shukla-097771327/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Ikshant Shukla

