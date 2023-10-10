import NavBar from "./nav-bar";

export default function RootLayout({ children}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  )
}