import React from 'react'

function TestimonialCard({name, company, testimony}) {
    return (
        <div>
            <section class="bg-slate-800 rounded-3xl">
                <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure class="max-w-screen-md mx-auto">

                        <blockquote>
                            <p class="text-base font-thin text-gray-900 dark:text-white">{testimony}</p>
                        </blockquote>
                        <figcaption class="flex items-center justify-center mt-6 space-x-3">
                            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div class="pr-3 font-medium text-gray-900 dark:text-white">{name}</div>
                                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{company}</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
}

export default TestimonialCard