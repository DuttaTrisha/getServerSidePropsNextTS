import React from 'react'
import axios from 'axios'

interface User{
    username: string;
    email: string;
}

interface UserDataProps{
    response: User[];
}

const UserData:React.FC<UserDataProps> = ({response}) => {
  return (
    <>
      {
        response?.map((item, index) => {
            return(
                <>
                <div key={index}>
                <h2>Username: {item?.username}</h2>
                <h3>Email: {item?.email}</h3>
                </div>
                <br/>
                </>
            )
        })
      }
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const response: User[] = res?.data;
  return{
    props:{
        response
    }
  }
}

export default UserData;