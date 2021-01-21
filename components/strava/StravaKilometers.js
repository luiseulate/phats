import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const StravaKilometers = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const distancia = (data?.distance / 1000).toFixed(0)
    return (distancia ? distancia : '---')
}

export default StravaKilometers