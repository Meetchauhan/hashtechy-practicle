import { useFormik } from "formik";
import { LoginValidation } from "../../validationSchema/LoginValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValue,
      validationSchema: LoginValidation,
      onSubmit: async (value, action) => {
        const isUserLoggedIn = await dispatch(login(value)).unwrap();

        if (isUserLoggedIn?.success) {
          navigate("/", { replace: true });
        }
        if (isUserLoggedIn?.success === false) {
          setShowErrorMessage(isUserLoggedIn?.message);
        }
        setTimeout(() => {
          setShowErrorMessage(null);
        }, 5000);
        action.resetForm();
      },
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <p className="text-red-600 text-center my-2">{showErrorMessage}</p>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email && touched.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password && touched.password
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="••••••••"
            />
            {touched.password && errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
