import Home from './home/sections/main';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "GEO ENVIRONMENTAL",
  description: "Made using React NEXT App Framework",
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return (
    <Home/>
  );
}
