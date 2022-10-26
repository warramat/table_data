fetch("https://smartcity-pakpoon-api.herokuapp.com/employee/employeeAll")
  .then((response) => response.json())
  .then((json) => {
    let li = `
    <div class="table-responsive-lg">
    <table class="table">
    <thead class="thead-dark">
        <tr>
            <th scope="col">  <input type="text" class="search-input" placeholder="คำนำหน้า"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="ชื่อ"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="นามสกุล"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="เพศ"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="อายุ"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="น้ำหนัก"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="ส่วนสูง"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="สังกัด"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="ตำแหน่ง"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="กอง"></th>
            <th scope="col">  <input type="text" class="search-input" placeholder="ฝ่าย"></th>       
        </tr>
    </thead>
    </table>
    </div>
   `;

    json.forEach((user) => {
      li += `
      <tbody>
        <tr>
            <td>${user.prefix}</td>
            <td>${user.name} </td>
            <td>${user.lastname}</td>
            <td>${user.sex}</td>
            <td>${user.age}</td>
            <td>${user.weight}</td>
            <td>${user.height}</td>
            <td>${user.job_position}</td>
            <td>${user.position}</td>
            <td>${user.division}</td>
            <td>${user.cotton}</td>
        </tr>
      </tbody>
     `;
    });

    document.getElementById("users").innerHTML = li;
  });

fetch("https://smartcity-pakpoon-api.herokuapp.com/employee/employeeAll", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField => {
        const tableRows = inputField.closest('table'.querySelectorAll('tbody tr'));
        const headerCell = inputField.closest('th')
        const otherHeaderCells =inputField.closest('tr').querySelectorAll("th")
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell)
        const searchableCells = Array.from(tableRows)
            .map(row => row.querySelectorAll('td')[columnIndex])

        inputField.addEventListener('input', () => {
            const searchQuery = inputField.ariaValueMax.toLocaleLowerCase()

            for (const tableCell of searchableCells){
                const row = tableCell.closest('tr')
                const value = tableCell.textContent
                .toLowerCase()
                .replace(',', '')

                row.style.visibility = null

                if (value.search(searchQuery) === -1 ){
                    row.style.visibility = 'collapse'
                }
            }
        })            
        console.log(searchableCells)
     
    })
  })