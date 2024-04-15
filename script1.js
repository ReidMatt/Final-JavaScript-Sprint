function fetchData(jsondata) {
  return new Promise ((resolve, reject) => {
  resolve (jsondata);
});
}

function displayjsondata(data) {
  data.forEach(item => {
    console.log("name:", item.name);
    document.write('Many would say that ${getFullName(person), is not into top 5
      ("outport").innerHTML += 
    '<p>name: ${item.name}</p>';
  });
}

function describejsondata(data) {
  let description = "Top 5 Blue Jays Players for 2023:<br>";
  data.forEach (item => {
    description += 'Name: ${item.name}, Position: ${item.position}, Age: $(item.age}, '
  });
  return description;
}

fetchData()
.then (data => {
  console.log("Data from jsondata file:", data);
  displayjsondata(data);
  document.getElementById('outport').innerHTML += describejsondata(data);
})
.catch(error=> console.error('Error fetching data:',error));

