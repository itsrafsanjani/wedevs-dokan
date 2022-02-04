import React from 'react';
import logo from './img/dokan-logo-color.svg';
import google from './img/google.svg';

function Login() {
    return (
        <div className="container flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center">
            <header className="mt-8 mb-12">
                <img src={logo} alt="logo color" />
            </header>
            <div className="text-gray-900 text-xl font-bold mb-4">Sign In</div>

            <form className="lg:w-1/4 w-5/6">
                <label htmlFor="email" className="relative block">
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-5"
                    >
                        <rect
                            x="1.61108"
                            y="1.30554"
                            width="19.4444"
                            height="15.625"
                            rx="3.17674"
                            stroke="#7C8592"
                            strokeWidth="1.38889"
                        />
                        <path
                            d="M3 2.34723L10.159 9.50626C10.8076 10.1548 11.8591 10.1548 12.5076 9.50626L19.6667 2.34723"
                            stroke="#7C8592"
                            strokeWidth="1.65035"
                        />
                    </svg>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full bg-white rounded-lg shadow border focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 pl-14"
                        placeholder="Email"
                    />
                </label>
                <label htmlFor="password" className="relative block">
                    <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none w-8 h-10 absolute top-1/2 transform -translate-y-1/2 left-5"
                    >
                        <rect
                            x="0.958252"
                            y="6.9028"
                            width="19.4444"
                            height="15.625"
                            rx="3.17674"
                            stroke="#7C8592"
                            strokeWidth="1.65035"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.54782 1.69446H12.8131C13.9365 1.69446 14.8471 2.60512 14.8471 3.72849V6.90279H6.51379V3.72849C6.51379 2.60512 7.42446 1.69446 8.54782 1.69446Z"
                            stroke="#7C8592"
                            strokeWidth="1.65035"
                        />
                        <circle
                            cx="10.6804"
                            cy="14.5417"
                            r="2.43056"
                            stroke="#7C8592"
                            strokeWidth="1.65035"
                        />
                    </svg>

                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-full bg-white rounded-lg shadow border focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-3 pl-14"
                        placeholder="Password"
                    />
                </label>

                <small className="float-right text-gray-400 mb-12">Forgot Password?</small>

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white font-medium rounded-lg shadow border text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-8"
                >
                    Login
                </button>
            </form>

            <div className="lg:w-1/4 w-5/6">
                <div className="mb-12">
                    <button type="button" className="bg-white p-4 shadow rounded-lg mx-2">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 13 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.5353 0.550223L9.56962 0.545456C6.23775 0.545456 4.08456 2.75836 4.08456 6.18341V8.78289H1.10268C0.84501 8.78289 0.636353 8.99214 0.636353 9.25026V13.0166C0.636353 13.2747 0.845248 13.4837 1.10268 13.4837H4.08456V22.9874C4.08456 23.2455 4.29322 23.4545 4.55089 23.4545H8.44139C8.69906 23.4545 8.90772 23.2453 8.90772 22.9874V13.4837H12.3942C12.6519 13.4837 12.8606 13.2747 12.8606 13.0166L12.862 9.25026C12.862 9.12632 12.8127 9.00764 12.7254 8.91993C12.6381 8.83222 12.5191 8.78289 12.3954 8.78289H8.90772V6.57928C8.90772 5.52014 9.15968 4.98246 10.537 4.98246L12.5348 4.98175C12.7923 4.98175 13.0009 4.77249 13.0009 4.51462V1.01735C13.0009 0.759715 12.7925 0.550699 12.5353 0.550223Z"
                                fill="#3B5998"
                            />
                        </svg>
                    </button>
                    <button type="button" className="bg-white p-4 shadow rounded-lg mx-2">
                        <img src={google} alt="google" />
                    </button>
                </div>

                <p className="text-center text-gray-700">Create New Account</p>
            </div>
        </div>
    );
}

export default Login;
