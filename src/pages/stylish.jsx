import Layout from '../components/Layout'
import styles from '../styles/stylish.module.css'

export default function Stylish() {
    return (
        <Layout title='CSS Example'>
            <div className={styles.violet}>
                <h1>Style using CSS modules</h1>
            </div>
        </Layout>
    )
}