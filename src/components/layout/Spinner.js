import spinner from './assets/spinner-github-finder.gif'

export const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img
                width={180}
                className="text-center mx-auto"
                src={spinner}
                alt="Loading..." />
        </div>
    )
}
