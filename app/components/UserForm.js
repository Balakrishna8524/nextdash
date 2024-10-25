// components/UserForm.js
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

export default function UserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    alert('User updated!');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        fullWidth
        {...register('name', { required: true })}
        error={!!errors.name}
        helperText={errors.name ? 'Name is required' : ''}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        {...register('email', { required: true })}
        error={!!errors.email}
        helperText={errors.email ? 'Email is required' : ''}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit">Save</Button>
    </Box>
  );
}
