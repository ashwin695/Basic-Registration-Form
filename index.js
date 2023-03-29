function handleSubmit(event)
{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    console.log(event.target.date.value)
    console.log(event.target.time.value)
}