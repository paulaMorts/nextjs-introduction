import Layout from "../components/Layout"
import Header from "../components/Header"

export default function App() {
    return (
        <Layout title="Using components">
            <Header title="Next.js & React"/>
            <Header/>
        </Layout>
    )
}