# React-Next-Reddit

![React](https://img.shields.io/badge/React-%5E17.0.2-blue) ![Next.js](https://img.shields.io/badge/Next.js-%5E11.0.1-blue) ![License](https://img.shields.io/badge/license-MIT-green)

A Reddit clone built with React and Next.js

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Demo

[Live Demo](https://devtues.com)

## Features

- **User Authentication**: Allow users to create accounts, log in, and manage their profiles.
- **Subreddits**: Create, subscribe, and participate in various subreddits based on interests.
- **Posts and Comments**: Submit, vote, and comment on posts within subreddits.
- **Voting System**: Upvote and downvote posts and comments for community-driven content visibility.
- **Responsive Design**: Mobile-friendly UI for seamless browsing on different devices.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-next-reddit.git
cd react-next-reddit
npm install
```
Configuration

    Create a .env file in the root directory and add the following environment variables:

bash

DATABASE_URL=your-database-url
NEXTAUTH_SECRET=your-secret
GOOGLE_CLIENT_ID=your-id
GOOGLE_CLIENT_SECRET=your-secret
UPLOADTHING_SECRET=your-secret
UPLOADTHING_APP_ID=your-id
REDIS_URL=your-url
REDIS_SECRET=your-secret

Replace them with appropriate values.

    Start the development server:

bash

npm run dev

Visit http://localhost:3000 in your browser.
Usage

    Create an account or log in to an existing one.
    Explore existing subreddits or create your own.
    Submit posts, comment, and engage with the community.
    Vote on posts and comments to influence visibility.
