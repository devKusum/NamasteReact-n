import { useEffect, useState } from "react";

const useOnlineStatus = () => {
<<<<<<< HEAD
    const [onlineStatus, setOnlineStatus] = useState(true);

 

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () =>{
            setOnlineStatus(true);
        });
    }, []);


    //boolean value
    return onlineStatus;

};

export default useOnlineStatus;
=======
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
>>>>>>> 1bc6a3c6366fb44db2062b7a246398ff309905a3
