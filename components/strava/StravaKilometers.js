import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Loader } from '../Loader'

const StravaKilometers = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const distancia = data
    const distanceConverted = (data?.distance / 1000).toFixed(0)
    return (distancia ? distanceConverted : <Loader />)
}

export default StravaKilometers
