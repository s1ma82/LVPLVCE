export function submit(e, data) {
    e.preventDefault()
    const { value } = data
    if(value.length === 0) return
    location.replace(`https://www.google.com/search?q=${value}&sourceid=chrome&ie=UTF-8`)

}