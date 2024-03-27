document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger"). addEventListener ("click", function() {
        document.querySelector("header").classList.toggle("open")
    }) 

    mixitup('.womens');
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("checkbox"). addEventListener ("click", function() {
        document.querySelector("search-input").classList.toggle("other")
    })
})

