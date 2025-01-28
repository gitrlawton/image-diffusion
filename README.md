# Stablegram (Instagram Clone)

## Overview

This project is a web application that mimics the functionality of Instagram, allowing users to create accounts, upload photos, like and comment on posts, and follow other users. Built with Next.js and Python, the application uses React for the front-end and leverages a Stable Diffusion model hosted on Modal's serverless GPU infrastructure for AI image generation.

## Features

- **User Authentication**: Users can create accounts and log in to access their profiles.
- **AI Image Generation**: Users can post AI generated images with captions and share them with their followers.
- **Social Interactions**: Users can like posts, leave comments, and follow other users to engage with the community and curate their feed.
- **Search Functionality**: Users can search for other users and hashtags to discover new content.

## Installation

To set up the project, ensure you have Node.js installed on your machine. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```plaintext
   MODAL_URL='your_modal_url'
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Create an account or log in to your existing account.
2. Generate photos to share with your followers.
3. Like and comment on posts from other users.
4. Follow users to see their posts in your feed.
5. Use the search feature to find users or hashtags.

## File Descriptions

- **src/app/api/generate-image/route.js**: API route for generating images based on user prompts.
- **src/app/contexts/PostContext.jsx**: Context provider for managing posts across the application.
- **src/app/photo/[id]/page.jsx**: Page component for displaying individual photo posts.
- **src/app/profile/page.jsx**: Page component for displaying user profiles and their posts.
- **src/app/profile/[id]/page.jsx**: Page component for displaying a specific user's profile and their posts.
- **src/app/search/page.jsx**: Page component for searching users and hashtags.
- **src/app/layout.jsx**: Main layout component that wraps the application.
- **src/components/custom/AddPhotoModal.jsx**: Modal component for adding new photos.
- **src/components/custom/CommentSection.jsx**: Component for displaying and adding comments to posts.
- **src/components/custom/FollowModal.jsx**: Modal component for displaying followers and following users.
- **src/components/custom/FollowButton.jsx**: Button component for following/unfollowing users.
- **src/components/custom/LikeButton.jsx**: Button component for liking posts.
- **src/components/custom/Navbar.jsx**: Navigation bar component for easy access to different parts of the application.

## Dependencies

- **Next.js**: Framework for building server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Lucide React**: Icon library for React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
