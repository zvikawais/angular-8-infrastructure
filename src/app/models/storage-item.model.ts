export interface StorageItem<T> {
    Key: string;
    Value: T;
    ExpirationDate: Date;
}
