let companies = `[
    {
        "name": "Nucamp",
        "number_of_employees": 150,
        "CEO": "Ludo Fourrage",
        "glassdoorRating": 5.0
    }
  ]`;
  console.log("This is JSON String \n"+companies+"\n");
  companies = JSON.parse(companies);
  console.log("This is JS Object \n", companies);

  const company = companies[0];
  console.log(company);
  console.log("Company Name: " + company.name);
  console.log("CEO: " + company.CEO);

  companies.push({
    "name": "Microsoft",
    "number_of_employees": 150000,
    "CEO": "Satya Nadella",
    "rating": 4.7
 });
 console.log(companies);

  //converting back to JSON
  let companiesString = JSON.stringify(companies);
  console.log(companiesString);
  