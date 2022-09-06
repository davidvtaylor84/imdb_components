const ReleaseRow = ({children, url})=>{
    return (
        <>
        <li>
            <h3><a href={url}>{children}</a></h3>
        </li>
        </>
    )
}

export default ReleaseRow

