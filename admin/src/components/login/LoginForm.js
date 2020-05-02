import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslate, useLogin, useSafeSetState } from 'ra-core';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  alert: {
    margin: theme.spacing(1, 0),
  },
  button: {
    width: '100%',
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Input = ({
  meta: { touched, error }, // eslint-disable-line react/prop-types
  input: inputProps, // eslint-disable-line react/prop-types
  ...props
}) => (
  <TextField
    error={!!(touched && error)}
    helperText={touched && error}
    {...inputProps}
    {...props}
    fullWidth
  />
);

const LoginForm: FunctionComponent<Props> = (props) => {
  const { redirectTo } = props;
  const [loading, setLoading] = useSafeSetState(false);
  const [apiError, setapiError] = useSafeSetState('');
  const login = useLogin();
  const translate = useTranslate();
  const classes = useStyles(props);

  const validate = (values: FormData) => {
    const errors = { email: undefined, password: undefined };

    if (!values.email) {
      errors.email = translate('ra.validation.required');
    }

    if (!values.password) {
      errors.password = translate('ra.validation.required');
    }

    return errors;
  };

  const submit = (values) => {
    setLoading(true);
    login(values, redirectTo)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setapiError(error.message || 'Something went wrong!');
      });
  };

  return (
    <Form
      onSubmit={submit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          {apiError && (
            <Alert severity="error" className={classes.alert}>
              {apiError}
            </Alert>
          )}
          <Field
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            disabled={loading}
            component={Input}
          />
          <Field
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            disabled={loading}
            component={Input}
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={loading}
            className={classes.button}
          >
            {loading && (
              <CircularProgress
                className={classes.icon}
                size={18}
                thickness={2}
              />
            )}
            Sign In
          </Button>
        </form>
      )}
    />
  );
};

LoginForm.propTypes = {
  redirectTo: PropTypes.string,
};

export default LoginForm;
