/**
 * Counseling Content Component (/counseling page)
 * 
 * Displays detailed information about counseling services, including:
 * - Introduction and experience overview
 * - Areas of specialization (interactive list)
 * - Treatment preferences (interactive list)
 * - Callout for free consultation
 */
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import PageWithQuote from '../common/PageWithQuote';

// Shared styled components (can be moved to a shared file later if needed)
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: 0.5rem;
`;

const IntroText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 0.8rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns */
  }
`;

// Updated ListItem to be clickable and styled
const ListItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: box-shadow 0.1s ease; // Only transition shadow on hover now

  &:hover {
      transform: translateY(-2px);
      box-shadow: 0 3px 6px rgba(0,0,0,0.08);
  }
`;

const ItemName = styled.div`
  padding: 0.8rem 1rem;
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;
`;

// Styled component for the description container, managing the animation
const DescriptionContainer = styled.div<{ $isOpen: boolean }>`
  max-height: ${props => props.$isOpen ? '500px' : '0'}; // Animate max-height. Adjust 500px if needed.
  overflow: hidden;
  transition: max-height 0.3s ease-in-out; // Smooth transition for height
`;

// Unchanged description styles, but now inside the container
const ItemDescription = styled.div`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  color: #555;
  background-color: #fff;
  border-top: 1px dashed #eee;
  line-height: 1.5;
`;

const Callout = styled.div`
  background-color: ${theme.colors.secondary}20; /* Light green background */
  border: 1px solid ${theme.colors.secondary}80;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  text-align: center;
  margin-top: 2rem;

  h3 {
    color: ${theme.colors.primary};
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  a {
    font-weight: 600;
    color: ${theme.colors.secondary};
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
        text-decoration: underline;
    }
  }
`;

// Updated Schema data with descriptions (PLACEHOLDERS - REPLACE THESE)
const specializations = [
  { name: "ADHD", description: "Attention-Deficit/Hyperactivity Disorder management strategies and support." },
  { name: "Anger management", description: "Techniques to understand triggers and control angry responses." },
  { name: "Anxiety", description: "Coping mechanisms for various anxiety disorders (generalized, social, panic)." },
  { name: "Asperger's", description: "Support for navigating social interactions and understanding autistic traits." },
  { name: "Behavioral issues", description: "Addressing disruptive or challenging behaviors in children and adults." },
  { name: "Bipolar", description: "Managing mood swings and maintaining stability with Bipolar Disorder." },
  { name: "Child/adolescent", description: "Specialized therapy addressing the unique challenges of youth." },
  { name: "Coping skills", description: "Developing healthy strategies to deal with stress and adversity." },
  { name: "Depression", description: "Therapeutic approaches to alleviate symptoms of depression." },
  { name: "Divorce", description: "Navigating the emotional and practical challenges of separation and divorce." },
  { name: "Parenting", description: "Support and strategies for effective and positive parenting." },
  { name: "Oppositional defiance", description: "Addressing patterns of defiant and hostile behavior, primarily in youth." },
  { name: "OCD", description: "Obsessive-Compulsive Disorder treatment, often involving ERP techniques." },
  { name: "Life transitions", description: "Adjusting to major life changes like career shifts, relocation, or loss." },
  { name: "Grief", description: "Processing loss and navigating the stages of grief." },
  { name: "Emotional disturbance", description: "Support for individuals experiencing significant emotional regulation challenges." },
  { name: "Peer relationships", description: "Improving social skills and navigating peer dynamics." },
  { name: "Relationship issues", description: "Addressing conflicts and improving communication in partnerships." },
  { name: "School issues", description: "Dealing with academic stress, bullying, or school avoidance." },
  { name: "Self-esteem", description: "Building confidence and a positive self-image." },
  { name: "Self-harming", description: "Developing safer coping mechanisms to replace self-injurious behaviors." },
  { name: "Stress", description: "Techniques for managing acute and chronic stress." },
  { name: "Suicidal ideation", description: "Providing support and safety planning for individuals experiencing suicidal thoughts." },
  { name: "Teen violence", description: "Addressing issues related to aggression and violence in adolescents." }
];

const preferences = [
  { name: "CBT", description: "Cognitive Behavioral Therapy focuses on identifying and changing negative thought patterns and behaviors." },
  { name: "Eclectic", description: "An approach that integrates techniques from various therapeutic orientations based on client needs." },
  { name: "MBCT", description: "Mindfulness-Based Cognitive Therapy combines cognitive therapy with mindfulness practices." },
  { name: "Person-centered", description: "Emphasizes empathy, genuineness, and unconditional positive regard in the therapeutic relationship." },
  { name: "Psychoanalytic", description: "Explores unconscious thoughts and past experiences to understand current behaviors." },
  { name: "Psychodynamic", description: "Similar to psychoanalytic but often shorter-term, focusing on self-awareness of unconscious patterns." },
  { name: "Reality therapy", description: "Focuses on present choices and taking responsibility for one's actions to meet basic needs." },
  { name: "SFBT", description: "Solution-Focused Brief Therapy concentrates on identifying solutions and strengths rather than problems." }
];

export default function CounselingContent() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const [selectedPreference, setSelectedPreference] = useState<string | null>(null);

  const handleSpecializationClick = (name: string) => {
    setSelectedSpecialization(selectedSpecialization === name ? null : name);
  };

  const handlePreferenceClick = (name: string) => {
    setSelectedPreference(selectedPreference === name ? null : name);
  };

  return (
    <PageWithQuote title="Effective Counseling Solutions">
      <Section>
        <SectionTitle>Introduction</SectionTitle>
        <IntroText>
          With over 10 years of dedicated experience, Colleen Neal provides compassionate and effective counseling services. 
          Whether you're navigating life transitions, managing stress, improving relationships, or seeking support for mental health challenges, 
          Colleen offers a safe and confidential space to explore your concerns and develop practical coping strategies. 
          Her approach is tailored to each individual, drawing from various therapeutic techniques to best meet your needs.
        </IntroText>
      </Section>

      <Section id="specialty-areas">
        <SectionTitle>Areas of Specialization</SectionTitle>
        <BulletList>
          {specializations.map(item => (
            <ListItem key={item.name} onClick={() => handleSpecializationClick(item.name)}>
              <ItemName>{item.name}</ItemName>
              <DescriptionContainer $isOpen={selectedSpecialization === item.name}>
                <ItemDescription>{item.description}</ItemDescription>
              </DescriptionContainer>
            </ListItem>
          ))}
        </BulletList>
      </Section>

      <Section id="treatment-preferences">
        <SectionTitle>Treatment Preferences</SectionTitle>
        <BulletList>
          {preferences.map(item => (
            <ListItem key={item.name} onClick={() => handlePreferenceClick(item.name)}>
               <ItemName>{item.name}</ItemName>
               <DescriptionContainer $isOpen={selectedPreference === item.name}>
                 <ItemDescription>{item.description}</ItemDescription>
               </DescriptionContainer>
            </ListItem>
          ))}
        </BulletList>
      </Section>

      <Section>
        <Callout>
          <h3>Ready for a Free Consultation?</h3>
          <p>Take the first step towards positive change.</p>
          <a href="tel:281-508-2566">Call: 281-508-2566</a>
        </Callout>
      </Section>

    </PageWithQuote>
  );
} 