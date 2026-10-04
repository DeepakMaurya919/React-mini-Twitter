import React, { useState } from 'react';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([
    { id: 1, text: " Yeh Rha  Mera pehla React project! 🚀", likes: 2 }
  ]);
  const [inputText, setInputText] = useState("");

  // Naya Tweet Add karne ke liye


  const handleTweet = () => {
    if (inputText.trim() === "") return;
    const newTweet = {
      id: Date.now(),
      text: inputText,
      likes: 0
    
    };
    setTweets([newTweet, ...tweets]);
    setInputText("");
  };

  // Like handle karne ke liye
  const handleLike = (id) => {
    setTweets(tweets.map(tweet => 
      tweet.id === id ? { ...tweet, likes : tweet.likes + 1 } : tweet
    ));
  };

  // Tweet delete karne ke liye
  const handleDelete = (id) => {
    setTweets(tweets.filter(tweet => tweet.id !== id));
  };

  return (
    <div className="container">
      <div className="white-box">
        {/* Twitter Logo */}
        <img src="/Twitterpng.webp" alt="Logo" className="logo" />
        <h2>Mini Twitter</h2>

        {/* Input Box */}
        <div className="tweet-input">
          <textarea 
            placeholder="What are you thinking?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleTweet}>Post</button>
        </div>

        {/* Tweets List */}
        <div className="tweet-list">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="tweet-card">
              <p>{tweet.text}</p>
              <div className="tweet-actions">
                <button onClick={() => handleLike(tweet.id)}>
                  ❤️ {tweet.likes}
                </button>
                <button className="delete-btn" onClick={() => handleDelete(tweet.id)}>
                  🗑️️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;