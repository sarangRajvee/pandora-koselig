function myFunction() {
    // console.log('clicked');
    let navBig = document.getElementById('nav-big');
    // console.log(navBig);
    if(navBig.style.display === "" || navBig.style.display === "none")
    {
        // console.log('yes');
        navBig.style.display = "block";
    }
    else
    {
        // console.log('no');
        navBig.style.display = "none";
    }
    // console.log(navBig.style);
}