'use client';

import React from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';

interface QuoteProps {
  text: string;
  author: string;
  className?: string;
}

const QuoteContainer = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  background-color: ${theme.colors.background};
  border-left: 4px solid ${theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;
`;

const QuoteText = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: ${theme.colors.text};
  margin: 0;
  padding: 0;
  line-height: 1.6;
`;

const QuoteAuthor = styled.cite`
  display: block;
  margin-top: 1rem;
  font-size: 1rem;
  color: ${theme.colors.primary};
  font-style: normal;
  font-weight: 500;
`;

export default function Quote({ text, author, className }: QuoteProps) {
  return (
    <QuoteContainer className={className}>
      <QuoteText>{text}</QuoteText>
      <QuoteAuthor>— {author}</QuoteAuthor>
    </QuoteContainer>
  );
} 