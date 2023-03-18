import PanaverseLogo from "./LogoPanaverse";
export default function autoMargin(){
    return(
        <>

        <div className="flex m-6 p-8 shadow-md ">

            <PanaverseLogo/>
            <div className="flex gap-x-16 ml-auto">
                <div >
                    <p className=" text-xl font-semibold text-red-800">Quick Links</p>
                    <p className="mt-4">Home</p>
                    <p className="mt-1">About Us</p>
                    <p className="mt-1">Contacts</p>
                    <p className="mt-1">Courses</p>
                </div>
                <div>
                    <p className="font-semibold text-xl text-red-800">Contact Us</p>
                    <p className="mt-4">Hyderabad</p>
                    <p className="mt-1">Karachi</p>
                    <p className="mt-1">Islamabad</p>
                    <p className="mt-1">Peshwar</p>
                    <p className="mt-1">Lahore</p>
                </div>
                <div>
                    <p className="font-semibold text-xl text-red-800">Social</p>
                    <p className="mt-4">Instagram</p>
                    <p className="mt-1">Discord</p>
                    <p className="mt-1">Facebook</p>
                </div>
            </div>

        </div>
        
        </>
    )
}