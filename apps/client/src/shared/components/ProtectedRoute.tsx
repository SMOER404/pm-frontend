import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { authStore } from '../stores/auth.store';

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
    return <div>Загрузка...</div>; // Здесь можно добавить компонент загрузки
  }

  return authStore.isAuthenticated ? <>{children}</> : null;
}); 