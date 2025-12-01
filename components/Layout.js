import Navbar from './Navbar';

export default function Layout({ children, t, locale, setLocale, user, logout }) {
    return (
        <>
            <Navbar t={t} locale={locale} setLocale={setLocale} user={user} logout={logout} />
            <main className="container">
                {children}
            </main>
            <footer>
                <div className="container footer-content">
                    <div>
                        <h3>Mendigorría Eskola</h3>
                        <p>{t.footer.address}</p>
                    </div>
                    <div>
                        <h3>{t.footer.contact}</h3>
                        <p>{t.footer.phone}</p>
                        <p>{t.footer.email}</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
