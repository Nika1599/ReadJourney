import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register("name")}
        placeholder="Name: Ilona Ratushniak"
        type="name"
        required
      />
      {errors.name && <p>Name is required.</p>}

      <input
        {...register("email")}
        placeholder="Email:Your@email.com"
        type="email"
        required
      />
      {errors.email && <p>Email is required.</p>}
      <input
        {...register("password")}
        placeholder="Password: Yourpasswordhere"
        type="password"
        required
      />
      {errors.password && <p>Password is required.</p>}
      <button type="submit">Registration</button>
    </form>
  );
};
export default RegisterForm;
