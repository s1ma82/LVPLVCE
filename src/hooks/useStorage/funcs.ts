import { Categories } from '@_types/categories';


/**
 *  @param element - Name of changed element
 *  @returns Function returns a status in boolean type 
 */

export function setItem(
    element: string | null = null,
    value: object | string | null = null,
    category:  Categories

): boolean {

    if (!element || !value) return false
    
    try {
        // element = `${category}.${element}`
        value = typeof value === 'object' ? JSON.stringify(value) : value

        console.log(`${category}.${element} = ${value}`)
        // localStorage.setItem(element, value)

        return true
    } catch (e) {
        console.error(e.message)
        return false
    }
    
}
export function getItem(
    element: string | null = null,
    category: Categories
): object | string | null{

    console.log(`GETITEM: ${category}.${element}`)    
    return {}
    
}