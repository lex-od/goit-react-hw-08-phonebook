import { Component } from 'react';
// import { connect } from 'react-redux';
import css from './RegisterView.module.scss';
// import { authOperations } from '../redux/auth';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1 className={css.title}>Страница регистрации</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={css.form}
                    autoComplete="off"
                >
                    <label className={css.label}>
                        Имя
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>

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

                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = {
//     onRegister: authOperations.register,
// };

export default RegisterView;
// export default connect(null, mapDispatchToProps)(RegisterView);
