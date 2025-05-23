// src/lib/data.ts

export const SPECIALIZATIONS = [
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
] as const;

export const TREATMENT_PREFERENCES = [
  { name: "CBT", description: "Cognitive Behavioral Therapy focuses on identifying and changing negative thought patterns and behaviors." },
  { name: "Eclectic", description: "An approach that integrates techniques from various therapeutic orientations based on client needs." },
  { name: "MBCT", description: "Mindfulness-Based Cognitive Therapy combines cognitive therapy with mindfulness practices." },
  { name: "Person-centered", description: "Emphasizes empathy, genuineness, and unconditional positive regard in the therapeutic relationship." },
  { name: "Psychoanalytic", description: "Explores unconscious thoughts and past experiences to understand current behaviors." },
  { name: "Psychodynamic", description: "Similar to psychoanalytic but often shorter-term, focusing on self-awareness of unconscious patterns." },
  { name: "Reality therapy", description: "Focuses on present choices and taking responsibility for one's actions to meet basic needs." },
  { name: "SFBT", description: "Solution-Focused Brief Therapy concentrates on identifying solutions and strengths rather than problems." }
] as const;

export const INSURANCE_PROVIDERS = [
  {
    id: '1',
    name: 'Aetna',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '2',
    name: 'Blue Cross Blue Shield',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '3',
    name: 'Cigna',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '4',
    name: 'UnitedHealthcare',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '5',
    name: 'Medicare',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '6',
    name: 'Medicaid',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '7',
    name: 'Tricare',
    accepted: true,
    notes: 'In-network provider'
  },
  {
    id: '8',
    name: 'Kaiser Permanente',
    accepted: false,
    notes: 'Out-of-network provider'
  }
];

// Types for the static data
export type Specialization = typeof SPECIALIZATIONS[number];
export type TreatmentPreference = typeof TREATMENT_PREFERENCES[number];

// Contact form submission handler
// src/lib/data.ts
// --------------------------
// Client‑side helper to POST form data to our API route
// --------------------------
import { init, send } from '@emailjs/browser';

// Initialize EmailJS with your public key
init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

/**
 * Send contact form data using EmailJS.
 * @param formData — The form values from ContactContent component
 * @returns A JSON object indicating success or failure
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<SubmitResult> {
  try {
    const response = await send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }
    );

    return { 
      success: true, 
      message: 'Your message has been sent successfully.' 
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    };
  }
}


