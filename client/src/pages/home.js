import React, {useState} from 'react';
import QuestionMarkCircleIcon from "@heroicons/react/outline/QuestionMarkCircleIcon";
import ShareIcon from "@heroicons/react/outline/ShareIcon";
import TranslateIcon from "@heroicons/react/outline/TranslateIcon";
import VariableIcon from "@heroicons/react/outline/VariableIcon";
import validator from "validator";
import ExclamationCircleIcon from "@heroicons/react/outline/ExclamationCircleIcon";

const celsiusFahrenheitValues = [
    {
        id: 'DDMLCG1',
        celsius: 10.00.toFixed(2),
        fahrenheit: 50.00.toFixed(2)
    },
    {
        id: 'DDMLCG2',
        celsius: 20.00.toFixed(2),
        fahrenheit: 68.00.toFixed(2)
    },
    {
        id: 'DDMLCG3',
        celsius: 30.00.toFixed(2),
        fahrenheit: 86.00.toFixed(2)
    },
    {
        id: 'DDMLCG4',
        celsius: 40.00.toFixed(2),
        fahrenheit: 104.00.toFixed(2)
    },
    {
        id: 'DDMLCG5',
        celsius: 50.00.toFixed(2),
        fahrenheit: 122.00.toFixed(2)
    },
    {
        id: 'DDMLCG6',
        celsius: 60.00.toFixed(2),
        fahrenheit: 140.00.toFixed(2)
    },
    {
        id: 'DDMLCG7',
        celsius: 70.00.toFixed(2),
        fahrenheit: 158.00.toFixed(2)
    },
    {
        id: 'DDMLCG8',
        celsius: 80.00.toFixed(2),
        fahrenheit: 176.00.toFixed(2)
    },
    // More values...
]

const inputStyle = {
    classNameError: "relative top-4 inline focus:ring-indigo-500 " +
                    "focus:border-indigo-500 w-150 pr-10 sm:text-sm " +
                    "border-gray-300 rounded-md border-red-300" +
                    "text-red-900 placeholder-red-300 focus:outline-none " +
                    "focus:ring-red-500 focus:border-red-500",

    classNameSuccess: "relative top-4 inline focus:ring-indigo-500 " +
                     "focus:border-indigo-500 w-150 pr-10 sm:text-sm " +
                     "border-gray-300 rounded-md"
}

const Home = () => {
    let [fahrenheit, setFahrenheit] = useState(0.0);
    let [fahrenheitCelsiusResult, setFahrenheitCelsiusResult] = useState((0.0).toFixed(2));
    let [celsius, setCelsius] = useState(0.0);
    let [celsiusFahrenheitResult, setCelsiusFahrenheitResult] = useState((0.0).toFixed(2));
    let [errorFahrenheitCelsius, setErrorFahrenheitCelsius] = useState(false);
    let [errorCelsiusFahrenheit, setErrorCelsiusFahrenheit] = useState(false);
    let fahrenheitRef = React.createRef();
    let celsiusRef = React.createRef();

    const getCelsius = (e) => {
        let result = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
        setFahrenheitCelsiusResult(result);
    }

    const getFahrenheit = (e) => {
        let result = ((celsius * (9 / 5)) + 32).toFixed(2);
        setCelsiusFahrenheitResult(result);
    }

    const handleOnChangeFC = (e) => {
        let userInput = e.target.value;
        if(!validator.isNumeric(userInput)){
            fahrenheitRef.current.className = inputStyle.classNameError;
            setErrorFahrenheitCelsius(true);
        } else {
            fahrenheitRef.current.className = inputStyle.classNameSuccess;
            setErrorFahrenheitCelsius(false);
        }
        setFahrenheit(e.target.value);
    }

    const handleOnChangeCF = (e) => {
        let userInput = e.target.value;
        if(!validator.isNumeric(userInput)){
            celsiusRef.current.className = inputStyle.classNameError;
            setErrorCelsiusFahrenheit(true);
        } else {
            celsiusRef.current.className = inputStyle.classNameSuccess;
            setErrorCelsiusFahrenheit(false);
        }
        setCelsius(e.target.value);
    }

    return (
        <div className={"min-h-full"}>
            <h1 className="text-3xl text-white py-5 px-10 font-bold">
                Fahrenheit - Celsius Converter
            </h1>
            <div>
                <div className="mt-1 relative rounded-md shadow-sm inline-block align-center">
                    <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block">
                        Fahrenheit:
                    </h3>
                    <div className="relative top-9 mt-1 relative inline-block rounded-md shadow-sm">
                        <input
                            type="text"
                            name="fahrenheit"
                            id="fahrenheit"
                            ref={fahrenheitRef}
                            onChange={handleOnChangeFC}
                            className="relative top-4 inline focus:ring-indigo-500 focus:border-indigo-500 w-150 pr-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter fahrenheit value"
                        />
                        <div style={{visibility: errorFahrenheitCelsius ? "visible" : "hidden"}}>
                            <div className="relative bottom-3 left-48 items-center pointer-events-none">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>
                            <p className="mt-2 h-[50px] text-sm text-red-600" id="email-error">
                                You must enter numerical values only.
                            </p>
                        </div>
                    </div>
                </div>
                <span className="sm:ml-5">
                  <button
                      type="button"
                      onClick={getCelsius}
                      className="inline-flex w-250 items-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <VariableIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Convert
                  </button>
                </span>
                <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block" style={{width: "235px"}}>
                    Celsius:
                </h3>
                <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block" style={{textColor: "white"}}>
                    {fahrenheitCelsiusResult && (
                        fahrenheitCelsiusResult
                    )}
                </h3>
            </div>
            <h1 className="text-3xl text-white py-5 px-10 font-bold">
                Celsius - Fahrenheit Converter
            </h1>
            <div>
                <div className="relative rounded-md shadow-sm inline-block align-center">
                    <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block" style={{width: "235px"}}>
                        Celsius:
                    </h3>
                    <div className="relative top-9 mt-1 relative inline-block rounded-md shadow-sm">
                        <input
                            type="text"
                            name="celsius"
                            id="celsius"
                            ref={celsiusRef}
                            onChange={handleOnChangeCF}
                            className="relative top-4 inline focus:ring-indigo-500 focus:border-indigo-500 w-150 pr-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter celsius value"
                        />
                        <div style={{visibility: errorCelsiusFahrenheit? "visible" : "hidden"}}>
                            <div className="relative bottom-3 left-48 items-center pointer-events-none">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                            </div>
                            <p className="mt-2 text-sm text-red-600" id="email-error">
                                You must enter numerical values only.
                            </p>
                        </div>
                    </div>
                </div>
                <span className="sm:ml-5">
                  <button
                      type="button"
                      onClick={getFahrenheit}
                      className="inline-flex w-250 items-center px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <VariableIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Convert
                  </button>
                </span>
                <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block" style={{width: "235px"}}>
                    Fahrenheit
                </h3>
                <h3 className="text-3xl text-white py-5 px-10 font-bold inline-block" style={{textColor: "white"}}>
                    {celsiusFahrenheitResult && (
                        celsiusFahrenheitResult
                    )}
                </h3>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8 bg-gray-800 z-10">
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-900">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                                        >
                                            Record ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-white"
                                        >
                                            Celsius
                                        </th>
                                        <th
                                            scope="col"
                                            className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-white"
                                        >
                                            Fahrenheit
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {celsiusFahrenheitValues.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                                                {transaction.id}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                                                {transaction.celsius}
                                            </td>
                                            <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.fahrenheit}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;