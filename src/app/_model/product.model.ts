import { FileHandle } from "./file-handle.model"

export interface Product {
    productId: number
    productName: string,
    productDescription: string,
    price: number,
    features: string,
    productStatus: string
    productImages: FileHandle[]

}