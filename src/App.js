import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import AddAlbams from './components/Albams/AddAlbams/AddAlbams'
import AlbamList from './components/Albams/AlbamList/AlbamList'
import EditAlbams from './components/Albams/EditAlbams/EditAlbams'
import ViewAlbams from './components/Albams/ViewAlbams/ViewAlbams'
import Navbar from './components/Navbar/Navbar'
import Spinner from './components/spinner/Spinner'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path={'/'} element={<Navigate to = {'/albam/list'} /> } />
        <Route path={ '/albam/list'} element={<AlbamList /> } />
        <Route path={'/albam/add'} element={<AddAlbams /> } />
        {/* <Route path={'/albam/view/:contactId'} element={<ViewAlbams /> } /> */}
        <Route path={'/albam/edit/:contactId'} element={<EditAlbams /> } />
        
      </Routes>
    </>
  )
}

export default App
