const spicEl = document.querySelectorAll(".fire-Hoses .spic-1>img");
    const bpicEl = document.querySelector(".fire-Hoses .bpic-1>img");

    spicEl.forEach((value, i)=>{
      value.addEventListener("click", ()=>{
        bpicEl.src = value.src;
      })
    })

    const fittingEl = document.querySelectorAll(".fittings .spic-1>img");
    const bpicElfitting = document.querySelector(".fittings .bpic-1>img");
    fittingEl.forEach((value, i)=>{
      value.addEventListener("click", ()=>{
        bpicElfitting.src = value.src;
      })
    })