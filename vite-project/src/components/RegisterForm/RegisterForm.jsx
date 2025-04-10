import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(emailPattern, "Invalid format"),
  password: yup
    .string()
    .min(7, "Your password must include at least 7 characters")
    .required("Password is required"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name")}
        placeholder="Name: Ilona Ratushniak"
        type="name"
        required
      />
      <p>{errors.name?.message}</p>

      <input
        {...register("email")}
        placeholder="Email:Your@email.com"
        type="email"
        required
      />
      <p>{errors.email?.message}</p>
      <input
        {...register("password")}
        placeholder="Password: Yourpasswordhere"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>
      <button type="submit">Registration</button>
      <NavLink to="/login">Already have an account?</NavLink>
    </form>
  );
};
export default RegisterForm;
