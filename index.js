function handleSubmit(event)
{
    event.preventDefault();
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    console.log(event.target.date.value)
    console.log(event.target.time.value)

    localStorage.setItem('name', event.target.username.value)
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('phone', event.target.phone.value)
    localStorage.setItem('date', event.target.date.value)
    localStorage.setItem('time', event.target.time.value)
}