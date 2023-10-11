export const fetchCharacters = async ({ page }: { page: number }) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    const data = await response.json()
    const characters = data.results.map((character: any) => ({
      id: character.id,
      name: character.name,
      image: character.image
    }))
    return { characters, info: data.info }
  } catch (error) {
    throw new Error('Fail to fetch characters')
  }
}
