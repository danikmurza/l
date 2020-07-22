import React from 'react'
import {AuthContext} from '../../context/auth-context'

const withBookstoreService = () => (Wrapped) => {
  
  return (props) => {
    return (
      <AuthContext.Consumer>
        {
          (useAuth) => {
            return (<Wrapped {...props}
                             useAuth={useAuth}/>)
          }
        }
      </AuthContext.Consumer>
    );
  }
};

export default withBookstoreService
