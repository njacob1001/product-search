export interface ServiceResponse<T = unknown> {
  isSuccess: boolean
  message?: string
  code?: number
  data?: T
}

export const httpGet = async <T>(path: string, query?: any): Promise<T> => {
  try {
    const qs = new URLSearchParams(query)
    const str = await fetch(`${import.meta.env.MELI_API}/${path}${qs ? `?${qs}` : ''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const response = await str.json()

    return response
  } catch (error: any) {
    throw new Error('error.http.generic')
  }
}
