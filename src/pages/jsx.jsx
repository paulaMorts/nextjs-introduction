import Layout from "../components/Layout"

export default function Jsx() {
    const title = <h1>JSX</h1>

    function subtitle() {
        return <h2>{ "is really cool!".toUpperCase() }</h2>
    }

    return (
        <Layout title="Understanding Jsx">
            <div>
                { title }
                { subtitle() }
                <p>
                    {JSON.stringify({name: "João", idade: 30})}
                </p>
            </div>
        </Layout>
    )
}