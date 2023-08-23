import React from 'react'
import Image from 'next/image'
import revenue from "../public/revenue.png";
import users from "../public/users.png"
import transaction from "../public/transaction.png"
import like from "../public/like.png"

const Card = () => {
    return (
        <div id="card-div">
            <div className="bg-[#ddefe0] rounded-[10px] p-7 relative">
                <p>Total Revenues</p>
                <h2 className="text-[1.53em] font-bold">$ 2,129,430</h2>
                <Image src={revenue} width={26} height={24} className="absolute top-5 right-4 cursor-pointer hover:scale-125 transition duration-500" alt='Card' />
            </div>
            <div className="bg-[#f4ecdd] rounded-[10px] p-7 relative">
                <p>Total Transactions</p>
                <h2 className="text-[1.53em] font-bold">1,520</h2>
                <Image src={transaction} width={21} height={24} className="absolute top-5 right-4 cursor-pointer hover:scale-125 transition duration-500" alt='Card' />
            </div>
            <div className="bg-[#efdada] rounded-[10px] p-7 relative">
                <p>Total Likes</p>
                <h2 className="text-[1.53em] font-bold">9,721</h2>
                <Image src={like} width={24} height={24} className="absolute top-5 right-4 cursor-pointer hover:scale-125 transition duration-500" alt='Card' />
            </div>
            <div className="bg-[#dee0ef] rounded-[10px] p-7 relative">
                <p>Total Users</p>
                <h2 className="text-[1.53em] font-bold">892</h2>
                <Image src={users} width={36} height={24} className="absolute top-5 right-4 cursor-pointer hover:scale-125 transition duration-500" alt='Card' />
            </div>
        </div>
    )
}

export default Card