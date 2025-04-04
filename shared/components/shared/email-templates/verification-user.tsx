import React from 'react';

interface Props {
  code: string;
  userId: number;
}

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  `https://${process.env.VERCEL_URL}` ||
  'http://localhost:3000';
export const VerificationUserTemplate: React.FC<Props> = ({ code, userId }) => (
  <div>
    <p>
      Код подтверждения: <h2>{code}</h2>
    </p>
    <p>
      <a
        href={`${baseUrl}${process.env.NEXT_PUBLIC_API_URL}/auth/verify?code=${code}&userId=${userId}`}>
        Подтвердить регистрацию
      </a>
    </p>
  </div>
);
