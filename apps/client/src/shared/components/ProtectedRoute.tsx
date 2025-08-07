import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { authStore } from '../stores/auth.store';
import { CustomTypography } from "@poizon/ui-kit";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = observer(({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!authStore.isLoading && !authStore.isAuthenticated) {
      router.push('/login');
    }
  }, [authStore.isLoading, authStore.isAuthenticated, router]);

  if (authStore.isLoading) {
    return <CustomTypography>Загрузка...</CustomTypography>; // Здесь можно добавить компонент загрузки
  }

  return authStore.isAuthenticated ? <>{children}</> : null;
}); 