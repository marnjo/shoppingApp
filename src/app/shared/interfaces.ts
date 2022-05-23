export interface IProduct{
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    amount?: number;
}

export interface IResponseFirebase {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  expiresIn: string;
}