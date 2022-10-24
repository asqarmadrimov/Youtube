// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { search, avatar, comera, check } from '../utils/constants'

const SearchBar = () => {
  return (
    <>
      <Paper
        component='from'
        onSubmit={() => { }}
        sx={{
          border: 'solid 1px #ebebeb',
          pl: 2,
          boxShadov: 'none',
          mr: { sm: 5 }
        }}>
        <input
          type="text"
          className='search-bar'
          placeholder='Search...'
          value=""
          onChange={() => { }} />

        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
          <img
            src={search}
            alt="searchRezalt"
            width={20} />
        </IconButton>

      </Paper>
      <div style={{display: 'flex', alignItems: 'center'}} className="">
        <button style={{ borderRadius: '50%', padding: "5px", display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img style={{ background: '#fff', margin: 0, borderRadius: '50%' }} src={check} alt="avatar" width={30} height={30} />
        </button>

        <button style={{ borderRadius: '50%', marginLeft: '20px', marginRight: '20px', padding: '5px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img style={{ background: '#fff', margin: 0, borderRadius: '50%' }} src={comera} alt="comera" width={30} height={30} />
        </button>

        <button style={{ borderRadius: '50%', padding: '5px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img style={{ background: '#fff', margin: 0, borderRadius: '50%' }} src={avatar} alt="avatar" width={30} height={30} />
        </button>
      </div>
    </>
  )
}

export default SearchBar