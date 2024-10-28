
import { Container, Typography } from '@mui/material';

type Props = {
  params: {
    section: string;
  };
};

// Pre-render these 3 paths: /overview, /users, /settings
export async function generateStaticParams() {
  return ['overview', 'users', 'settings'].map((section) => ({
    section,
  }));
}

export default async function DashboardSection({ params }: Props) {
  const { section } = params;

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>
        {section.charAt(0).toUpperCase() + section.slice(1)} Section
      </Typography>
      <Typography>This is the dynamic content for `{section}`.</Typography>
    </Container>
  );
}

