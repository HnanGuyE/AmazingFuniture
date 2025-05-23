
// Login
document.addEventListener('DOMContentLoaded', function() {

  // Hiển thị form khi nhấn logo3
  var logo3 = document.querySelector('.logo3');
  if (logo3) { // kiểm tra sự tồn tại của .logo3 
    logo3.addEventListener('click', function() {
      var dangnhap = document.querySelector('.dangnhap');
      var dangki = document.querySelector('.dangki');
        var blur = document.querySelector('.blur')
      if (dangnhap) {
        dangnhap.style.display = 'block';
       
      }
      if (dangki) {
        dangki.style.display = 'none';
        
      }
      if (blur) {
        blur.style.display = 'block';
      }
    });
  }
//click vào nút dangki(fom dangki)
  var dangki = document.getElementById('dangki');
  if (dangki) {
    dangki.addEventListener('click', function(e) {//Khi phần tử 'dangki' được nhấp chuột,
      // một hàm sẽ được thực thi và truyền vào một tham số sự kiện (e)
      e.preventDefault();// ngăn chặn sự kiện măcj định

     // baos loi khi k nha du truong
      var invalidFeedback = document.querySelectorAll('.invalid-feedback');
      invalidFeedback.forEach(function(element) {
        element.remove();
      });

      var isFormValid = true;
      var inputs = document.querySelectorAll('.red');

      inputs.forEach(function(input) {
        if (input.value.trim() === '') {
          input.classList.add('is-invalid');
          isFormValid = false;
          var errorMessage = document.createElement('p');
          errorMessage.classList.add('invalid-feedback3');
          errorMessage.textContent = 'Vui lòng nhập đủ thông tin.';
          input.parentNode.appendChild(errorMessage);
        } else {
          input.classList.remove('is-invalid');
        }
      });

      if (isFormValid) {
        // Chuyển đến phần dangnhap
        var dangnhap = document.querySelector('.dangnhap');
        var dangki = document.querySelector('.dangki');

        if (dangnhap) {
          dangnhap.style.display = 'block';
        }
        if (dangki) {
          dangki.style.display = 'none';
        }

        // Xóa dữ liệu trên các trường khi chuyển sang phần dangnhap
        var dangnhapInputs = document.querySelectorAll('.dangnhap input');
        dangnhapInputs.forEach(function(input) {
          input.value = '';
        });

   
      }
    });
  }
// nhan vao nut sinin
var login1 = document.getElementById('login1');
if (login1) {
  login1.addEventListener('click', function(e) {
    e.preventDefault();

    var loginName = document.getElementById('loginName').value.trim();
    var loginPassword = document.getElementById('loginPassword').value.trim();

    // Xóa thông báo lỗi trước đó
    var invalidFeedback1 = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback1.forEach(function(element) {
      element.remove();
    });

    if (loginName === '') {
      document.getElementById('loginName').classList.add('is-invalid');
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback1');
      errorMessage.textContent = 'Vui lòng nhập tên đăng nhập.';
      document.getElementById('loginName').parentNode.appendChild(errorMessage);
    } else {
      document.getElementById('loginName').classList.remove('is-invalid');
    }

    if (loginPassword === '') {
      document.getElementById('loginPassword').classList.add('is-invalid');
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback1');
      errorMessage.textContent = 'Vui lòng nhập mật khẩu.';
      document.getElementById('loginPassword').parentNode.appendChild(errorMessage);
    } else {
      document.getElementById('loginPassword').classList.remove('is-invalid');
    }

    if (loginName === '' || loginPassword === '') {
      var errorMessage = document.createElement('p');
      errorMessage.classList.add('invalid-feedback2');
    
      document.getElementById('login1').parentNode.appendChild(errorMessage);
    } else {
      var dangnhap = document.querySelector('.dangnhap');
      var blur = document.querySelector('.blur');

      if (dangnhap) {
        dangnhap.style.display = 'none';
      }
      if (blur) {
        blur.style.display = 'none';
      }

      var dangnhapInputs = document.querySelectorAll('.dangnhap input');
      dangnhapInputs.forEach(function(input) {
        input.value = '';
      });

      var dangkiInputs = document.querySelectorAll('.dangki input');
      dangkiInputs.forEach(function(input) {
        input.value = '';
      });

      var logo3 = document.querySelector('.logo3');
      var guest = document.querySelector('#Guest');

      if (logo3) {
        logo3.style.display = 'none';
      }
      if (guest) {
        guest.style.display = 'block';
      }

      var signInButton = document.getElementById('signInButton');
      if (signInButton) {
        signInButton.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Thực hiện xử lý đăng nhập ở đây
          // ...
          // Ví dụ: Chuyển hướng đến trang đăng nhập thành công
          window.location.href = 'success.html';
        });
      }

      // Ẩn thông báo lỗi khi người dùng nhấp chuột vào ô nhập
      var loginInputs = document.querySelectorAll('.login-input');
      loginInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
          input.classList.remove('is-invalid');
          var invalidFeedback = input.parentNode.querySelector('.invalid-feedback1');
          if (invalidFeedback) {
            invalidFeedback.remove();
          }
        });
      });
    
    }
  });
}/// lôgout
var guestElement = document.querySelector('#Guest');
var logoutElement = document.querySelector('.logout');

