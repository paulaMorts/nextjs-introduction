import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function CustomerbyCode() {
    const router = useRouter()

    return(
        <Layout title="Dynamic Navigation">
            <div>Code = {router.query.code}</div>
            <div>Office = {router.query.subsidiary}</div>
        </Layout>
    )
}