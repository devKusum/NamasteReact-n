const Login = () => {
    return(
        <div class="container">
      
        <form>
            <h1 class="form-heading">Login</h1>
           <input type="text" placeholder="Email"  width="100"/>
           <input type="password" placeholder="password"  width="100"/>

             <button width="100" >Login</button>
              
               <button width="100">Login with facebook</button>
               <button width="100">Login with google</button>
        </form>
    </div>
    );
};
export default Login;