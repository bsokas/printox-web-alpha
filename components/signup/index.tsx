import SignupForm from './signupForm'
import styles from './styles.module.css'

function SignUp(){
    return (
        <div className={styles.userContainer}>
            <h1>Join Printox</h1>
            <SignupForm />
        </div>
    )
}

export default SignUp