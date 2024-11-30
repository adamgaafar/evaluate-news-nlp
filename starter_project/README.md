# Article Insight Evaluator Web App

This web application allows users to analyze and gain insights into any article by simply providing its URL. The app utilizes the Cloudmeaning API to evaluate the article, offering a detailed analysis that includes sentiment, key concepts, and a summary. With a clean interface, it’s designed for quick and easy use.

# Features

Article Evaluation by URL: Users can submit a link to any article, and the app will fetch and analyze its content.
Sentiment Analysis: Determines the overall sentiment of the article (positive, negative, or neutral).
Keyword Extraction: Identifies and highlights key topics and keywords present in the article.
Summary Generation: Provides a concise summary of the main points of the article.
Readable Interface: Clean and user-friendly interface for quick and easy article evaluation.

# Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js
API: Cloudmeaning API for article analysis


Getting Started
These instructions will help you set up the project on your local machine for development and testing.

# Prerequisites
Node.js and npm installed
Access to the Cloudmeaning API. Sign up to get your API key.
Installation



# Usage

Enter the link of the article you want to evaluate in the input field.
Click on Evaluate.
The app will display:
Sentiment of the article.
Extracted keywords to help understand the main topics.
Summary to quickly grasp the main points of the content.

# API Integration
This app uses the Cloudmeaning API to analyze the article. Here’s a quick breakdown of how it integrates with the API:

URL Submission: The user submits an article URL.
Data Fetching: The backend sends a request to Cloudmeaning’s API with the provided URL.
Processing: Cloudmeaning processes the article and returns data on sentiment, keywords, and a summary.
Displaying Results: The app displays the data in a user-friendly format.