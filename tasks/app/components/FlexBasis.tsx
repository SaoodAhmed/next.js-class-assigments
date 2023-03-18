export default function flexBasis(){   // Flex basis help us to give width to elements
    return(
        <>

        <div className="flex mx-12 my-4 p-10 shadow-md gap-x-8 rounded-sm bg-pink-100">
            <div className="basis-1/3 shadow-md rounded-xl bg-white p-8">
                <p className="text-4xl font-bold">Standard</p>
                <p>Monthly Plan</p>
                <p className="text-4xl font-bold mt-4">$25</p>
            </div>
            <div className="basis-1/3 bg-pink-500 text-pink-50 rounded-xl shadow-md p-8">
                <p className="text-4xl font-bold">Popular</p>
                <p>Monthly Plan</p>
                <p className="text-4xl font-bold mt-4">$40</p>
            </div>
            <div className="basis-1/3 rounded-xl shadow-md bg-white p-8">
                <p className="text-4xl font-bold">Premium</p>
                <p>Monthly Plan</p>
                <p className="text-4xl font-bold mt-4">$55</p>
            </div>
        </div>
        
        </>

    )
}