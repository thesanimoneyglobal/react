interface Props {
    click?: () => void;
}


function AlertDismissible({click}: Props) {

    return <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button onClick={click} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
}

export default AlertDismissible