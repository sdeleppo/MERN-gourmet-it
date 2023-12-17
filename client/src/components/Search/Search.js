import Box from '@material-ui/core/Box';
import styles from './styles.css'

const Search = () => {
    return (
        <>

            <div style={{
                marginLeft: '40%',
                marginTop: '60px',
                width: '65%',
                textAlign: "center",
                color: "#7a2604b6",
                margin: "auto"
            }} >
                <div className='search-text'>Find the perfect recipe</div>
                <Box color="white"
                    bgcolor="rgb(240, 237, 236)" p={1} className="box">
                    <input></input>
                    <button className='search-button'>Search</button>
                </Box>
            </div >
        </>
    )
}
export default Search;