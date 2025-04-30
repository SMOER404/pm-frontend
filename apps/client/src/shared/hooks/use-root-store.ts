import { useContext } from 'react';
import { RootStoreContext } from '@/shared/stores/root-store';

export function useRootStore() {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }
  return store;
} 