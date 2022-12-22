import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Nav />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout
