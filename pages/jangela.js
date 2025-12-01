import Head from 'next/head';

export default function Jangela({ t }) {
    return (
        <>
            <Head>
                <title>{t.dining.title} - Mendigorría Eskola</title>
            </Head>
            <h1>{t.dining.title}</h1>
            <div className="card">
                <p>{t.dining.content}</p>
            </div>
        </>
    );
}
