import { LocalStorageError } from './local-storage.error';

export class LocalStorageHelper {
  public static set<DataType>(key: string, data: DataType): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static get<DataType>(key: string): DataType {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) {
      throw new LocalStorageError(`No data found for key: ${key}`);
    }
    return JSON.parse(jsonData);
  }

  public static remove(key: string): void {
    localStorage.removeItem(key);
  }
}
