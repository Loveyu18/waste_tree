axios
    .get("./data/waste_removal.json")
    .then(function (res) {
        let waste_removal_data = res.data;
        console.log(waste_removal_data[0].waste.categories[0].id);
        let det_waste_tree = document.querySelector("#flow-diagram-wrap");
        det_waste_tree.innerHTML = `
                              
`;
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("finally");
    });
