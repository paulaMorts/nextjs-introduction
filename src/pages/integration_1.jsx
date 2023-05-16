import Layout from "../components/Layout"
import { useState } from "react"

export default function Integration() {

    const [customer, setCustomer] = useState({})
    const [id, setId] = useState(1)

    /*function showCustomer() {
        fetch(`http://localhost:3000/api/customers/${id}`)
            .then(resp => resp.json())
            .then(data => setCustomer(data))
    }*/

    async function showCustomer() {
        const resp = await fetch(`http://localhost:3000/api/customers/${id}`)
        const data = await resp.json()
        setCustomer(data)
    }

    

    return (
        <Layout>
            <div>
            <input type="number" value={ id }
                onChange={e => setId(e.target.value)}/>
                <button onClick={ showCustomer }>Show Customer</button>
            </div>
            <ul>
                <li>ID: { customer.id }</li>
                <li>Name: { customer.name }</li>
                <li>Email: { customer.email }</li>
            </ul>
        </Layout>
    )
}