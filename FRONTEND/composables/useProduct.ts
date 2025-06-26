import type { Item } from "~/models/Item"

export const useProducts = async() => {
	const { data, error, pending } = await useFetch<{ products: Item[] }>('https://dummyjson.com/products/category/smartphones')

	return data.value?.products
}