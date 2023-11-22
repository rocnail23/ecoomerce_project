export interface Login {
    password: string,
    email: string
}


export interface Register {
    name: string,
    email: string,
    password: string,
    password2?: string
}



export interface Product extends CreateProduct {

 id: number,
 Images: Img[]

}

export interface CreateProduct {
 price: number,
 title: string,
 description: string,
}


export interface ProductCart{
    Product: Product,
    quantity: number
}

export interface User {
    name?:string,
    email?:string,
    valid?: boolean,
    role?: "admin" | "user"
}

export interface Message {
    message?: string,
    category?: string
}

export interface Img {

    id:number,
    url:string

}