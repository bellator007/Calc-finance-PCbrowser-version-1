function finance () {
    let profit = document.getElementById('profit').value;
    let rent_home = document.getElementById('rent_home').value;
    let phone_and_net = document.getElementById('phone_and_net').value;
    let eat = document.getElementById('eat').value;
    let home_chemical = document.getElementById('home_chemical').value;
    let credit = document.getElementById('credit').value;
    let other = document.getElementById('other').value;


   let result = profit - rent_home - phone_and_net - eat - home_chemical - credit - other;
    document.getElementById('result').innerHTML = result;
}