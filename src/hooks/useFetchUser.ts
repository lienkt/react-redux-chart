import React from "react";
import type { IUser } from "../types";

export const useFetchUser = () => {
  const [users, setUsers] = React.useState<IUser[]>([])
  
  React.useEffect(() => {
    async function fetchUser() {
      try {
        const resp = await fetch('https://tony-auth-express-vdee.vercel.app/api/user');
        const data = await resp.json();
        setUsers((data?.data || []) as IUser[])
      } catch(err) {
        console.log('err fetch user')
      }
    }
    fetchUser();
  }, [])

  return {
    users
  }
}