# NamasteReact-n

//=======================Food ordering app ======================
//layout design
//Header
//-logo
//-navItems
//Body
//-serch
//-rest-container
//Footer
//-copyright
//-  Contact links


Two types of Export/Import

  -Default Export/import

  export default component;
  import component from "path";

  export const component;
  import {component} from "path";

  # React Hooks
  (normal js utility function)
   -useState()
   -useEffect()


# 2 types of Routing in Web page
  - Client side Routing
  - Server side Routing
  

  # Life cycle Method of component
              1.Mounting
                     1.render phase ----CONSTRUCTOR CALL, RENDER CALL
                      2.commit phase ---- DOM UPDATE THEN componentDidMount


              2.updating
              
              3.unmounting

            

     # MOUNTING 


    <!-- render phase -->
    -parent constructor
    -parent render

      -first child constructor 
      -first child render

      -second child constructor 
      -second child render

      -third child constructor 
      -third child render

      -fourth child constructor 
      -fourth child render

      -fifth child constructor 
      -fifth child render

       <!-- updating dom in a batch  and then commit phase-->
      -first child componentDidMount
      -second child componentDidMount
      -third child componentDidMount
      -fourth child componentDidMount
      -fifth child componentDidMount


    <!-- ---------------------MOUNTING-------------------------------- -->

      <!-- CONSTRUCTOR(dummy)
      Render(dummy)
      <html Dummy>
      Component Did Mount
      <API call>
      <this.setState> -->
       <!-- <this.setState>-> state variable is updated -->


      # Updating

      <!-- render(Appi data)
      <html loaded with new api data>
      call componentDidupdate -->
     # Unmounting
        
        <!-- it will call just before the unmount -->
        <!-- componentWillUnmount() --># demo
