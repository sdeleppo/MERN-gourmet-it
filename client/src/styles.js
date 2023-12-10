import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(179,74,32, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    button: {
        background: 'linear-gradient(45deg, #ff4747 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 10,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }

}));