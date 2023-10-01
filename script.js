async function getdata() {
  try {
    let enter = document.getElementById("inp").value;

    if (enter < 1 || enter > 1330) {
      alert("Enter between 1 to 1330");
    }

    let res = await fetch(
      `https://api-thirukkural.vercel.app/api?num=${enter}`
    );

    let ans = await res.json();

    document.getElementById("ktamil").value = `${ans.line1}\n${ans.line2}`;
    document.getElementById("kenglish").value = ans.eng;
    document.getElementById("st").value = ans.sect_tam;
    document.getElementById("cgt").value = ans.chapgrp_tam;
    document.getElementById("cnt").value = ans.chap_tam;
    document.getElementById("eit").value = ans.tam_exp;
    document.getElementById("se").value = ans.sect_eng;
    document.getElementById("cge").value = ans.chapgrp_eng;
    document.getElementById("cne").value = ans.chap_eng;
    document.getElementById("eie").innerHTML = ans.eng_exp;
  } catch (error) {
    console.log(error);
  }
}
