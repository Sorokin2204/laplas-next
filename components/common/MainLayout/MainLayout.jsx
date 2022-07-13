import React from 'react';
import ModalCategory from '../../pages/category/ModalCategory/ModalCategory';
import ModalFirma from '../../pages/firm/ModalFirma/ModalFirma';
import ModalRole from '../../pages/role/ModalRole/ModalRole';
import ModalUser from '../../pages/user/ModalUser/ModalUser';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';
import ModalGroup from '../../pages/group/ModalGroup/ModalGroup';
import { useSession, signIn, signOut } from "next-auth/react"

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const MainLayout = ({ children }) => {
  const { modalCategory, modalUser, modalFirm, modalRole, modalGroup } = useSelector((state) => state.app);
  
    const { data: session } = useSession()
    const deleteSession = () => {
      /*   fetch("/api/signout", {
            method: 'POST',
            body: JSON.stringify(userArr[2]),
            headers: { "Content-Type": "application/json" }
        }) */
        signOut({redirect: false })
    }
	
	const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
		console.log(data.get('email'))
		signIn('credentials', { redirect: true, email: data.get('email'), password: data.get('password') })
		
    }
	let userArr=[]
	
 if (session){
	    userArr = session.user.name.split(";")
        const user = userArr[0]
        const firm = userArr[1]
  return (
    <>
      <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <Header />

        <div class="app-main">
          <Menu />
          <div class="app-main__outer">
            <div class="app-main__inner" style={{ position: 'relative' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div class="app-drawer-wrapper">
        <div class="drawer-nav-btn">
          <button type="button" class="hamburger hamburger--elastic is-active">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div class="app-drawer-overlay d-none animated fadeIn"></div>

      {modalCategory && <ModalCategory />}
      {modalUser && <ModalUser />}
      {modalFirm && <ModalFirma />}
      {modalRole && <ModalRole />}
      {modalGroup && <ModalGroup />}
    </>
  );

 }
 
 	
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/*<FormControlLabel*/}
                        {/*    control={<Checkbox value="remember" color="primary" />}*/}
                        {/*    label="Remember me"*/}
                        {/*/>*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Авторизоваться
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Забыли пароль?
                                </Link>
                            </Grid>
                            <Grid item>
                                У вас нет аккаунта? <Link href="/registration" variant="body2">
                                    {"Зарегистрироваться"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );


 
 

};

export default MainLayout;
