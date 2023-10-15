import React, { useState } from 'react';

const ResponsiveParagraph = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const count = inputText.trim().split(/\s+/).length;
    setWordCount(count);
  }

  return (
    <div>
      <textarea 
        rows="4" 
        cols="50" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Type your text here..." 
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default ResponsiveParagraph;
