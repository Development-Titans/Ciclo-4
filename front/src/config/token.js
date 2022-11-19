import clienteAxios from "./axios";

const tokenAuth = toen => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiNjM3NzY5YmU3MTAyMjc1NDQzYWU5OGY3In0sImlhdCI6MTY2ODc3MDIzOCwiZXhwIjoxNjY4NzczODM4fQ.ltK5I3vxT4OrrEe1Ra9lUO1U7RVDjDGvarYjPwBhDsk'
    if(token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
        console.log('Esta entrando a token para enviar a base de datos')
    }else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
        console.log('no envio el token al header')
    }
}

export default tokenAuth;