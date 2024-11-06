import React, { FC, useEffect, useState } from 'react'

import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import { IUser } from '../types/types'

type UserItemPageParams = {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  )
}

export default UserItemPage