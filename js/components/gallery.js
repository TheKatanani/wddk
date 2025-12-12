export default function Gallery() {
  return /*html*/`
    <div class="w-full flex flex-col gap-10">

      <!-- GALLERY GRID -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:max-h-[400px] overflow-y-auto">

        <div class="gallery-item">
          <img src="./assets/images/gallery/img1.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img2.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img3.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img4.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img5.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img6.jpg" class="gallery-img" />
        </div>
        <div class="gallery-item">
          <img src="./assets/images/gallery/img4.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img5.jpg" class="gallery-img" />
        </div>

        <div class="gallery-item">
          <img src="./assets/images/gallery/img6.jpg" class="gallery-img" />
        </div>

      </div>

      <!-- Reviews Section (same as reservation) -->
      <div class="mt-6 flex flex-col gap-6">

        <div class="flex items-center gap-2 text-[15px] font-semibold text-gray-800">
          <img src="./assets/icons/review.svg" class="w-5 h-5" />
          Reviews
        </div>

        <div class="flex flex-col gap-2">
          <div class="h-2 rounded-full bg-gray-200"></div>
          <div class="h-2 rounded-full bg-gray-200 w-[80%]"></div>
        </div>

        ${renderReview("Mohammed", "2/5/24")}
        ${renderReview("Mohammed", "2/5/24")}
        ${renderReview("Mohammed", "2/5/24")}

      </div>

    </div>
  `;
}

function renderReview(name, date) {
  return /*html*/`
    <div class="bg-[#F5F5F5] rounded-xl p-4 flex flex-col gap-1 text-[13px] text-gray-700">
      <div class="flex justify-between items-center mb-1">
        <span class="font-semibold">${name}</span>
        <span class="text-[12px] text-gray-500">${date}</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  `;
}
