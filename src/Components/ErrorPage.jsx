import error from '../assets/error.gif'
import Navbar from './Navbar';
import Footer from './Footer';


const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mx-auto'>
                <img src={error} alt="" />
            </div>
            <Footer></Footer>
        </>

    );
};

export default ErrorPage;