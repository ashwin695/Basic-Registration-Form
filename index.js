function handleSubmit(event)
{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    console.log(event.target.date.value)
    console.log(event.target.time.value)

    let details = {
        name: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        date: event.target.date.value,
        time: event.target.time.value,
    }

    localStorage.setItem('details', JSON.stringify(details))
    alert("User details saved successfully.");
}