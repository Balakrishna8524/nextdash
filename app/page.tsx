
import { Typography, Container, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h3" gutterBottom>Welcome to NextDash</Typography>
      <Typography variant="body1" paragraph>
        This is a minimal dashboard starter built with Next.js App Router & Material UI.
      </Typography>

      <Box mt={4}>
        <Link href="/dashboard/overview">
          <Button variant="contained" size="large">Go to Dashboard</Button>
        </Link>
      </Box>
    </Container>
  );
}
