import Head from 'next/head';

export default function Familia({ t }) {
    return (
        <>
            <Head>
                <title>{t.family.title} - Mendigorría Eskola</title>
            </Head>
            <h1>{t.family.title}</h1>
            <div className="card">
                <p>{t.family.content}</p>
            </div>
        </>
    );
}
