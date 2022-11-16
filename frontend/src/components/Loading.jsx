export default function LoadingScreen() {
    return(
        <div className="bg-cinder dark:bg-cinder relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className=" relative sm:mx-auto sm:max-w-lg sm:px-10">
                <div className="from-kimberly via-kimberly to-careys-pink bg-gradient-to-r bg-clip-text text-5xl font-inter font-semibold text-transparent antialiased">Albert Nieto</div>
                <a href="https://localhost.com/portfolio" className="text-kimberly text-4xl font-thin font-inter">Portfolio</a>
                <a href="https://localhost.com/" className="text-careys-pink text-4xl font-thin font-inter">Website</a>
            </div>
        </div>
    )
}