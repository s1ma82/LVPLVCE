import  {Categories}  from '@_types/categories';
import { setItem, getItem } from "./funcs"

export default (category: Categories): Function[] => {

    return [
        (   
            element: string | null = null,
        ) => getItem(element, category),
        (
            element: string | null = null,
            value: object | string | null = null,
        ) => setItem(element, value, category)

    ]
}