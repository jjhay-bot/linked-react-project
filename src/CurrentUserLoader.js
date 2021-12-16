import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CurrentUserLoader = ({ children }) => {
	const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const responce = await axios.get('/current-user/');
      setUser(responce.data)
    })();
  }, []);


  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }

        return child;

      }) }
    </>
  );
}
