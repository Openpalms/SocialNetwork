import { Field, reduxForm } from 'redux-form';

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="login" name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder="password" component={'input'} name={'password '} />
      </div>
      <div>
        <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
        remember be
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);
export default Login;
