import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';

type QuoteType = {
  text: string;
  author: string;
};

const quotes: QuoteType[] = [
  {
    text: "Change your thoughts and you change your world",
    author: "Norman Vincent Peale"
  },
  {
    text: "The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart",
    author: "Helen Keller"
  },
  {
    text: "Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain… To feel the freedom that comes from being able to continue to make mistakes and choices – today I choose to feel life, not to deny my humanity, but to embrace it.",
    author: "Kevyn Aucoin"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Nothing is impossible - The word itself says 'I'm Possible'",
    author: "Audrey Hepburn"
  },
  {
    text: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    author: "Maya Angelou"
  },
  {
    text: "Keep your face toward the sunshine, and shadows will fall behind you.",
    author: "Walt Whitman"
  },
  {
    text: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "No matter what people tell you, words and ideas can change the world.",
    author: "Robin Williams"
  },
  {
    text: "Thinking: the talking of the soul with itself.",
    author: "Plato"
  },
  {
    text: "Feeling gratitude and not expressing it is like wrapping a present and not giving it",
    author: "William Arthur Ward"
  },
  {
    text: "Some people want it to happen. Some wish it would happen. Others make it happen.",
    author: "Michael Jordan"
  },
  {
    text: "There is no such thing as an Ordinary Life.",
    author: "Mark Twain"
  }
];

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

interface QuoteProps {
  className?: string;
}

export default function Quote({ className }: QuoteProps) {
  const [quote, setQuote] = useState<QuoteType>(quotes[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const changeQuote = () => {
      setIsVisible(false);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
        setIsVisible(true);
      }, 300); // Match this with the transition duration
    };

    // Change quote immediately on mount
    changeQuote();

    // Set up interval to change quote every 10 seconds
    const interval = setInterval(changeQuote, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <QuoteContainer className={className} style={{ opacity: isVisible ? 1 : 0 }}>
      <QuoteText>{quote.text}</QuoteText>
      <QuoteAuthor>— {quote.author}</QuoteAuthor>
    </QuoteContainer>
  );
} 