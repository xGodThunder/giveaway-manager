import TextField from '@material-ui/core/TextField';
import './style.css';
export default ()=>{
    return(
        <div className="giveaway__body">
        <form >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
    id="date"
    label="Birthday"
    type="date"
    variant="outlined"
    defaultValue="2017-05-24"
    style={{ width: 220 }}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{inputProps: { min: `${new Date().toISOString().split('T')[0]}`,
                               max: ``} }}
  />
        </form>
        </div>
    )
}