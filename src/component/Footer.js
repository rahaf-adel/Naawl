import React from 'react'

function Footer() {
  return (
    <div>
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/Services" className="nav-link px-2 text-muted">Services</a></li>
      <li className="nav-item"><a href="/Members" className="nav-link px-2 text-muted">Members</a></li>
      <li className="nav-item"><a href="/BeMembers" className="nav-link px-2 text-muted">Be Member</a></li>
    </ul>
    <p className="text-center text-muted">© 2022 Naawl, Inc</p>
  </footer>
</div>
    </div>
  )
}

export default Footer