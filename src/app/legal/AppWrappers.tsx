'use client';
import React, { ReactNode } from 'react';
import '@/styles/App.css';
import '@/styles/Contact.css';
// import '@asseinfo/react-kanban/dist/styles.css';
// import 'styles/Plugins.css';
import '@/styles/MiniCalendar.css';
import '@/styles/index.css';

import dynamic from 'next/dynamic';
interface AppWrappersProps {
  children: ReactNode;
}
const _NoSSR = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

export default function AppWrappers({ children }:AppWrappersProps ) {
  return <NoSSR>{children}</NoSSR>;
}
