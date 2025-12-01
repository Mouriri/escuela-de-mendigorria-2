import Head from 'next/head';
import Image from 'next/image';

export default function Home({ t }) {
    return (
        <>
            <Head>
                <title>{t.home.title}</title>
                <meta name="description" content={t.home.content} />
            </Head>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                {/* Placeholder for Logo - In a real app, use the generated logo path */}
                {/* <Image src="/logo.png" alt="Mendigorría Eskola" width={200} height={200} /> */}
                <h1>{t.home.title}</h1>
            </div>

            <div className="card">
                <p style={{ fontSize: '1.2rem' }}>{t.home.content}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="card">
                    <h2>{t.school.title}</h2>
                    <p>{t.school.content.substring(0, 100)}...</p>
                </div>
                <div className="card">
                    <h2>{t.activities.title}</h2>
                    <p>{t.activities.content.substring(0, 100)}...</p>
                </div>
            </div>
        </>
    );
}
