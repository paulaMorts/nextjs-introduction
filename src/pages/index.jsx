import Navigation from '../components/Navigation'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'Wrap',
            height: '100vh'
        }}>
            <Navigation destination="/stylish" text="Stylish"></Navigation>
            <Navigation destination="/app" text="Example" color="#9400d3"></Navigation>
            <Navigation destination="/jsx" text="JSX" color="crimson"></Navigation>
            <Navigation destination="/navigation" text="Navigation #01" color="green"></Navigation>
            <Navigation destination="/customer/uk/123" text="Navigation #02" color="blue"></Navigation>
            <Navigation destination="/state" text="Component with State" color="#a45b71"></Navigation>
            <Navigation destination="/integration_1" text="Integration with API #01" color="#42a9a9"></Navigation>
            <Navigation destination="/static" text="Static Content" color="#fa054a"></Navigation>
        </div>
    )
}