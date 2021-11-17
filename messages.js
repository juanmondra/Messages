// string database
const subjects = ["You" , "Mary" , "John" , "Jacob" , "Chris"];
const verbs = ['marry' , 'kill' , 'eat', 'grab' , 'cuddle with'];
const extra = ['a mouse' , 'a tree' , 'forever' , 'me' , 'a butthole'] 


const subjectRand = () => {
    let num = Math.floor(Math.random() * 5);
    return subjects[num];

}

const verbRand = () => {
    let num1 = Math.floor(Math.random() * 5);
    return verbs[num1];

}

const extraRand = () => {
    let num2 = Math.floor(Math.random() * 5);
    return extra[num2];

}




const generateMessage = () => {
    console.log(`Your message is: ${subjectRand()} ${verbRand()} ${extraRand()}`);
}

generateMessage();