export async function getUserList() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const actualResult = result.json();
    return actualResult
}