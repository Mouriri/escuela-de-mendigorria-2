import Head from 'next/head';

export default function Jarduerak({ t }) {
    return (
        <>
            <Head>
                <title>{t.activities.title} - Mendigorría Eskola</title>
            </Head>
            <h1>{t.activities.title}</h1>
            <div className="card">
                <p>{t.activities.content}</p>
            </div>
        </>
    );
}
