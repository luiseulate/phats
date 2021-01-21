import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const StravaTime = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const tiempo = (data?.time * 0.000277778).toFixed(0)
    return (tiempo ? tiempo : '---') 
}

export default StravaTime