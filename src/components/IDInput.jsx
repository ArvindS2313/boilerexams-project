import "./components.css";
import CircularProgress from "@mui/material/CircularProgress"

export default function IDInput({id, setId, onSubmit, loading, displayError}) {
    const formSubmitted = (e) => {
        e.preventDefault();
        if (id.trim() !== "") {
            onSubmit(id.trim());
        }
    }

    return <><form id="id-input" onSubmit={formSubmitted}>
        <label htmlFor="qid">Enter QID: </label>
        <input type="text" id="qid" placeholder="enter id here" 
                onChange = {(e) => setId(e.target.value)} />
        <button type="submit">Fetch Question</button>
        
    </form>
    {loading && <div className="loading"><CircularProgress className="loading-text"/></div>}
    {displayError && <p className="error-text">Error: Invalid ID. Please try again.</p>}
    </>  
}