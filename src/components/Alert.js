export default function Alert(props) {
    const capitalize = (word) => {
        const getWord = word.toLowerCase();
        return getWord.charAt(0).toUpperCase() + getWord.slice(1).toLowerCase(); 
    }
    return (
        <div style={{height: '50px'}}>
            {props.alert && 
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">{capitalize(props.alert.type)}: {props.alert.msg}</div>}
        </div>
    )
};
