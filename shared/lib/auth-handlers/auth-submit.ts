import { registerUser } from '@/actions';
import toast from 'react-hot-toast';
import { TFormRegisterValues } from 'shared/components/shared/auth-modal/forms';

export const authSubmit = async (data: TFormRegisterValues, openForm: () => void) => {
  try {
    const resp = await registerUser({
      email: data.email,
      password: data.password,
    });
    if (resp.success === false) {
      if (resp.message === 'На вашу почту уже был отправлен код') {
        openForm();
      }
      return toast.error(`${resp.message}`, {
        icon: '❌',
      });
    } else {
      openForm();
      return toast.success('Код регистрации отправлен на вашу почту📝', {
        icon: '✅',
      });
    }
  } catch (error) {
    throw error;
  }
};
