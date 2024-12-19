# AI Chat Feedback Application

## Overview

This ReactJS application allows users to interact with an AI model, providing feedback on the AI's responses. Users can rate the AI's answers with thumbs up/thumbs down, give a 5-star rating at the end of the conversation, and provide subjective feedback. The application also allows users to view past conversations along with the feedback provided.

## Features

- **AI Chat Interaction**: Users can chat with a mock AI model that responds to their questions.
- **Feedback Mechanisms**:
  - **Thumbs Up/Thumbs Down**: Users can like or dislike the AI's response.
  - **Rating**: At the end of the conversation, users can rate the interaction on a scale of 1 to 5.
  - **Subjective Feedback**: Users can provide textual feedback.
- **View Past Conversations**: Conversations and their respective feedback can be saved and revisited.
- **View and Filter Feedback**: Users can view and filter feedback based on ratings across all conversations.
- **Dark Mode**: Users can toggle between light and dark modes.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Material-UI**: For pre-built UI components and design.
- **Redux**: For state management of the chat conversations and feedback.
- **CSS**: For custom styling, including support for dark and light modes.
- **JSON**: Mock data for AI responses.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v16.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-chat-feedback.git
   cd ai-chat-feedback
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
This will start the application at http://localhost:3000.

Usage
Chat with AI: Type your question in the input field and press "Ask".
Feedback:
You can rate the AI's answers by clicking the thumbs up/thumbs down buttons.
At the end of the conversation, a 5-star rating and a feedback box will appear. You can provide a rating and subjective feedback.
View Past Conversations: Access your saved chats from the sidebar and see the feedback provided.
Filter Feedback: Filter conversations by rating using the feedback panel.
Design Choices
UI/UX: I used Material-UI components for quick and consistent UI design. The goal was to create a simple, intuitive, and user-friendly experience.
Dark Mode: I implemented a dark mode toggle using React state and CSS to provide a better user experience for different lighting conditions.
State Management: Redux was used to manage the state of chat conversations and feedback. This makes it easy to save, retrieve, and update the data across different components.
Trade-offs
Due to time constraints, I didn't implement complex AI interaction; the responses are mocked in a JSON file. If I had more time, I would have integrated a real AI service.
I kept the design simple with minimal animations. A more polished design could include transitions and more advanced UI elements.
Future Improvements
Integrate a real AI service to generate dynamic responses.
Add user authentication for saving individual chat histories.
Improve the feedback filtering interface for a more detailed analysis of conversations.
Implement unit and integration tests for better code reliability.
Images


vbnet
Copy code

In this file:

1. **Image Links**: I've placed placeholders for images (e.g., `https://example.com/chat-mockup.jpg`). Replace them with actual URLs for your project images.
2. **Project Details**: All the necessary details about the setup, usage, features, and design choices are included in the README.

Let me know if you'd like to add or modify anything!
