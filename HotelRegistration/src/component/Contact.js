const Contact = () =>{
    return(
        <div class="container">
     
        <form>
            <h1 class="form-heading">Contact Us</h1>
            <label for="name">Name</label>
            <input type="text" placeholder="UserName"  width="100"/>
            <label for="Email">Email</label>
           <input type="text" placeholder="Email"  width="100"/>

          <label for="msg">Message</label>
             <textarea name="msg" id="msg" cols="30" rows="6 " placeholder="message"></textarea>
               <button class="submit" >Submit</button>
              
        </form>
    </div>
    );
};

export default Contact;