import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

export default function GoogleProvider() {
    const { continueWithGoogle } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxios();
    const googleAuth = () => {
        continueWithGoogle()
          .then(userCred => {
            console.log(userCred.user);
            const user = userCred.user;
            const userInfo = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                role: 'buyer'
            };
            axiosSecure.post('/users', userInfo)
              .then(res => console.log(res.data));
            toast.success('Succesfully logged in using Google');
            navigate('/dashboard');
          })
          .catch(error => {
            console.log(error);
          })
    }
    return (
        <button onClick={googleAuth} className="btn bg-white text-black border-[#e5e5e5]">
            {/* Google SVG */}
            Continue with Google
        </button>
    );
}