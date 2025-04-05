import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export const useHeaderNotifications = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    let toastMessage = '';
    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправленна на почту';
    }
    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }
    if (searchParams.has('verifiedError') && router) {
      setTimeout(() => {
        router.replace('/');
        toast.error('Ошибка при верификации кода', {
          duration: 3000,
        });
      }, 300);
      return;
    }

    if (toastMessage && router) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 300);
    }
  }, []);
};
