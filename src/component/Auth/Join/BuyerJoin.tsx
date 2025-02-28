import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { FormValue } from "types/type";
import Button from "../../../component/common/Button/Button";
import { RuleSettings } from "../../../component/common/TextField/Rules";
import InputWrapper from "../../../component/common/TextField/AuthInput";
import { useIdValidation } from "../../../CustomHook/Valid";
import { JoinSection, Form, CheckJoin, CheckTerms, Terms } from "./Join.Style";
const label = {
  inputProps: {
    "aria-label": "동의 체크",
  },
};

type BuyerJoinProps = {
  onSubmit: (data: FormValue) => void;
};

const BuyerJoin: React.FC<BuyerJoinProps> = ({ onSubmit }) => {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
    clearErrors,
    setError,
  } = useForm<FormValue>({ mode: "onChange" });

  const passwordValue = watch("password", "");
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { IdValid } = useIdValidation({
    watch,
    getValues,
    clearErrors,
    setError,
  });
  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <JoinSection>
          <InputWrapper
            control={control}
            name="id"
            defaultValue=""
            rules={RuleSettings.IDRule}
            label="아이디"
            error={errors.id}
            isValid={true}
            onButtonClick={(event) => IdValid(event)}
          />
          <InputWrapper
            control={control}
            name="password"
            defaultValue=""
            rules={RuleSettings.PasswordRule}
            label="비밀번호"
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            error={errors.password}
          />
          <InputWrapper
            control={control}
            name="password2"
            defaultValue=""
            rules={{
              required: "비밀번호 중복 확인은 필수 입니다.",
              validate: (value: string) =>
                value === passwordValue || "비밀번호가 일치 하지 않습니다.",
            }}
            label="비밀번호 중복 확인"
            showPassword={showPassword2}
            handleClickShowPassword={handleClickShowPassword2}
            handleMouseDownPassword={handleMouseDownPassword}
            error={errors.password2}
          />
          <InputWrapper
            control={control}
            name="name"
            defaultValue=""
            rules={RuleSettings.NameRule}
            label="이름"
            error={errors.name}
          />
          <InputWrapper
            control={control}
            name="Phone"
            defaultValue=""
            rules={RuleSettings.PhoneNumberRule}
            label="전화번호"
            error={errors.Phone}
          />
        </JoinSection>
        <CheckJoin>
          <Checkbox
            required
            size="small"
            {...label}
            checked={checked}
            onChange={handleChange}
          />
          <Terms>
            호두샵의 <CheckTerms>이용약관</CheckTerms> 및
            <CheckTerms> 개인정보처리방침</CheckTerms>에 대한 내용을 확인 하였고
            동의합니다.
          </Terms>
        </CheckJoin>
        <Button
          size="l"
          color="primary"
          variant="contained"
          type="submit"
          disabled={!checked || !isValid}
          margin="10px auto"
        >
          가입하기
        </Button>
      </Form>
    </>
  );
};

export default BuyerJoin;
