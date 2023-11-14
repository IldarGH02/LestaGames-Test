import { Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <div className='overflow position-absolute d-flex align-items-center justify-content-center'>
            <div className='loading'>
                <Spinner
                    className='spinner'
                />
            </div>
        </div>
    )
}