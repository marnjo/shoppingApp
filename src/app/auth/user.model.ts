export class User {
    constructor(
        // public name: string,
        public email: string,
        public token: string,
        public expirationTime: Date
    ) {}
}