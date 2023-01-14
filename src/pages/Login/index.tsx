import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
  email: yup.string().email("E-mail ivalido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "no minimo 6 caracters")
    .required("Campo obrigatório"),
});

const Login = () => {
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  console.log(errors);
  console.log(isValid);

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Usuário"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title="Entrar" disabled={!!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
