import data from './foods.json';

export const getFiberContent = (term: string): string => {
const item = data.items.find(item => item.name.toLowerCase() === term.toLowerCase());
if(item) {
    return `${item.name} contains ${item.fiber_content_g_per_100g}g fiber per 100g. `
}
else {
        return `${term} could not be found.`
}
}
