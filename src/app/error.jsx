"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-md bg-base-100 p-8 rounded-2xl shadow-xl border">

                {/* Icon */}
                <div className="text-6xl mb-4">⚠️</div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-red-500">
                    Oops! Something went wrong
                </h1>

                {/* Message */}
                <p className="mt-3 text-gray-500">
                    Unexpected error occurred. Please try again or go back.
                </p>

                {/* Error details (dev mode helpful) */}
                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded">
                    {error.message}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3 justify-center">

                    <button
                        onClick={() => reset()}
                        className="btn btn-primary"
                    >
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="btn btn-outline"
                    >
                        Go Home
                    </button>

                </div>
            </div>
        </div>
    );
}