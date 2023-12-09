import { useNavigate } from "react-router-dom";
import errorGif from "../../assets/404.gif"
import { IoMdArrowRoundBack } from "react-icons/io";

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="w-full">
            <img className="rounded-2xl m-auto w-1/3 my-10" src={errorGif} alt="" />
            <h2 className="text-4xl text-center"><span className="text-5xl text-blue-600">Sorry!</span> <br /> Could not found any page</h2>
            <div className="flex">
                <button onClick={handleBack} className="btn m-auto my-5"> <span className="text-xl"><IoMdArrowRoundBack /></span> Go back</button>
            </div>
        </div>
    );
};

export default ErrorPage;