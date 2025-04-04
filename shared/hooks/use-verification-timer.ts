import { useEffect, useRef, useState } from 'react';

export const useVerificationTimer = (
  createVerificationCode: (mail: string) => void,
  mail: string,
  openConfirnEmail: boolean,
) => {
  const [time, setTime] = useState(59);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTime(59);
    const newInterval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    intervalRef.current = newInterval;
  };

  const handlerSendCode = () => {
    createVerificationCode(mail);
    startTimer();
  };

  useEffect(() => {
    if (openConfirnEmail) {
      startTimer();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [openConfirnEmail]);

  return { time, handlerSendCode };
};
