// do not use webp as it's larger in size
import { PNGS_URL } from '../../../constants/AssetConstants';

export interface merch {
    merchant: string;
    name: string;
    image: any;
    color: string;
}

export const MerchantData: merch[] = [
    {
        merchant: 'AMAZON',
        name: 'Amazon',
        image: `${PNGS_URL}amazon.png`,
        color: 'LIGHT_YELLOW',
    },
    {
        merchant: 'SWIGGY',
        name: 'Swiggy',
        image: `${PNGS_URL}swiggy.png`,
        color: 'PINK',
    },
    {
        merchant: 'ZOMATO',
        name: 'Zomato',
        image: `${PNGS_URL}zomato.png`,
        color: 'PASTEL_PURPLE',
    },
    {
        merchant: 'BIGBASKET',
        name: 'BigBasket',
        image: `${PNGS_URL}bigbasket.png`,
        color: 'LIGHT_GREEN',
    },
    {
        merchant: 'MYNTRA',
        name: 'Myntra',
        image: `${PNGS_URL}myntra.png`,
        color: 'MYNTRA',
    },
    {
        merchant: 'FLIPKART',
        name: 'Flipkart',
        image: `${PNGS_URL}flipkart.png`,
        color: 'PASTEL_BLUE',
    },
];
