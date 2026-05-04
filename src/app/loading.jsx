

const loading = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-300">


                <div className="text-center space-y-6 animate-pulse">


                    <div className="h-10 w-64 bg-gray-300 rounded mx-auto"></div>


                    <div className="h-5 w-80 bg-gray-200 rounded mx-auto"></div>


                    <div className="flex justify-center gap-3 mt-6">
                        <div className="h-10 w-32 bg-gray-300 rounded"></div>
                        <div className="h-10 w-32 bg-gray-200 rounded"></div>
                    </div>


                    <div className="mt-10">
                        <div className="w-72 h-72 bg-gray-300 rounded-2xl mx-auto"></div>
                    </div>


                    <p className="text-gray-500 mt-4 text-sm">
                        Loading your experience...
                    </p>

                </div>
            </div>
        </div>
    );
};

export default loading;