'use client';

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface AccordionItemProps {
    title: string;
    content: string;
}

interface TextWithParagraphsProps {
    text: string
}

const TextWithParagraphs: React.FC<TextWithParagraphsProps> = ({ text }) => {
    // Split the input text into an array of paragraphs using "\n" as the delimiter
    const paragraphs = text.split('\n');
  
    return (
      <div>
        {/* Map through the paragraphs and render each one in a new <p> tag */}
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
            <br/>
          </p>
        ))}
      </div>
    );
};

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const toggleButtonClasses = `cursor-pointer ${isOpen ? 'text-gray-500' : 'text-blue-500'}`;
  
    return (
      <div className='border border-neutral-500 rounded-lg p-4'>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <button className={toggleButtonClasses} onClick={handleToggle}>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </button>
        </div>
        <div className={isOpen ? 'mt-4' : 'hidden'}>
          <TextWithParagraphs text={content}/>
        </div>
      </div>
    );
  };