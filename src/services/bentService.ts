import * as tokenService from './tokenService'
import { EditBentFormData, NewBentFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_APP_BACK_END_SERVER_URL}/api/bents`

const getAllBents = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (formData: NewBentFormData): Promise<any> => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (bentData: EditBentFormData): Promise<any> => {
  try {
    const res = await fetch(`${BASE_URL}/${bentData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteBent = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllBents,
  create,
  update,
  deleteBent
}

