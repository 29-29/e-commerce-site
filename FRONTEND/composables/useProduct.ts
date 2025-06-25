import type { Item } from "~/models/Item"

export const useProducts = async() => {
	const { data, error, pending } = await useFetch('https://fakestoreapi.com/products/category/men\'s clothing')

	return { products: data, error, pending }
}