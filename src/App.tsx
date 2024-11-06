import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import UsersPage from './components/UsersPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Пользователи</Link>
        <Link to="todos">Список дел</Link>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
