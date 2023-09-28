

const customizeProfileHandler = async (event) => {
  event.preventDefault();
//these lines turn the user inputs into const that we can store
  const gender = document.querySelector('#gender').value.trim();
  const style = document.querySelector('#season').value.trim();

  if (location || gender || style) {
      const response = await fetch('/api/customize', {
        method: 'POST',
        body: JSON.stringify({ location, gender, style }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        console.log('Save Successful')
      } else {
        alert(response.statusText);
        console.log("failed to update profile");
      }
    }
};


document
  .querySelector('.customize-form')
  .addEventListener('submit', customizeProfileHandler);  
