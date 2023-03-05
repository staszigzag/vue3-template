export const required = (v: any) => (!!v && !!v.trim()) || 'Это поле обязательно'
export const onlyString = (v: any) => typeof v === 'string' || 'Это поле только для строк'

export const creatorMinLength = (n: number) => {
  return (v: any) => (!!v && v.length >= n) || `Минимальное количество символов ${  n}`
}
export const creatorMaxLength = (n: number) => {
  return (v: any) => (!!v && v.length <= n) || `Максимальное количество символов ${  n}`
}

export const validLettersAndNumbers = (v: string) => /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(v)
