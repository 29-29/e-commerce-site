import type { Item } from "~/models/Item"

export const useProducts = async() => {
	const { data, error, pending } = await useFetch<{ products: Item[] }>('https://dummyjson.com/products/category/smartphones')

	return { data, error, pending }
}

export const useProduct = async(id: number) => {
	const { data, error, pending } = await useFetch<Item>(`https://dummyjson.com/products/${id}`)
	
	return { data, error, pending }
}