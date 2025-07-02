import { useSelector } from "react-redux";

const useUser = () => {
    const userData = useSelector((state) => state.login);

    const localToken = localStorage.getItem("token");
    const localData = localStorage.getItem("user");

    const finalToken = userData?.data?.token || localToken;
    const finalData = userData?.data?.data || (localData ? JSON.parse(localData) : null);

    return { token: finalToken, data: finalData };
};

export default useUser;