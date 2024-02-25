'use client';

import React from 'react';

interface CopyLinkButtonProps {
  link: string;
}

const CopyLinkButton: React.FC<CopyLinkButtonProps> = ({ link }) => {
  const copyToClipboard = () => {
    console.log('Attempting to copy:', link);
    navigator.clipboard.writeText(link).then(
      () => {
        alert('Link copied to clipboard!');
      },
      (error) => {
        console.error('Error copying text: ', error);
      }
    );
  };

  return (
    <button onClick={copyToClipboard}>Copy Link</button>
  );
};

export default CopyLinkButton;
