export const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget;
        console.log(form.elements.login.value)
        e.currentTarget.reset();
}

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3 mt-3">
                <input className="form-control" type="text" name="login" autoComplete="off"/>
            </div>
            <button className="btn btn-primary" type="submit">Log in</button>
        </form>
    )
};