guestElement.addEventListener('click', function() {
  if (logoutElement.style.display === 'none') {
    logoutElement.style.display = 'block';
  } else {
    logoutElement.style.display = 'none';
  }
});
//out

var logo3Element = document.querySelector('.logo3');
var out1Element = document.querySelector('#out1');
var guestElement = document.querySelector('#Guest');

out1Element.addEventListener('click', function() {
  guestElement.style.display = 'none';
  logo3Element.style.display = 'block';
});



// nuts reg de chuyen sang dang ki
var register = document.getElementById('register');
if (register) {
  register.addEventListener('click', function() {
    var dangnhap = document.querySelector('.dangnhap');
    var dangki = document.querySelector('.dangki');

    if (dangnhap) {
      dangnhap.style.display = 'none';
    }
    if (dangki) {
      dangki.style.display = 'block';
    }

    // Xóa nội dung đã nhập và thông báo lỗi trên các trường
    var dangkiInputs = document.querySelectorAll('.dangki input');
    dangkiInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback3');
    invalidFeedback.forEach(function(element) {
      element.remove();
    });
  });
}

// Click vào close (dang nhap)
var cl = document.querySelectorAll('.close');
cl.forEach(function(element) {
  element.addEventListener('click', function() {
    var dangnhap = document.querySelector('.dangnhap');
    var blur = document.querySelector('.blur');

    if (dangnhap) {
      dangnhap.style.display = 'none';
    }
    if (blur) {
      blur.style.display = 'none';
    }

    // Xóa nội dung đã nhập và thông báo lỗi trên các trường
    var dangnhapInputs = document.querySelectorAll('.dangnhap input');
    dangnhapInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback.forEach(function(element) {
      element.remove();
    });
  });
});


// Click vào close1 (dang ki)
var cl1 = document.querySelectorAll('.close1');
cl1.forEach(function(element) {
  element.addEventListener('click', function() {
    var dangnhap = document.querySelector('.dangnhap');
    var dangki = document.querySelector('.dangki');
    var blur = document.querySelector('.blur');

    if (dangki) {
      dangki.style.display = 'none';
    }
    if (blur) {
      blur.style.display = 'none';
    }

    // Xóa nội dung đã nhập và thông báo lỗi trên các trường
    var dangkiInputs = document.querySelectorAll('.dangki input');
    dangkiInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback = document.querySelectorAll('.invalid-feedback3');
    invalidFeedback.forEach(function(element) {
      element.remove();
    });

    // Xóa nội dung đã nhập và thông báo lỗi trên các trường của dangnhap
    var dangnhapInputs = document.querySelectorAll('.dangnhap input');
    dangnhapInputs.forEach(function(input) {
      input.value = '';
      input.classList.remove('is-invalid');
    });

    var invalidFeedback1 = document.querySelectorAll('.invalid-feedback1');
    invalidFeedback1.forEach(function(element) {
      element.remove();
    });
  });
});

