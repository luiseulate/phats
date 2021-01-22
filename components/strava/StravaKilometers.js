import useSWR from 'swr'
import fetcher from '../../lib/fetcher'

const StravaKilometers = () => {
    const { data } = useSWR('/api/strava', fetcher)
    const distancia = data

    // conversions
    const distanceConverted = (distancia / 1000).toFixed(0)

    return (distancia ? distancia : '---')
}

export default StravaKilometers