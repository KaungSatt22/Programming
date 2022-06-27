const loadReadMe = async (login,repo)=> {
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const {download_url} = await fetch(uri).then(res=> 
        res.json())
    const markdown = await fetch(download_url).then(res=> res.text())
    console.log(markdown)
}
loadReadMe('moonhighway','learning-react')