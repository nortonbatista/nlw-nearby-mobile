import { Categories, CategoryProps } from "@/components/categories";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Home() {
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [category, setCategory] = useState('')

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')
      setCategories(data)
      setCategory(data[0].id)
    } catch(error) {
      console.error(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <View style={{ flex: 1}}>
      <Categories data={categories} selected={category} onSelect={setCategory} />
    </View>
  )
}