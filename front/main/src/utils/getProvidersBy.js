export function getProvidersBy(providers, by) {
  return providers.reduce((accumulator, current) => {
    const code = current[by]
    if (!accumulator[code]) {
      accumulator[code] = {
        ...current
      }
    }

    return accumulator
  }, {})
}
