export declare class AuthService {
    jwtService: any;
    jwtOptions: {
        secret: string;
        verify: {
            algorithms: string[];
        };
    };
    constructor();
    login(user: any): {
        access_token: any;
    };
    validate(payload: any): {
        userId: any;
        username: any;
    };
}
