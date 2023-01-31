import {RiRefreshLine} from "react-icons/ri";
import { TbBooks } from "react-icons/tb";

export const TrackingView = ({setSearch}: any) => {
    return (
        <div className={"bg-white rounded-lg drop-shadow pb-3 w-full dark:text-gray-100 dark:bg-gray-800"}>
            {/*DIV FOR UPPER PART OF COMPONENT*/}
            <div className={"pt-3 pl-10 pr-4 flex justify-between items-center"}>
                <div className={"text-gray-500 text-sm tracking-tight "}>Estimated Delivery Date</div>
                <RiRefreshLine className={"text-green-600 cursor-pointer"} onClick={() => {
                    setSearch(false)
                }
                }/>
            </div>
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
            <a href="#"
               className="flex flex-row items-center bg-white border border-gray-200 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <TbBooks className={'w-48 text-6xl'}/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Std 5 Books
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            5 books for Std 5 students you donated to a school in Kandy District.
                        </p>
                    </div>
            </a>
            <div className={"flex justify-between pl-10 py-4"}>
                {/*TEXT DIV*/}
                <div>
                    <div className={"font-sans font-semibold text-gray-700 text-4xl"}>Monday</div>
                    <div className={"font-sans text-xl"}>February</div>
                    <div className={"font-sans text-green-600 text-7xl font-bold"}>25</div>
                    <div className={"font-sans text-4xl text-gray-500 mt-4"}>In Transit</div>
                    <div className={"font-sans text-lg text-green-600 font-medium mt-6"}>Request Early Delivery
                    </div>
                </div>
            </div>

            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
            {/*Part that has DHL Image*/}
            <div className={"flex justify-between mx-10 font-sans py-4"}>
                <div className={"flex flex-row"}>
                    {/*Image Div*/}
                    <div className={" rounded-lg overflow-hidden border border-gray-200"}>
                        <img src={"https://1000logos.net/wp-content/uploads/2018/08/DHL-emblem.jpg"}
                             className={"object-fill w-24"}/>
                    </div>
                    <div className={"ml-3 flex flex-col justify-between pb-2"}>
                        <div className={"text-xl pt-1 font-semibold"}>DHL</div>
                        <a className={"text-gray-500 text-sm"} href={"https://reddit.com/r/therewasanattempt"}>DHL
                            Logistics Ltd.</a>
                    </div>
                </div>
                <div className={"flex flex-col justify-end items-end pb-2"}>
                    <div className={"text-xl pt-1 font-semibold"}>Tracking ID</div>
                    <a className={"text-gray-600"} href={"https://reddit.com/r/sounding"}>133769240</a>
                </div>
            </div>
            {/*Timeline Part*/}
            <div className={"px-10 py-2"}>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-4">

                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border ring-2 ring-gray-300  dark:border-gray-900 dark:bg-gray-700"></div>
                        <time
                            className="mb-1 font-sans leading-none font-semibold text-gray-600 dark:text-gray-500">12th
                            February
                            2022
                        </time>
                        <p className="text-base text-sm font-normal text-gray-500 dark:text-gray-400">In-Transit</p>
                        <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Location: Mumbai</p>
                    </li>
                    <li className="mb-10 ml-4">


                        <div
                            className={"absolute w-4 h-4 bg-green-400 opacity-75 rounded-full mt-1 -left-2 border pulse border-white dark:border-gray-900 dark:bg-gray-700 flex justify-center animate-ping items-center"}>
                        </div>
                        <div
                            className="absolute w-3 mt-1.5 -left-1.5
                            h-3 bg-green-500 rounded-full dark:bg-gray-600"></div>
                        <time
                            className="mb-1 leading-none font-semibold  text-gray-600 dark:text-gray-500">13th March
                            2022
                        </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">In-Transit</p>
                        <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Location: Pune</p>
                    </li>
                </ol>

            </div>
        </div>
    )
}