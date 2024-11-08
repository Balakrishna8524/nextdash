// app/dashboard/[section]/page.tsx

import React from 'react';
import { useParams } from 'next/navigation'; // If needed in client component

interface PageProps {
  params: {
    section: string;
  };
}

const DashboardSectionPage = ({ params }: PageProps) => {
  const { section } = params;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard Section: {section}</h1>
      {/* Add more dynamic logic based on section if needed */}
      {section === 'overview' && <p>This is the overview page content.</p>}
    </div>
  );
};

export default DashboardSectionPage;

