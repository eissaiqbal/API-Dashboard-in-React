import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Custom hook for fetching data from an API
 * @param {string} url - The API endpoint URL
 * @returns {object} - { data, loading, error, refetch }
 */
export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await axios.get(url, {
        timeout: 10000, // 10 seconds timeout
      })
      
      setData(response.data)
    } catch (err) {
      setError({
        message: err.response?.data?.message || err.message,
        status: err.response?.status,
      })
      setData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (url) {
      fetchData()
    }
  }, [url])

  const refetch = () => {
    fetchData()
  }

  return { data, loading, error, refetch }
}