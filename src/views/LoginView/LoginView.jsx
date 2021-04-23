import { Component } from 'react';
// import { connect } from 'react-redux';
import css from './LoginView.module.scss';
// import { authOperations } from '../redux/auth';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispLogin(this.state);

        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1 className={css.title}>Страница логина</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={css.form}
                    autoComplete="off"
                >
                    <label className={css.label}>
                        Почта
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={css.label}>
                        Пароль
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button type="submit">Войти</button>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = {
//     dispLogin: authOperations.logIn,
// };

export default LoginView;
// export default connect(null, mapDispatchToProps)(LoginView);
