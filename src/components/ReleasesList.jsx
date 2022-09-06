import ReleaseRow from "./ReleaseRow"

const ReleasesList =({releases})=>{

    const filmComponents = releases.map((release)=>{
        return (
            <ReleaseRow key={release.id} url={release.url}>{release.name}</ReleaseRow>
        )
    });
    return <>{filmComponents}</>
}

export default ReleasesList



