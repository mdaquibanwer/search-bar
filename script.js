const suggestions = ["Web Developer","Web Design","Youtube","Coding Tutorial","Blogger","Bollywood Movies","South Movies","Hollywood Movie","Designer","Developer","vlogger","Youtube channel","How to start youtube channel","mobile phones","smartphone","freelancer","how to start freelancing","facebook page","login form design","how to learn HTML & CSS","How to learn Java","How to learn JavaScript","how to become web designer","how to become web developer","how to start gaming channel"]

const searchContainer = document.querySelector(".search-input"),
inputBox = document.querySelector("input"),
suggestionBox = document.querySelector(".autocomplete-box");
// if user input any key
inputBox.addEventListener("input",(e)=>{
    let userData = e.target.value;  // user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            // filtering array value and user char to localcase and return only these data which starts with the user entered data;
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        })
        console.log(emptyArray);
        showSuggestions(emptyArray);
        searchContainer.classList.add("active");    // show suggestion box
        let allList = suggestionBox.querySelectorAll("li");
        for(let i=0;i<allList.length;i++){
            // adding click event in all li tags
            allList[i].setAttribute("onclick","select(this)")
        }
    }else{
        searchContainer.classList.remove("active"); // hide suggestion box
    }
})

function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
    inputBox.value = selectUserData // passing user selected data in the input field
    searchContainer.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>'
    }else{
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData
}