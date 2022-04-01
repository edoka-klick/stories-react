import '../styles/sign-up.scss';
import signUpPhoto from '../assets/img/signup.jpg';
import { useState } from 'react';

function SignUp() {
    const [starCounter, setStarCounter] = useState(1);

    return (
        <div className="flex flex-nowrap bg-black justify-center content-around">



            <div className="max-w-fit ">
                <img className="max-h-screen" src={signUpPhoto} alt="Sign up photo"/>
            </div>
            <div className="sign-up-form flex">
                <form action="">
                    <h1 className='m-6'>SIGN UP</h1>
                    <div class="form-item">
                        <input type="text" name="text" id="name" placeholder="Name"/>
                    </div>

                    <div class="form-item">
                        <input type="text" name="text" id="lastname" placeholder="Lastname"/>
                    </div>

                    <div class="form-item">
                        <input type="email" name="text" id="email" placeholder="Email"/>
                    </div>

                    <div class="form-item">
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>

                    <div class="form-item">
                        <input type="password" name="pass" id="pass" placeholder="Repeat password"/>
                    </div>

                    <button className='m-6' type="submit"> LOGIN </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;