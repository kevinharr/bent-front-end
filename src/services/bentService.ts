//services
import * as tokenService from './tokenService'

//types
import { BentFormData } from '../types/forms'
import { Bent } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/bents`

const getAllBents = async (): Promise<Bent[]> => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Bent[]
  } catch (error) {
    throw error
  }
}

const create = async (formData: BentFormData): Promise<Bent> => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Bent
  } catch (error) {
  throw error
  }
}

const update = async (bentData: BentFormData): Promise<Bent> => {
  try {
    const res = await fetch(`${BASE_URL}/${bentData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bentData)
    })
    return await res.json() as Bent
  } catch (error) {
   throw error
  }
}

const deleteBent = async (id: number): Promise<Bent> => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json() as Bent
  } catch (error) {
   throw (error)
  }
}

export {
  getAllBents,
  create,
  update,
  deleteBent as delete,
}

