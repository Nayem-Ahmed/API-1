const loadPhone = async (searchText) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data
    // console.log(phones)
    displayPhones(phones);
    
}
const displayPhones = (phones) =>{
    const div = document.getElementById('cards-items')
    div.innerText = '';
    const showallBtn = document.getElementById('showall-btn');
    if (phones.length > 12) {
        showallBtn.classList.remove('hidden');
    }else{
        showallBtn.classList.add('hidden');
    }
    phones = phones.slice(0,8)
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone);
        // create a div
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card  bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
                  <img src="${phone.image}" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions">
                    <button onclick = "showDetailsBtn('${phone.slug}');my_modal_5.showModal()" class="btn btn-primary">Show Details</button>
                  </div>
                </div>
        `;
        div.appendChild(phoneCard);
    });
    // hide loading
    loading(false)
}
// search btn
const handleSearch = () =>{
    const inputField = document.getElementById('input-field');
    const text = inputField.value;
    // console.log(text)
    loadPhone(text)
    loading(true);
    inputField.value = ''

}
const loading = (isLoading) =>{
    const loading = document.getElementById('loading');
    if (isLoading) {   
        loading.classList.remove('hidden');
    }else{
        loading.classList.add('hidden');
    }

}
const showDetailsBtn = async (id) =>{
    const response = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await response.json();
    const phoneDetails = data.data;
     console.log(phoneDetails)
    phoneDetailsInformation(phoneDetails)
}

const phoneDetailsInformation = (phoneDetails) =>{
    const phoneTittles = document.getElementById('phone-tittles');
    phoneTittles.innerText = phoneDetails.name;

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <img class= "text-center mx-auto" src =" ${phoneDetails.image}"/>
    `

    my_modal_5.showModal();


  
}


// loadPhone()

