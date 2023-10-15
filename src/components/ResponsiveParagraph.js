import React, { useState } from 'react';

const ResponsiveParagraph = () => {
  const [text, setText] = useState('');
  
  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  const  wordCount = text.trim().split(/\s+/).length;

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
