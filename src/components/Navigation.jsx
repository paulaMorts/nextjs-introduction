import Link from "next/link"
import styles from "../styles/navigation.module.css"

export default function Navigation(props) {
    return (
        <Link href={ props.destination }>
            <div className={ styles.navigation } style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                { props.text }
            </div>
        </Link>
    )
}