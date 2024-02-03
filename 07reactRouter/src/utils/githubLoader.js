const githubInfoLoader = async ()=>{
    const data= await fetch('https://api.github.com/users/ravi02205');
    return data.json();
}

export default githubInfoLoader;