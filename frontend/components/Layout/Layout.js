import global from './global'

function Layout(props) {
    return (
        <>
            {props.children}
            <style jsx global>
                { global }
            </style>
        </>
    )
}

export default Layout