
export interface TypeProducts {
    id: number,
    img: string,
    title: string,
    description: string,
    code: string,
    price: number,
    oldPrice: number,
    ratingProduct: number,
}
export interface TypeProductsQuantity extends TypeProducts {

    quantity: number,
}

export interface TypeFavorites extends TypeProducts {
}

export interface TypeUserInterface {
    firstName: string,
    lastName: string,
    email: string,
    login: string,
    password: string,
    balance: number;
}
export interface TypeBlog {
    id: number,
    img: string,
    author: string,
    date: string,
    title: string,
    description: string,
    linkReadMore: string
}
export interface typeOfferProduct {
    img: string,
    title: string,
    minPrice: number,
    maxPrice: number,
}
export interface TypeBlogComment {
    name: string,
    email: string,
    comment: string,
}