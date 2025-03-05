function Button(){
    const handleClick = (e) => {
        e.target.innerHTML = "Clicked smiley";

    }

    return <button onClick={(e) => handleClick(e)}>Click me</button>
}

export default Button;