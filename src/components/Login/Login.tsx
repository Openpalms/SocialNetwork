import React, { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Input } from '../Common/Forms/Forms';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import s from '../Common/Forms/Forms.module.css';
import { AppStateType } from '../../redux/reduxStore';

const maxLength50 = maxLengthCreator(50);
type mapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: any
  ) => void;
};
type LoginFormType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type ownProps = {
  captchaUrl: string | null;
};

const Login: FC<mapStateToPropsType & mapDispatchToPropsType> = (props) => {
  const onSubmit = (formData: LoginFormType) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Navigate replace to="/Profile" />;
  }
  return (
    <>
      <h1>Login</h1>

      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </>
  );
};



const LoginForm: FC<InjectedFormProps<LoginFormType, ownProps> & ownProps> = (
  props
) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="email"
            name={'email'}
            component={Input}
            validate={[required, maxLength50]}
          />
        </div>
        <div>
          <Field
            type="password"
            placeholder="password"
            component={Input}
            name={'password'}
            validate={[required, maxLength50]}
          />
          {props.captchaUrl && (
            <>
              <img src={props.captchaUrl} alt="captcha" />
              <div>
                <Field
                  type="text"
                  placeholder="text"
                  component={Input}
                  name={'captcha'}
                  validate={[required, maxLength50]}
                />
              </div>
            </>
          )}
        </div>
        <div>
          <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
          remember be
        </div>

        {props.error ? (
          <span className={s.summaryError}>{props.error}</span>
        ) : null}
        <h5>galo4kin123danilo@gmail.com</h5>
        <h5>w3xaYe9bePfU_VX</h5>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};
const LoginReduxForm = reduxForm<LoginFormType, ownProps>({
  form: 'login',
})(LoginForm);

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login })(Login);
