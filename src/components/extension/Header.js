import './Header.css';

function Header() {
    return (
        <header>
            <img className='Logo' src="/logo/vertical-logo.png" draggable="false" alt='Happi Logo' />
            <a className="DashboardLink" href='#/dashboard' target='_blank'>
                <img className='DashboardIcon' src='/bar-chart.png' draggable="false" alt="Open Dashboard" />
            </a>
        </header>
    )
}

export default Header;