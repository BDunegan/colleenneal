import React from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import Quote from './Quote';

const PageContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;
`;

interface PageWithQuoteProps {
  title: string;
  children: React.ReactNode;
}

export default function PageWithQuote({ title, children }: PageWithQuoteProps) {
  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <Quote />
      {children}
    </PageContainer>
  );
} 