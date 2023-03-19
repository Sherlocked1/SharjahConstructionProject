import {User} from '../../core/models/auth'

export interface RegisterDTO {
    message:string,
    user:User
}

export interface RegisterFormData {
    name?:string,
    email?:string,
    password?:string,
    confirmPassword?:string,
}