// click vao gior hang
var shop = document.getElementById('shop');
if (shop) {
  shop.addEventListener('click', function() {
    var giohang = document.querySelector('.giohang');

    if (giohang) {
      if (giohang.style.display === 'block') {
        giohang.style.display = 'none';
      } else {
        giohang.style.display = 'block';
      }
    }
  });
}

});

// chữ tiêu đề
const tieude = document.getElementById("tieude");
let position = 0;

setInterval(() => {//thiết lập một hàm callback được thực thi lặp lại sau một khoảng thời gian nhất định
  tieude.style.backgroundPosition = `${position}px 0`;
  position++;
}, 10);//lặp sau

// khung mess
function sendmesss() {
  var isFormValid = validateForm(); // Kiểm tra các trường đã nhập đủ hay chưa

  if (isFormValid) {
    // Xóa nội dung của phần tử errorContainer
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = '';

    // Xóa nội dung các trường nhập liệu
    var inputEmail = document.getElementById('floatingInput');
    var inputPassword = document.getElementById('floatingPassword');
    var textareaEmail = document.getElementById('floatingTextarea');
    var textareaMessage = document.getElementById('floatingTextarea2');

    inputEmail.value = '';
    inputPassword.value = '';
    textareaEmail.value = '';
    textareaMessage.value = '';

    alert('Gửi tin nhắn thành công!');
  } else {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerText = 'Vui lòng nhập đầy đủ thông tin!';
  }
}

function validateForm() {
  var inputEmail = document.getElementById('floatingInput');
  var inputPassword = document.getElementById('floatingPassword');
  var textareaEmail = document.getElementById('floatingTextarea');
  var textareaMessage = document.getElementById('floatingTextarea2');

  if (
    inputEmail.value.trim() === '' ||
    inputPassword.value.trim() === '' ||
    textareaEmail.value.trim() === '' ||
    textareaMessage.value.trim() === ''
  ) {
    return false; // Trường chưa được nhập đủ
  }

  return true; // Các trường đã được nhập đủ
}



///lọc sản phẩm
  // Lấy tất cả các nút điều khiển
  var buttons = document.querySelectorAll('.control div');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var type = this.getAttribute('type');
  
      var products = document.querySelectorAll('.theloai1-1');
  
      products.forEach(function(product) {
        if (type === 'all' || product.getAttribute('type') === type) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
  
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
  
      this.classList.add('active');
  
      // Xóa lớp CSS active-color khỏi tất cả các nút điều khiển
      buttons.forEach(function(btn) {
        btn.classList.remove('active-color');
      });
  
      // Thêm lớp CSS active-color cho nút điều khiển hiện tại
      this.classList.add('active-color');
    });
  });
  



//(click trên tthanh Home)
document.getElementById("contact").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("khung1");
  khung1.scrollIntoView({ behavior: "smooth" });// di chuyển đến vị trí của khgung 1,behavior: "smooth" để duy chuyển có độ mượt
});
document.getElementById("Testimonial").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("ykien");
  khung1.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("aboutus").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("lay3");
  khung1.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Products").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ "a"

  // Di chuyển đến vị trí của khung 1
  const khung1 = document.getElementById("hanghoa");
  khung1.scrollIntoView({ behavior: "smooth" });
});



//thanh search

