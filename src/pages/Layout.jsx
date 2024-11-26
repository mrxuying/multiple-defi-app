import React from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import { ColorButton} from '../components/ColorButton';
import { Stack } from '@mui/material';
import './layout.css'
import {routes} from '../routes'

function HomePage() {

  const element = useRoutes(routes)

  return (
    <div className='container'>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-content">
            <NavLink  to='' className="navbar-brand" onClick={() => {}}>
              Multiple UX DEFI
            </NavLink>
            <div className="navbar-menu">
              <NavLink className="navbar-item" to='/staking'>
                Staking
              </NavLink>
              <NavLink className="navbar-item" to='/discretestaking'>
                DiscreteStaking
              </NavLink>
            </div>
            <div className='navbar navbar-content connect'>
              <Stack spacing={2} direction="row">
                <ColorButton variant="contained" >Connect</ColorButton>
              </Stack>
            </div>
          </div>
        </nav>
      </header>
      <div className='container-content'>
        {/* <Routes>
          <Route path='/voting' element={<Voting/>}/>
          <Route path='/staking' element={<Staking/>}/>
          <Route path='/discretestaking' element={<DiscreteStaking/>}/>
          <Route path='/' element={<Navigate to='/voting'/>} />
        </Routes>  */}
        {/* 通过路由表注册路由 */}
        {element}

      </div>
    </div>
    
  );
}
   
export default HomePage;

// export default function Layout() {

//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg" sx={{bgcolor:'#fff', minHeight: '8vh', display: 'inline-block'}}>
//         <Box sx={{ bgcolor: '#fff', width: '10%'}} >
//             <HomeIcon color='secondary' fontSize='large' />
//         </Box>
//         <Box sx={{ bgcolor: '#fff', height: '10vh', width: '90%', display: 'inline-block'}} >
//             <Tabs value={value} 
//                 onChange={handleChange}
//                 textColor="secondary"
//                 indicatorColor="secondary"
//                 aria-label="secondary tabs" 
//                 sx={{minHeight: '8vh'}}
//                 centered
//             >
                
//                 <Tab label="Voting" />
//                 <Tab label="Staking" />
//                 <Tab label="Discrete Staking" />
//             </Tabs>
//         </Box>
//       </Container>
//       <Divider />
//       <Container maxWidth="lg">
//         <Box sx={{ bgcolor: '#ffffff', 
//             height: '80vh',
//             padding: '10px',
//         }} >

//         </Box>
//       </Container>
//     </React.Fragment>
//   )
// }



 
