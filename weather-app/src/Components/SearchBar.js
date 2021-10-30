
const SearchBar = ({onChange}) => {
    return (
        <div className = "search-bar">
            <label><h1>Weather Explorer</h1></label>

            <form >
                <input type="text" placeholder="Search for cities" onChange = {(e) => onChange(e.target.value)}/>
                < input type="submit" value="Reload"/>
            </form>
        </div>
    )
}

export default SearchBar
