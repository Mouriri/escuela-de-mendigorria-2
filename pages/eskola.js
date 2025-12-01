import Head from 'next/head';

export default function Eskola({ t }) {
    return (
        <>
            <Head>
                <title>{t.school.title} - Mendigorría Eskola</title>
            </Head>
            <h1>{t.school.title}</h1>
            <div className="card">
                <p>{t.school.content}</p>
            </div>
        </>
    );
}
