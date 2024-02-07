import React, { useState }from "react";
import axios from "axios";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data);
}

function search(event) {
    event.preventDefault();

    let apiKey = "8b0f6dca34a0f66b303deotf68e3607e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}


    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    )
}