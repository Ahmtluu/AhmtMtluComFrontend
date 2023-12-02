import React from "react";

export default function BlurBackground() {
    return (
        <div className="absolute inset-x-0 -top-20">
            <svg className="min-w-[80rem] -translate-x-60 md:translate-x-0 mx-auto w-full -scale-y-100 contrast-150 opacity-50 dark:opacity-25" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1739_2)">
                    <g filter="url(#filter0_f_1739_2)">
                        <ellipse cx="987.203" cy="967.25" rx="581" ry="356.5" transform="rotate(8.47676 987.203 967.25)" fill="#31304D">
                        </ellipse></g><g filter="url(#filter1_f_1739_2)">
                        <ellipse cx="991.907" cy="1000.77" rx="454.5" ry="280.5" transform="rotate(11.69 991.907 1000.77)" fill="#C69774">
                        </ellipse></g><g filter="url(#filter2_f_1739_2)">
                        <ellipse cx="405" cy="1050" rx="448" ry="332" fill="#637E76">
                        </ellipse></g><g filter="url(#filter3_f_1739_2)">
                        <ellipse cx="779" cy="985.5" rx="259" ry="204.5" fill="#FFE8AE">
                        </ellipse>
                    </g>
                </g>
                <defs>
                    <filter id="filter0_f_1739_2" x="110.117" y="304.308" width="1754.18" height="1325.88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">

                        </feBlend>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2">
                        </feGaussianBlur>
                    </filter>
                    <filter id="filter1_f_1739_2" x="343.172" y="510.984" width="1297.47" height="979.573" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2">
                        </feGaussianBlur>
                    </filter>
                    <filter id="filter2_f_1739_2" x="-343" y="418" width="1496" height="1264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1739_2">
                        </feGaussianBlur>
                    </filter>
                    <filter id="filter3_f_1739_2" x="320" y="581" width="918" height="809" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend>
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1739_2">
                        </feGaussianBlur>
                    </filter>
                    <clipPath id="clip0_1739_2">
                        <rect width="1440" height="900" fill="white">
                        </rect>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}