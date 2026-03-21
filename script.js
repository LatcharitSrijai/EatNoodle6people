const images = [
  "image/DekWinnie.png",
  "image/HBD KhunMo.png",
  "image/Khun Sori Full Body.png",
  "image/KhunL Closeup.png",
  "image/KhunMo 1000 follow.png",
  "image/Pjinnie_Songtest.png",
  "image/PKt.png",
  "image/Valentine Cownele Ori.png",
  "image/Yukata khunmi.png"
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// render รูป
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = src;
  };

  gallery.appendChild(img);
});

// ปิด modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = () => {
  modal.style.display = "none";
};