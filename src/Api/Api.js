const BASE_URL = 'http://localhost:3000/'

const URL = {
  NAVBAR: `${BASE_URL}api/navbar.json`
}

const navBar = () => fetch(URL.NAVBAR)

export { navBar }
