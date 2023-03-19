export interface LoginDTO {
    token?:string,
    errorMessage?:string,
    user:User,
}

export interface User{
    email:string,
    name:string
}