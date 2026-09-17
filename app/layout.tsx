import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica, CA',
  description: 'Warm, grounded therapy for adults in Santa Monica and across California, with a focus on anxiety, trauma, burnout, perfectionism, and high internal pressure.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
