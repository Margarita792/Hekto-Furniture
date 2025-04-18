import { createSlice } from '@reduxjs/toolkit';
import { TypeProducts, TypeProductsQuantity, TypeFavorites, TypeUserInterface, TypeBlog, typeOfferProduct,TypeBlogComment } from '../interfaces/productInterface';
import { RootState } from './store';

interface ProductsState {
    products: TypeProducts[];
    carts: TypeProductsQuantity[];
    search: string;
    minPrice: number;
    maxPrice: number;
    ratingFilter: number[];
    favorites: TypeFavorites[];
    qtyProduct: number;
    changeCard: "row" | "card";
    newUser: TypeUserInterface[];
    authoriz: TypeUserInterface | null;
    blog: TypeBlog[];
    offerProduct: typeOfferProduct[];
    blogComment: TypeBlogComment[];
};

const initialProducts: ProductsState = {
    products: [
        {
            id: 1,
            img: 'https://i.imgur.com/DUustYp.jpeg',
            title: 'Green DIY furniture',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 82.90,
            oldPrice: 100.00,
            ratingProduct: 3,
        },
        {
            id: 2,
            img: 'https://i.imgur.com/TvxczYD.jpeg',
            title: 'Fusion High Fashion',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 15.00,
            oldPrice: 30.00,
            ratingProduct: 5,
        },
        {
            id: 3,
            img: 'https://i.imgur.com/Ez8gWe9.jpeg',
            title: 'Unique Furnitture Restor',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 99.00,
            oldPrice: 150.00,
            ratingProduct: 4,
        },
        {
            id: 4,
            img: 'https://i.imgur.com/3ORtytL.jpeg',
            title: 'Dream Furnitture Flipping',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 75.00,
            oldPrice: 90.00,
            ratingProduct: 4,
        },
        {
            id: 5,
            img: 'https://i.imgur.com/IlIXEYe.jpeg',
            title: 'Young Repurposed',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 26.00,
            oldPrice: 42.00,
            ratingProduct: 3,
        },
        {
            id: 6,
            img: 'https://i.imgur.com/S1tIwF6.jpeg',
            title: 'Vel elit euismod',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 26.00,
            oldPrice: 42.00,
            ratingProduct: 2,
        },
        {
            id: 7,
            img: 'https://i.imgur.com/TvxczYD.jpeg',
            title: 'Green DIY furniture',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 26.00,
            oldPrice: 42.00,
            ratingProduct: 5,
        },
        {
            id: 8,
            img: 'https://i.imgur.com/DUustYp.jpeg',
            title: 'Comfort Handy Craft',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 22.00,
            oldPrice: 35.00,
            ratingProduct: 4,
        },
        {
            id: 9,
            img: 'https://i.imgur.com/S1tIwF6.jpeg',
            title: 'Cantilever chair',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 45.00,
            oldPrice: 85.00,
            ratingProduct: 3,
        },
        {
            id: 10,
            img: 'https://i.imgur.com/3ORtytL.jpeg',
            title: 'Fusion High Fashion',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 12.00,
            oldPrice: 45.00,
            ratingProduct: 5,
        },

        {
            id: 11,
            img: 'https://i.imgur.com/IlIXEYe.jpeg',
            title: 'Unique Furnitture Restor',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 12.00,
            oldPrice: 45.00,
            ratingProduct: 2,
        },
        {
            id: 12,
            img: 'https://i.imgur.com/DUustYp.jpeg',
            title: 'Green DIY furniture',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            code: "Y523201",
            price: 82.90,
            oldPrice: 100.00,
            ratingProduct: 3,
        },
    ],
    carts: [],
    favorites: [],
    search: "",
    minPrice: 0,
    maxPrice: 0,
    ratingFilter: [],
    qtyProduct: 7,
    changeCard: "row",
    newUser: [],
    authoriz: null,
    blog: [
        {
            id:1,
            img: "https://i.imgur.com/d2kb5mb.jpeg",
            author: "SaberAli",
            date: '21 August,2020',
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            linkReadMore: "Read more"
        },
        {
            id:2,
            img: "https://i.imgur.com/PGB6trs.jpeg",
            author: "Surfauxion",
            date: '21 August,2020',
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            linkReadMore: "Read more"
        },
        {
            id:3,
            img: "https://i.imgur.com/IUTjNn5.jpeg",
            author: "SaberAli",
            date: '21 August,2020',
            title: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            linkReadMore: "Read more"
        },
        {
            id:4,
            img: "https://i.imgur.com/KooLMSr.jpeg",
            author: "Surf Auxion",
            date: '09 August,2020',
            title: "Mauris at orci non vulputate diam tincidunt nec.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
            linkReadMore: "Read more"
        },
        {
            id:5,
            img: "https://i.imgur.com/qv19cmD.jpeg",
            author: "Surf Auxion",
            date: '09 August,2020',
            title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
            linkReadMore: "Read more"
        },
        {
            id:6,
            img: "https://i.imgur.com/kloFA1d.jpeg",
            author: "Surf Auxion",
            date: '09 August,2020',
            title: "Sit nam congue feugiat nisl, mauris amet nisi.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
            linkReadMore: "Read more"
        }
    ],
    offerProduct:[
        {
            img:"https://i.imgur.com/dgoV3wG.jpeg",
            title:"Duis lectus est.",
            minPrice:12.00,
            maxPrice:15.00,
        },
        {
            img:"https://i.imgur.com/M8cjvYr.jpeg",
            title:"Sed placerat.",
            minPrice:10.00,
            maxPrice:18.00,
        },
        {
            img:"https://i.imgur.com/cCQxP9y.jpeg",
            title:"Netus proin.",
            minPrice:18.00,
            maxPrice:21.00,
        },{
            img:"https://i.imgur.com/bvyoKSk.jpeg",
            title:"Platea in.",
            minPrice:13.00,
            maxPrice:19.00,
        }
    ],
    blogComment: [],
};

