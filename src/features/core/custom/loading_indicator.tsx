import Lottie from 'lottie-react'
import loadingAnimation from '../../../lottie animations/loading.json'

const LoadingIndicator = () => {
    return (
        <div>
            <div className='absolute left-0 top-0 h-screen w-screen bg-white opacity-60 blur-lg z-10'></div>
            <div className='absolute left-0 top-0 h-screen w-screen bg-transparent z-20'>
                <Lottie className='h-full z-20' height={200} width={200} animationData={loadingAnimation} />
            </div>
        </div>

    )
}

export default LoadingIndicator