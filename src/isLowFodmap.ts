import React from 'react';
import data from './foods.json';

export const isLowFodmap = (term: string): string => {
const item = data.items.find(item => item.name.toLowerCase() === term.toLowerCase());

if (item) {
    return item.is_low_fodmap? 'This item is low FODMAP.': 'Do not eat this item on a low FODMAP diet. '; 
}
else {
    return 'It is unkwown whether this item is low FODMAP. '; 
}
}
