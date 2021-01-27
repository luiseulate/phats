import useSWR from 'swr'
import fetcher from '../../lib/fetcher'
import { Loader } from '../Loader'

const StravaTime = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const tiempo = data
    const timeConverted = (data?.time * 0.000277778).toFixed(0)
    return (tiempo ? timeConverted : <Loader />) 
}

export default StravaTime