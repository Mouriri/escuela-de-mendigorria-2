import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar({ t, locale, setLocale, user, logout }) {
    const router = useRouter();

    const toggleLocale = () => {
        setLocale(locale === 'es' ? 'eu' : 'es');
    };

    const isActive = (path) => router.pathname === path ? 'active' : '';

    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link href="/">
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>
                                Mendigorría Eskola
                            </span>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link href="/" className={isActive('/')}>{t.nav.home}</Link></li>
                        <li><Link href="/eskola" className={isActive('/eskola')}>{t.nav.school}</Link></li>
                        <li><Link href="/familia" className={isActive('/familia')}>{t.nav.family}</Link></li>
                        <li><Link href="/jarduerak" className={isActive('/jarduerak')}>{t.nav.activities}</Link></li>
                        <li><Link href="/jangela" className={isActive('/jangela')}>{t.nav.dining}</Link></li>
                        {user ? (
                            <li><button onClick={logout} className="btn btn-secondary">{t.nav.logout}</button></li>
                        ) : (
                            <li><Link href="/login" className="btn">{t.nav.login}</Link></li>
                        )}
                        <li onClick={toggleLocale} className="lang-switch">
                            {locale === 'es' ? 'EU' : 'ES'}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
