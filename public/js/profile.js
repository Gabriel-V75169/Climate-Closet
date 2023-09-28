const customizeProfileHandler = async (event) => {
  event.preventDefault();
//these lines turn the user inputs into const that we can store
  const gender = document.querySelector('#gender').value;
  const season = document.querySelector('#season').value;

  const response = await fetch('/api/customize', {
      method: 'POST',
      body: JSON.stringify({ 
        gender, 
        season 
      }),
      headers: { 
        'Content-Type': 'application/json' },
    });
  
  if (response.ok) {
      document.location.replace('/outfits');
      console.log('Save Successful')
    } else {
      alert(response.statusText);
      console.log("failed to update profile");
    }

};


document
  .querySelector('.customize-form')
  .addEventListener('submit', customizeProfileHandler);  
