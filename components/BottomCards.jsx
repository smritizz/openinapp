import React from 'react'
import BottomArrow from "../public/BottomArrow.png";
import PieChart from "../public/PieChart.png"
import RightArrow from "../public/RightArrow.png"
import Image from 'next/image'

const BottomCards = () => {
    return (
        <div id="bottomCardDiv" >
            <div className="p-5 rounded-[10px] bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex-[7]">
                        <h3 className="font-bold text-lg">Top Products</h3>
                    </div>
                    <div className="flex-[8] flex justify-end items-center gap-2">
                        <p>May - June 2021</p>
                        <Image src={BottomArrow} width={8} height={5} alt='Date' />
                    </div>
                </div>
                <div className="flex justify-around mt-5">
                    <div >
                        <Image src={PieChart} width={134} height={134} alt='Pie' />
                    </div>
                    <div className="text-left">
                        <div className="mb-3">
                            <div className="flex items-center text-left">
                                <div className=" w-3 h-3 bg-[#98D89E] rounded-[50%] mr-2"></div>
                                <h4 className="font-bold">Basic Tees</h4>
                            </div>
                            <p className="text-[#858585] ml-5">55%</p>
                        </div>
                        <div className="mb-3">
                            <div className="flex items-center text-left">
                                <div className=" w-3 h-3 bg-[#F6DC7D] rounded-[50%] mr-2"></div>
                                <h4 className="font-bold">Custom Short Pants</h4>
                            </div>
                            <p className="text-[#858585] ml-5">31%</p>
                        </div>
                        <div className="mb-3">
                            <div className="flex items-center text-left">
                                <div className=" w-3 h-3 bg-[#EE8484] rounded-[50%] mr-2"></div>
                                <h4 className="font-bold">Super Hoodies</h4>
                            </div>
                            <p className="text-[#858585] ml-5">14%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 rounded-[10px] bg-white">
                <div className="flex justify-between items-center">
                    <div className="flex-[10]">
                        <h3 className="font-bold text-lg">Today&apos;s schedule</h3>
                    </div>
                    <div className="flex-[8] flex justify-end items-center gap-2">
                        <p>See All</p>
                        <Image src={RightArrow} width={5} height={8} alt='Schedule' />
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className=" border-l-[5px] border-solid border-[#9BDD7C] my-4 px-4">
                        <h4 className="text-[#666666] font-bold">Meeting with suppliers from Kuta Bali</h4>
                        <p className="text-[#999999]">14.00-15.00</p>
                        <p className="text-[#999999]">at Sunset Road, Kuta, Bali</p>
                    </div>
                    <div className=" border-l-[5px] border-solid border-[#6972C3] my-4 px-4">
                        <h4 className="text-[#666666] font-bold">Check operation at Giga Factory 1</h4>
                        <p className="text-[#999999]">18.00-20.00</p>
                        <p className="text-[#999999]">at Central Jakarta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomCards