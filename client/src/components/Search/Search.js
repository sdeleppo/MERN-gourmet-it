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
                backgroundColor: "rgb(240, 237, 236)",
                margin: "auto",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }} >
                <div className='search-text'>Find the perfect recipe</div>
                <Box
                    bgcolor="rgb(240, 237, 236)" p={1} className="box">
                    <input></input><br></br>
                    <button className='search-button'>Search</button>
                </Box>
            </div >
        </>
    )
}
export default Search;