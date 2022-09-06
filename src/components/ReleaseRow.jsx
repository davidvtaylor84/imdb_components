const ReleaseRow = ({children, url})=>{
    return (
        <>
        <ul>
            <li>
                <h3><a href={url}>{children}</a></h3>
            </li>
        </ul>
        </>
    )
}

export default ReleaseRow