const searchInput = document.getElementById('search');
const container = document.getElementById('container');
const iconSearch = document.getElementById('iconsearch');
// Xử lý sự kiện khi người dùng nhập vào thanh tìm kiếm
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const products = container.getElementsByClassName('theloai1-1');
  let found = false;
  // Duyệt qua danh sách sản phẩm và ẩn/hiện sản phẩm phù hợp
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productName = product.getElementsByClassName('tensanpham')[0].innerText.toLowerCase();
    const productPrice = product.getElementsByClassName('giasanpham')[0].innerText.toLowerCase();
    if (
      productName.indexOf(searchTerm) === -1 &&
      productPrice.indexOf(searchTerm) === -1
    ) {
      product.style.display = 'none';
    } else {
      product.style.display = 'block';
      found = true;
    }
  }
// Hiển thị thông báo khi không tìm thấy kết quả
  if (!found) {
    alert('Không tìm thấy sản phẩm phù hợp.');
  }
  // Cuộn xuống nếu tìm thấy sản phẩm
  if (found) {
    container.scrollIntoView({ behavior: 'smooth' });
  }
}
// Xử lý sự kiện khi nhấn vào biểu tượng tìm kiếm
iconSearch.addEventListener('click', handleSearch);
// Xử lý sự kiện khi nhấn phím Enter trong thanh tìm kiếm
searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    handleSearch();
  }
});



