import Layout from "../components/Layout";

//we can use an async function
export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Static(props) {
    return(
        <Layout title="Static Content">
            <div>{ props.number}</div>
        </Layout>
    )
}