function changmoney(){
    let mount = document.getElementById("money").value;
    let from = document.getElementById("idfrom").value;
    let to = document.getElementById("idto").value;
    console.log(`${from} --> ${to}`)
    if(from=='usd' && to=='vnd'){
         mount = mount*23000;
           alert("đô la sang việt nam là: " + mount);
}
if(from=='vnd'&& to=='usd'){
    mount=mount/23000;
    alert(`tiền việt qua đô la là: ${mount}`)
}
}