/// gio hàng
const productElements = document.querySelectorAll(".theloai1-1");
const cartElement = document.querySelector(".giohang");
const selectedProducts = [];// khỏi tạo 1 mảng rỗng 
let cartTotalPrice = 0;// tạo biến đếm tổng tiền
let cartTotalQuantity = 0;// tạo biến đếm tổng số lượng 
productElements.forEach(function (product) {// Với mỗi phần tử product trong productElements, thực hiện một vòng lặp.
  const heartIcon = product.querySelector(".bi-heart-fill");
  const productName = product.querySelector(".tensanpham").textContent;
  const productPrice = parseFloat(
    product.querySelector(".giasanpham").textContent.replace("$", "")
  );
  const productImageSrc = product.querySelector(".anhsanpham").getAttribute("src");

  heartIcon.addEventListener("click", function () {
    const existingProduct = selectedProducts.find((p) => p.name === productName);
    if (existingProduct) {
      existingProduct.count += 1;
    } else {
      const newProduct = {
        name: productName,
        count: 1,
        price: productPrice,
        image: productImageSrc,
      };
      selectedProducts.push(newProduct);
    }

    // Xóa các sản phẩm cũ trong giỏ hàng
    cartElement.innerHTML = "";

    // Tạo và hiển thị các sản phẩm trong giỏ hàng
    selectedProducts.forEach(function (productInfo) {
      const newItem = document.createElement("div");
      newItem.classList.add("cart-element");

      // Tạo phần tử hình ảnh sản phẩm
      const itemImage = document.createElement("img");
      itemImage.src = productInfo.image;
      itemImage.alt = productInfo.name;
      itemImage.classList.add("img-small");
      newItem.appendChild(itemImage);

      // Tạo phần tử tên sản phẩm
      const itemName = document.createElement("div");
      itemName.innerText = productInfo.name;
      newItem.appendChild(itemName);

      // Tạo phần tử gia san pham ( năm sau ten)
      const itemPrice = document.createElement("div");
      itemPrice.classList.add("item-price");
      newItem.appendChild(itemPrice);

      // Tạo nút giảm số lượng sản phẩm
      const decreaseButton = document.createElement("button");
      decreaseButton.innerText = "-";
      decreaseButton.classList.add("quantity-button", "decrease-button");// để css
      decreaseButton.addEventListener("click", function () {
        // Giảm số lượng sản phẩm
        if (productInfo.count > 1) {
          productInfo.count -= 1;
          itemQuantity.innerText = `X${productInfo.count}`;
          updateItemPrice(itemPrice, productInfo);
        }
        updateCartTotal();
      });
      newItem.appendChild(decreaseButton);

      // Tạo phần tử số lượng sản phẩm
      const itemQuantity = document.createElement("div");
      itemQuantity.innerText = `X${productInfo.count}`;
      newItem.appendChild(itemQuantity);

      // Tạo nút tăng số lượng sản phẩm
      const increaseButton = document.createElement("button");
      increaseButton.innerText = "+";
      increaseButton.classList.add("quantity-button", "increase-button");// để css
      increaseButton.addEventListener("click", function () {
        // Tăng số lượng sản phẩm
        productInfo.count += 1;
        itemQuantity.innerText = `X${productInfo.count}`;
        updateItemPrice(itemPrice, productInfo);
        updateCartTotal();
      });
      newItem.appendChild(increaseButton);

      // Tạo nút xóa sản phẩm
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", function () {
        // Xóa sản phẩm khỏi giỏ hàng
        const index = selectedProducts.indexOf(productInfo);// kiểm tra xem sanpham có tồn tại trong giỏ hàng k
        if (index !== -1) {
          selectedProducts.splice(index, 1);//nếu có thì dùng splice để xóa sản phẩm khỏi mảng 
          newItem.remove();// newItem sẽ được xóa khỏi DOM
          updateCartTotal(); //udape tổng tiền, tổng sản phẩm
        }
      });
      newItem.appendChild(deleteButton);// hiển thị nust xóa trong giỏ hàng

      cartElement.appendChild(newItem);
      updateItemPrice(itemPrice, productInfo);// cập nhật giá ở sau tên sp
    });

    // Cập nhật tổng giá và tổng số lượng của giỏ hàng
    updateCartTotal();
    // up date gia san pham(sau ten (khi thả tim nhìu lần và nahans + - ))
      function updateItemPrice(itemPriceElement, productInfo) {
    const totalPrice = productInfo.price * productInfo.count;
      itemPriceElement.innerText = `$${totalPrice}`;
}

function updateCartTotal() {
  // Đặt lại tổng giá và tổng số lượng
  cartTotalPrice = 0;
  cartTotalQuantity = 0;

  // Tính toán tổng giá và tổng số lượng
  selectedProducts.forEach(function (productInfo) {
    const totalPrice = productInfo.price * productInfo.count;
    cartTotalPrice += totalPrice;
    cartTotalQuantity += productInfo.count;
  });

  // Xóa phần tử tổng giá trị giỏ hàng hiện có
  const existingContainer = document.querySelector(".cart-total-container");
  if (existingContainer) {
    existingContainer.remove();
  }

  // Tạo phần tử tổng giá trị giỏ hàng mới
  const cartTotalContainer = document.createElement("div");// tạo 1 phần tử div mới
  cartTotalContainer.classList.add("cart-total-container");

  // Tạo phần tử tổng giá sản phẩm
  const cartTotalPriceElement = document.createElement("div");
  cartTotalPriceElement.classList.add("cart-total");
  cartTotalPriceElement.innerText = `Tổng tiền: $${cartTotalPrice}`;// dặt nội dung văn bản hiện thị tổng tiền
  cartTotalContainer.appendChild(cartTotalPriceElement);

  // Tạo phần tử tổng số lượng sản phẩm
  const cartTotalQuantityElement = document.createElement("div");
  cartTotalQuantityElement.classList.add("cart-total-quantity");
  cartTotalQuantityElement.innerText = `Tổng số sản phẩm: ${cartTotalQuantity}`;
  cartTotalContainer.appendChild(cartTotalQuantityElement);

  // Tạo nút thanh toán
  const checkoutButton = document.createElement("button");
  checkoutButton.classList.add("checkout-button");
  checkoutButton.innerText = "Thanh toán";
  checkoutButton.classList.add("thanhtoan")// them vào để css
  checkoutButton.addEventListener("click", function () {
    // Xử lý khi nhấp vào nút thanh toán
    alert("Cảm ơn bạn đã mua hàng!");

    // Ẩn giỏ hàng
    cartElement.style.display = "none";
  });
  cartTotalContainer.appendChild(checkoutButton);

  // Thêm phần tử vào giỏ hàng
  cartElement.appendChild(cartTotalContainer);
}

  // Animation hình ảnh sản phẩm
  const productImageClone = product.querySelector(".anhsanpham").cloneNode(true);
  productImageClone.classList.add("product-clone");
  productImageClone.style.left = product.getBoundingClientRect().left + "px";
  productImageClone.style.top = product.getBoundingClientRect().top + "px";
  productImageClone.style.width = product.getBoundingClientRect().width + "px";
  productImageClone.style.height = product.getBoundingClientRect().height + "px";
  document.body.appendChild(productImageClone);

  const imageLoader = new Image();
  imageLoader.onload = function () {
    productImageClone.setAttribute("src", productImageSrc);
    setTimeout(function () {
      const shopElement = document.querySelector("#shop");
      const shopRect = shopElement.getBoundingClientRect();
      const productRect = productImageClone.getBoundingClientRect();

      const offsetX = shopRect.left - productRect.left - 60;
      const offsetY = shopRect.top - productRect.top - 100;
      const scaleX = shopRect.width / productRect.width;
      const scaleY = shopRect.height / productRect.height;
      const scaleRatio = 0.3;// kích thức khi hoạt ảnh duy chuyển

      const targetScaleX = scaleX * scaleRatio;
      const targetScaleY = scaleY * scaleRatio;

      productImageClone.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${targetScaleX}, ${targetScaleY})`;

      shopElement.classList.add("shop-highlight");
    }, 0);

    setTimeout(function () {
      productImageClone.remove();
      document.querySelector("#shop").classList.remove("shop-highlight");
    }, 700);
  };

  imageLoader.src = productImageSrc;
});
})

// gọi api

var dataIndex = 0; // Biến đếm chỉ số dữ liệu

document.getElementById('ff1').addEventListener('click', function() {
  // Gọi API để lấy dữ liệu mới
  fetch('https://649270e4428c3d2035d01f94.mockapi.io/ktjs')
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        alert("No more users available.");
        return;
      }

      // Lấy người dùng tương ứng với chỉ số dataIndex
      var user = data[dataIndex];

      // Thay đổi nội dung của khungimage1
      var khungimage1 = document.querySelector('.khungimage1');
      khungimage1.style.backgroundImage = 'url(' + user.avatar + ')';

      // Thay đổi tên
      var frame12_2 = document.querySelector('.frame12-2');
      frame12_2.textContent = user.name;

      // Thay đổi công việc
      var frame12_3 = document.querySelector('.frame12-3');
      frame12_3.textContent = user.job;
      
      // Lấy nội dung của comment
      var frame12_1 = document.querySelector('.frame12-1');
      frame12_1.textContent = user.comment;

      // Tăng chỉ số dataIndex và kiểm tra nếu vượt quá độ dài của mảng data
      dataIndex++;
      if (dataIndex >= data.length) {
        dataIndex = 0; // Reset chỉ số về 0 nếu đã hết dữ liệu
      }
    })
    .catch(error => {
      console.log('Error:', error);
    })
    .finally(() => {
      // Khôi phục trạng thái mặc định nếu đã gọi hết tất cả các API
      if (dataIndex === 0) {
        // Khôi phục trạng thái mặc định ở đây
        var khungimage1 = document.querySelector('.khungimage1');
        khungimage1.style.backgroundImage = '';
        
        var frame12_2 = document.querySelector('.frame12-2');
        frame12_2.textContent = 'Wade Warren';
        
        var frame12_3 = document.querySelector('.frame12-3');
        frame12_3.textContent = 'Doctor';
        
        var frame12_1 = document.querySelector('.frame12-1');
        frame12_1.innerHTML = `Since the online marketplace can be a scary place,
                              <br>the presence of customer reviews on an online store helps establish authenticity,
                              confidence, and trust among shoppers.<br>`;
      }
    });
    
});
