const greeting = localStorage.getItem('name');
document.getElementById('name').innerHTML = greeting;

const customizeProfileHandler = async (event) => {
  event.preventDefault();
//these lines turn the user inputs into const that we can store
  const location = document.querySelector('#location').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const style = document.querySelector('#style').value.trim();

  if (location || gender || style) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ location, style, style }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
        console.log("failed to update profile");
      }
    }
};


document
  .querySelector('.customize-form')
  .addEventListener('submit', customizeProfileHandler);  
