
import { Container, Typography, Box } from '@mui/material';
import UserForm from '@/components/UserForm';

export const metadata = {
  title: 'Admin | NextDash',
};

export default function AdminPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Typography variant="h4" gutterBottom>Admin Panel</Typography>
      <Typography variant="body2" gutterBottom>Manage your profile:</Typography>
      <Box mt={4}>
        <UserForm />
      </Box>
    </Container>
  );
}
