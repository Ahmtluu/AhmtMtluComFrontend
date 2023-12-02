import React from 'react'

export default function ProjectSkeloton() {
    return (
        <section >
            <div className="mx-auto animate-pulse">
                <div
                    className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <div className="w-full">
                        <div
                            className="w-full h-64 bg-gray-300 md:h-72 "
                        ></div>
                    </div>

                    <div className="w-full">
                        <div
                            className="w-full h-64 bg-gray-300 md:h-72 "
                        ></div>
                    </div>

                    <div className="w-full">
                        <div
                            className="w-full h-64 bg-gray-300 md:h-72 "
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
