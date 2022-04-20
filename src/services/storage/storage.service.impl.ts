import { StorageKey, StorageService } from './storage.service';

export class StorageServiceImpl implements StorageService {
   get(key: keyof typeof StorageKey): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }

   set(key: keyof typeof StorageKey, value: any) {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

   remove(key: keyof typeof StorageKey) {
    localStorage.removeItem(key);
  }
}
