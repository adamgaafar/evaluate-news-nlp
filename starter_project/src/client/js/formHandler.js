// Replace checkForName with a function that checks the URL
import { checkUrl } from './checkUrl'
import axios from "axios";


const sectionRes = document .querySelectorAll('.divRes p');
const form = document.getElementById('urlForm');


//adding the form handling function on click or submit
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('url').value;

    //check the url
    if (!checkUrl(formText)){
        showError("Please, Enter a valid URL");
        return;
    }

    console.log(formText);

    const {data} = await axios.post('http://localhost:8000/url', {input:formText}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const {msg, sample} = data;
    if (msg) {
        showError(msg);
        return ;
    }

    showResults(sample)

}

const showError = (error) => {
    const err = document.querySelector('#error');
    sectionRes.forEach(elem => {
        elem.style.display = 'none';
    })
    document.querySelector('.errorD').style.display = 'flex';
    err.innerText = error;
}

const showResults = (sample) => {
    sectionRes.forEach(elem => {
        elem.style.display = 'block';
    })

    document.querySelector('.agreement').innerHTML = `Agreement: ${sample.agreement}`;
    document.querySelector('.subjectivity').innerHTML = `Subjectivity: ${sample.subjectivity}`;
    document.querySelector('.confidence').innerHTML = `Confidence: ${sample.confidence}`;
    document.querySelector('.irony').innerHTML = `Irony: ${sample.irony}`;
    document.querySelector('.score_tag').innerHTML = `Score Tag: ${sample.scoreTag}`;
    document.querySelector('.errorD').style.display = 'none';
}



// Export the handleSubmit function
export { handleSubmit };

