import { useEffect, useState } from 'react'
import { getWedding } from '@/api/wedding'
import { Wedding } from '@/models/wedding'

function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    getWedding()
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('에러 발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    wedding,
    loading,
    error,
  }
}

export default useWedding