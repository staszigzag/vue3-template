import axiosApi from "./axios" 

const baseURL = '/api/'

export async function getHistory(name: string) {
  const { data } = await axiosApi.get(`${baseURL}rooms/${encodeURIComponent(name)}/history`)
  return data
}
