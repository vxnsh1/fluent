<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="public/logo.jpg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Fluent</h3>

  <p align="center">
    Language learning platform with gamification and immersive lessons
    <br />
    <a href="https://fluent-ashen.vercel.app/">View Demo</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/othneildrew/Best-README-Template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/1e40765f-41b0-4e61-a542-cb0db192f222" /> <br/>

Fluent is a Duolingo-style language learning platform that offers guided lessons with immersive characters, audio-visual effects, and interactive exercises. Users can track progress and stay motivated through hearts, XP, quests, leaderboards, and a shop system. The platform also includes a Pro subscription for unlimited hearts and features practice modes to regain lost hearts, making learning engaging and fun.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

These are the main frameworks and libraries used to build Fluent. Additional tools and assets are listed in the Acknowledgements section.
<br/>

<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" />
<img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" />


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get a local copy of Fluent up and running on your machine.

### Prerequisites

You’ll need the following installed:
* Node.js (v20+)
* npm (v10+)
  ```sh
  
  npm install npm@latest -g
  
  ```
* A Clerk account for authentication
* A Stripe account if you want to test the Pro subscription

### Installation

1. Clone the repo
   
   ```sh
   
   git clone https://github.com/vxnsh1/fluent.git
   cd fluent
   
   ```
2. Install dependencies
   
   ```sh
   
   npm install
   
   ```
3. Set up environment variables
   Create a .env.local file in the root directory and add:
   
   ```js
   
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   NEON_DATABASE_URL=your_neon_database_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   
   ```
4. Run the development server
   
   ```sh
   
   npm run dev
   
   ```
   Open http://localhost:3000 to view the app in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions help make Fluent better for everyone! Whether it’s fixing bugs, adding new lessons, or improving the UI/UX, your contributions are greatly appreciated.

If you have ideas or suggestions:
1. Fork the repository
2. Open an issue with the tag "enhancement" or "bug"

How to Contribute
1. Fork the project
2. Create your feature branch
   
   ```sh
   
   git checkout -b feature/AmazingFeature
   
   ```
3. Commit your changes
   
   ```sh
   
   git commit -m "Add some AmazingFeature"

   ```
4. Push to your branch
   
   ```sh
   
   git push origin feature/AmazingFeature
   
   ```
   
5. Open a Pull Request and describe your changes. <br/> <br/>
   Don’t forget to give the project a ⭐ if you like it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Vansh Chouhan - [@vanshchouhan](https://www.linkedin.com/in/vanshchouhan/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Neon DB](https://neon.tech/)
* [Eleven Labs](https://elevenlabs.io/)
* [Vercel](https://vercel.com/)
* [Lucide Icons](https://lucide.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
