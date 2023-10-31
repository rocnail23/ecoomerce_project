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



export interface Product {

 id: number,
 price: number,
 title: string,
 description: string,
 img:string[]

}


export interface ProductCart{
    product: Product,
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