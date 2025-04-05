import { verifyEmail } from '@/actions';
import { signIn } from 'next-auth/react';
import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';

interface Props {
  mail: string;
  inputValue: string;
  setIsCorrect: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
  setLoadingSubmit: (value: SetStateAction<boolean>) => void;
  userPass: string;
}

export const handlerSubmit = async ({
  mail,
  inputValue,
  setIsCorrect,
  onClose,
  setLoadingSubmit,
  userPass,
}: Props) => {
  try {
    setLoadingSubmit(true);
    const resp = await verifyEmail({ mail, verificationCode: inputValue });
    if (resp.success === false) {
      if (resp.message === 'Вы уже ввели код подтвержения') {
        setIsCorrect(true);
        onClose();
        return toast.success(resp.message);
      }
      setIsCorrect(false);
      return toast.error(resp.message, {
        icon: '❌',
      });
    } else {
      const signInResp = await signIn('credentials', {
        redirect: false,
        email: mail,
        password: userPass,
      });
      if (signInResp?.ok) {
        setIsCorrect(true);
        onClose?.();
      } else {
        setIsCorrect(false);
        return toast.error('Ошибка при авторизации');
      }
      return toast.success(resp.message);
    }
  } catch (error) {
    throw error;
  } finally {
    setLoadingSubmit(false);
  }
};
