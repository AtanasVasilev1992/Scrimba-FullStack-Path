const btn = document.getElementById('btn');
const activity = document.getElementById('activity');

btn.addEventListener('click', ()=> {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data => {
        activity.textContent = data.activity;
    })
})