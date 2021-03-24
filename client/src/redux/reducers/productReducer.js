import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const getProductDeatailsReducer = (state = { products: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
            };
        case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case actionTypes.GET_PRODUCTS_DETAILS_RESET:
            return {
                product: {},
            };
        default:
            return state;
    }
};

export const getFeaturedProductsReducer = (
    state = { products: [] },
    action
) => {
    switch (action.type) {
        case actionTypes.GET_FEATURED_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case actionTypes.GET_FEATURED_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_FEATURED_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
