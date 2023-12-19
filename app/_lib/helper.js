/*
    FORMATS THE GIVEN PRICE IN INDIAN CURRENCY
*/

export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
    return newNumber;
}
