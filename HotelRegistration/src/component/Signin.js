

const Signin = () =>{
    return(
        <div class="container">
     
        <form>
            <h1 class="form-heading">Signup</h1>
           <input type="text" placeholder="Email"  width="100"/>
           <input type="password" placeholder="create password"  width="100"/>
           <input type="password" placeholder="confirm password"  width="100"/>
               <button width="100" >Signup</button>
               <button width="100">Login with facebook</button>
               <button width="100">Login with google</button>
        </form>
    </div>
    )
}
export default Signin;