export const productsSlice = createSlice({
    name: "storageProducts",
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => {
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id === action.payload.id) {
                    state.carts[i].quantity++;
                    return;
                };
            };
            state.carts.push({ ...action.payload, quantity: 1 });
        },
        deleteCart: (state) =>{
            state.carts = [];
        },
        addFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        deleteProductCart: (state, action) => {
            state.carts = action.payload;
        },
        deleteProductWishlist: (state, action) => {
            state.favorites = action.payload;
        },
        increment: (state, action) => {
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id === action.payload.id) {
                    state.carts[i].quantity++;
                };
            };
        },
        decrement: (state, action) => {
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id === action.payload.id) {
                    state.carts[i].quantity--;
                }
                if (state.carts[i].quantity <= 0) {
                    let copyCarts = state.carts.slice();
                    const copyCartsFilter = copyCarts.filter(item => {
                        return item.id !== state.carts[i].id;
                    })
                    state.carts = copyCartsFilter
                }
            };
        },
        setQuantity: (state, action) => {
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id === action.payload.id) {
                    state.carts[i].quantity = action.payload.value;
                };
            };
        },
        searchTitle: (state, action) => {
            state.search = action.payload.value;
        },
        searchMinPrice: (state, action) => {

            state.minPrice = parseInt(action.payload.value);
        },
        searchMaxPrice: (state, action) => {
            state.maxPrice = parseInt(action.payload.value);
        },
        ratingChecked: (state, action) => {
            if (state.ratingFilter.includes(action.payload.checked)) {
                state.ratingFilter.filter((item) => {
                    return item != action.payload.checked
                })
            } else {
                state.ratingFilter.push(action.payload.checked)
            }
        },
        qtyProduct: (state, action) => {
            state.qtyProduct = action.payload.value;
        },
        changeCard: (state, action) => {
            state.changeCard = action.payload;
        },
        registerNewUser: (state, action) => {
            state.newUser.push(action.payload);
        },
        setAuthoriz: (state, action) => {
            for (let i = 0; i < state.newUser.length; i++) {
                if (state.newUser[i].login == action.payload.login && state.newUser[i].password == action.payload.password) {
                    state.authoriz = state.newUser[i]
                }
            }
        },
        addBlogComment:(state,action)=>{
            state.blogComment.push(action.payload);
        }
    }
});

export const selectProducts = (state: RootState) => state.storageProducts.products;
export const selectSearch = (state: RootState) => state.storageProducts.search;
export const selectMinPrice = (state: RootState) => state.storageProducts.minPrice;
export const selectMaxPrice = (state: RootState) => state.storageProducts.maxPrice;
export const selectRating = (state: RootState) => state.storageProducts.ratingFilter;
export const selectCarts = (state: RootState) => state.storageProducts.carts;
export const selectFavorites = (state: RootState) => state.storageProducts.favorites;
export const selectQtyProduct = (state: RootState) => state.storageProducts.qtyProduct;
export const selectChangeCard = (state: RootState) => state.storageProducts.changeCard;
export const selectNewUser = (state: RootState) => state.storageProducts.newUser;
export const selectAuthoriz = (state: RootState) => state.storageProducts.authoriz;
export const selectBlog = (state: RootState) => state.storageProducts.blog;
export const selectOfferProduct = (state: RootState) => state.storageProducts.offerProduct;
export const selectBlogComment = (state: RootState) => state.storageProducts.blogComment;
export const productsReducer = productsSlice.reducer;
export const { addProduct, deleteProductCart, deleteProductWishlist, increment, decrement, setQuantity, searchTitle, searchMinPrice, searchMaxPrice, ratingChecked, addFavorites, qtyProduct, changeCard, registerNewUser, setAuthoriz,deleteCart,addBlogComment } = productsSlice.actions;
