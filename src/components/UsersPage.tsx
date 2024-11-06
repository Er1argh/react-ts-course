import React, { FC, useEffect, useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { IUser } from '../types/types'

import List from './List'
import UserItem from './UserItem'

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem key={user.id} user={user} onClick={user => navigate(`/users/${user.id}`)} />
      )}
    />
  )
}

export default UsersPage
