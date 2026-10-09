/**
 * 5 NGÀY MASTER VIDEO AI - JAVASCRIPT APPLICATION
 * THEME: Midnight Cosmic Violet + Electric Purple (#5831d1) + Radiant Orange (#d84517)
 */

// 1. DATA: 10 DẠNG VIDEO BÁN HÀNG & XÂY KÊNH
const VIDEO_TYPES = [
  {
    slug: "do-gia-dung",
    group: "BÁN HÀNG",
    name: "Đồ gia dụng",
    desc: "Video review sản phẩm gia dụng chốt đơn liên tục",
    intro: "Biến từng món đồ gia dụng thành video review hấp dẫn, khiến người xem muốn mua ngay mà không cần quay thật.",
    learn: [
      "Kịch bản review 30s chuẩn chốt đơn",
      "Dựng cảnh bếp, phòng khách bằng AI",
      "Gắn giỏ hàng TikTok Shop / Shopee"
    ],
    demo: "https://drive.google.com/file/d/1YhsxJwfUw9ImrDi0_BSxXFVUm13mS-aI/preview",
    img: "assets/images/v-giadung.jpg"
  },
  {
    slug: "do-an",
    group: "BÁN HÀNG",
    name: "Đồ ăn",
    desc: "Video món ăn ngon mắt, kích thích vị giác",
    intro: "Làm video đồ ăn bốc khói, cận cảnh đẹp như quảng cáo để bán online hoặc kéo khách về quán.",
    learn: [
      "Prompt tạo cảnh món ăn cận cảnh",
      "Hiệu ứng khói, nước sốt chuyển động",
      "Công thức hook 3 giây đầu"
    ],
    demo: "https://drive.google.com/file/d/1xzQFxywAiJE_SuQ_tfHPzC2ZJGLyE9R4/preview",
    img: "assets/images/v-doan.jpg"
  },
  {
    slug: "huong-dan-nau-an",
    group: "BÁN HÀNG",
    name: "Hướng dẫn nấu ăn",
    desc: "Video công thức từng bước, dễ lên xu hướng",
    intro: "Tạo series video dạy nấu ăn từng bước, xây kênh và gắn link bán nguyên liệu, dụng cụ bếp.",
    learn: [
      "Chia kịch bản công thức theo bước",
      "Giọng đọc AI tự nhiên",
      "Gắn affiliate dụng cụ bếp"
    ],
    demo: "https://drive.google.com/file/d/1xy3uKP787iJq316nwDkJHPDu6_wC2w9J/preview",
    img: "assets/images/v-nauan.jpg"
  },
  {
    slug: "bat-dong-san",
    group: "BÁN HÀNG",
    name: "Bất động sản",
    desc: "Video tour nhà, dự án sang trọng, chuyên nghiệp",
    intro: "Dựng video giới thiệu căn hộ, dự án như flycam – không cần đội quay, vẫn sang trọng thu hút khách.",
    learn: [
      "Video tour căn hộ từ ảnh tĩnh",
      "Chuyển động camera điện ảnh",
      "Kịch bản thu lead khách hàng"
    ],
    demo: "https://drive.google.com/file/d/1x0qRK4nMja9-sZeXBKsr1FhUucZhSwfR/preview",
    img: "assets/images/v-batdongsan.jpg"
  },
  {
    slug: "tvc-quang-cao-phim",
    group: "BÁN HÀNG",
    name: "TVC quảng cáo phim",
    desc: "TVC điện ảnh đẳng cấp chỉ với AI",
    intro: "Làm TVC quảng cáo phong cách điện ảnh cho thương hiệu, nhận job làm video giá cao.",
    learn: [
      "Storyboard TVC chuyên nghiệp",
      "Giữ nhân vật đồng nhất qua các cảnh",
      "Âm nhạc, chỉnh màu điện ảnh"
    ],
    demo: "https://drive.google.com/file/d/1gj7LVLE5fhWNmbsgL4hiMjZIGYklUeai/preview",
    img: "assets/images/v-tvc.jpg"
  },
  {
    slug: "thuong-hieu-ca-nhan",
    group: "XÂY KÊNH",
    name: "Thương hiệu cá nhân",
    desc: "Video nói chuyện với camera, xây uy tín",
    intro: "Xây thương hiệu cá nhân bằng avatar AI của chính bạn – ra video mỗi ngày không cần lên hình.",
    learn: [
      "Tạo avatar AI giống bạn",
      "Kịch bản chia sẻ giá trị",
      "Lịch đăng 5 ngày xây kênh"
    ],
    demo: "https://drive.google.com/file/d/1ie6NhAlZR2cO0nRqunx1gDovAeURsNen/preview",
    img: "assets/images/v-thuonghieu.jpg"
  },
  {
    slug: "me-va-be",
    group: "XÂY KÊNH",
    name: "Mẹ và bé",
    desc: "Video ấm áp, thu hút cộng đồng các mẹ",
    intro: "Làm kênh mẹ và bé với nội dung ấm áp, dễ viral, bán sản phẩm cho mẹ và bé.",
    learn: [
      "Ý tưởng video mẹ bé dễ viral",
      "Tạo nhân vật em bé đáng yêu",
      "Kiếm tiền từ affiliate mẹ bé"
    ],
    demo: "https://drive.google.com/file/d/1VY0yv9ITcw7AZ3Gdj1uvv2T164WvmHwg/preview",
    img: "assets/images/v-mebe.jpg"
  },
  {
    slug: "the-gioi-dong-vat",
    group: "XÂY KÊNH",
    name: "Thế giới động vật",
    desc: "Video tài liệu hoang dã hùng vĩ",
    intro: "Xây kênh thế giới động vật phong cách tài liệu – kiếm tiền từ lượt xem YouTube, TikTok, Facebook.",
    learn: [
      "Cảnh hoang dã chân thực",
      "Lời dẫn tài liệu hấp dẫn",
      "Tối ưu kênh bật kiếm tiền"
    ],
    demo: "https://drive.google.com/file/d/1ixWXLM3LvexvqkqUWxJsh4TY5TeMRM4M/preview",
    img: "assets/images/v-dongvat.jpg"
  },
  {
    slug: "thu-cung",
    group: "XÂY KÊNH",
    name: "Thú cưng",
    desc: "Video chó mèo hài hước, triệu view",
    intro: "Làm video thú cưng dễ thương, hài hước – thể loại luôn được yêu thích và dễ lên xu hướng.",
    learn: [
      "Tình huống hài hước cho thú cưng",
      "Lồng tiếng, biểu cảm vui nhộn",
      "Bán đồ thú cưng qua video"
    ],
    demo: "https://drive.google.com/file/d/1CeffGmdQjp1aUc3N0KfZCxGkR4WZkzT1/preview",
    img: "assets/images/v-thucung.jpg"
  },
  {
    slug: "drama",
    group: "XÂY KÊNH",
    name: "Drama",
    desc: "Phim ngắn drama cuốn hút, giữ chân người xem",
    intro: "Sản xuất phim ngắn drama nhiều tập bằng AI – nội dung gây nghiện, giữ chân người xem đến tập cuối.",
    learn: [
      "Viết kịch bản drama nhiều tập",
      "Nhân vật đồng nhất xuyên suốt",
      "Cắt dựng tạo cao trào"
    ],
    demo: "",
    img: "assets/images/v-drama.jpg"
  }
];

// BANK CONFIG
const BANK_CONFIG = {
  bankId: "MB",
  accountNo: "0933750577",
  accountName: "PHAM THI DINH",
  prices: {
    full: 499000,
    tool: 250000
  },
  planTitles: {
    full: "Khóa Đồng Hành 5 Ngày Trọn Gói cùng Toàn Lê",
    tool: "Ưu Đãi Đặc Biệt Khách Hàng Đã Mua Tool"
  },
  zaloLink: "https://zalo.me/0933750577"
};

// 2. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  renderMarqueeAndGrid();
  initModals();
  initScrollTop();
  setupHashRouting();
});

// 3. COUNTDOWN TIMER
function initCountdownTimer() {
  const timerElements = document.querySelectorAll('.countdown-timer');
  if (!timerElements.length) return;

  let targetTime = sessionStorage.getItem('promo_target_time');
  if (!targetTime) {
    const now = new Date();
    targetTime = now.getTime() + 12 * 60 * 60 * 1000 + 45 * 60 * 1000;
    sessionStorage.setItem('promo_target_time', targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
  }

  function update() {
    const now = new Date().getTime();
    let diff = Math.max(0, targetTime - now);

    if (diff === 0) {
      targetTime = now + 8 * 60 * 60 * 1000;
      sessionStorage.setItem('promo_target_time', targetTime);
      diff = 8 * 60 * 60 * 1000;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (n) => n.toString().padStart(2, '0');
    const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    timerElements.forEach(el => {
      el.textContent = timeStr;
    });
  }

  update();
  setInterval(update, 1000);
}

// 4. RENDER MARQUEE & GRID
function renderMarqueeAndGrid() {
  const marqueeTrack = document.getElementById('marqueeTrack');
  const gridContainer = document.getElementById('videoGridView');

  if (!marqueeTrack || !gridContainer) return;

  const createCard = (video) => {
    const isSales = video.group === "BÁN HÀNG";
    const tagClass = isSales ? "tag-sales" : "tag-channel";

    return `
      <div class="video-card" onclick="openVideoModal('${video.slug}')">
        <div class="video-card-thumb">
          <img src="${video.img}" alt="${video.name}" loading="lazy">
          <div class="play-overlay">
            <div class="play-btn-circle" title="Xem video demo">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="badge-tag ${tagClass}">${video.group}</span>
        </div>
        <div class="video-card-body">
          <h3 class="video-card-title">${video.name}</h3>
          <p class="video-card-desc">${video.desc}</p>
          <div class="video-card-footer">
            <span>Chi tiết lộ trình</span>
            <span>👉</span>
          </div>
        </div>
      </div>
    `;
  };

  const marqueeCards = [...VIDEO_TYPES, ...VIDEO_TYPES].map(createCard).join('');
  marqueeTrack.innerHTML = marqueeCards;
  gridContainer.innerHTML = VIDEO_TYPES.map(createCard).join('');
}

window.switchVideoView = function(view) {
  const marqueeContainer = document.querySelector('.marquee-container');
  const gridContainer = document.getElementById('videoGridView');
  const btnMarquee = document.getElementById('btnViewMarquee');
  const btnGrid = document.getElementById('btnViewGrid');

  if (view === 'grid') {
    marqueeContainer.style.display = 'none';
    gridContainer.style.display = 'grid';
    btnMarquee.classList.remove('active');
    btnGrid.classList.add('active');
  } else {
    marqueeContainer.style.display = 'block';
    gridContainer.style.display = 'none';
    btnMarquee.classList.add('active');
    btnGrid.classList.remove('active');
  }
};

// 5. VIDEO DETAIL MODAL
window.openVideoModal = function(slug) {
  const video = VIDEO_TYPES.find(v => v.slug === slug);
  if (!video) return;

  const modal = document.getElementById('videoDetailModal');
  const content = document.getElementById('videoModalContent');

  let mediaHtml = '';
  if (video.demo && video.demo.includes('drive.google.com')) {
    mediaHtml = `
      <div class="video-modal-player">
        <iframe src="${video.demo}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
      </div>
    `;
  } else if (video.demo) {
    mediaHtml = `
      <div class="video-modal-player">
        <video src="${video.demo}" controls playsinline></video>
      </div>
    `;
  } else {
    mediaHtml = `
      <div class="video-modal-player" style="display:flex;align-items:center;justify-content:center;background:#18113c;">
        <img src="${video.img}" alt="${video.name}" style="opacity:0.35;position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
        <div style="position:relative;z-index:2;text-align:center;color:#fff;">
          <div style="font-size:2.2rem;margin-bottom:0.5rem;">🎬</div>
          <p style="font-weight:800;font-size:1.1rem;">Video demo đang cập nhật</p>
          <p style="font-size:0.85rem;color:#b8b1db;margin-top:0.25rem;">Được hướng dẫn chi tiết từng bước trong khóa học</p>
        </div>
      </div>
    `;
  }

  const learnListHtml = video.learn.map(item => `
    <li class="learn-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${item}</span>
    </li>
  `).join('');

  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
      <span class="badge-tag ${video.group === 'BÁN HÀNG' ? 'tag-sales' : 'tag-channel'}" style="position:static;">${video.group}</span>
      <span style="font-size:0.8rem;font-weight:800;color:var(--purple-title);">KHÓA 5 NGÀY MASTER VIDEO AI</span>
    </div>
    <h2 style="font-size:1.75rem;font-weight:900;color:var(--text-dark);">${video.name}</h2>
    <p style="margin-top:0.4rem;color:var(--text-dark-muted);font-size:0.95rem;">${video.desc}</p>
    
    ${mediaHtml}

    <div style="background:var(--card-bg-subtle);border-radius:1rem;padding:1.35rem;border:1px solid var(--card-border);margin-top:1rem;">
      <p style="font-size:0.95rem;line-height:1.6;color:var(--text-dark);font-weight:600;">${video.intro}</p>
      <h3 style="font-size:1.05rem;font-weight:800;margin-top:1rem;color:var(--purple-title);">Bạn sẽ học được trong dạng video này:</h3>
      <ul class="learn-list">
        ${learnListHtml}
      </ul>
    </div>

    <div style="margin-top:1.5rem;text-align:center;border-top:1px dashed #d4cbf8;padding-top:1.25rem;">
      <p style="color:var(--text-dark-muted);text-decoration:line-through;font-size:0.95rem;">Giá gốc: 999.000đ</p>
      <p style="font-size:2.25rem;font-weight:900;color:var(--orange-main);">499.000đ</p>
      <button class="btn-purple" onclick="closeAllModals(); openCheckoutModal(false, 'full');" style="width:100%;max-width:380px;padding:1.05rem 1.75rem;margin-top:0.75rem;font-size:1rem;">
        Tham gia khóa học ngay
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// 6. CHECKOUT & VIETQR PAYMENT
let currentPlan = 'full';
let currentOrderAmount = BANK_CONFIG.prices.full;

window.openCheckoutModal = function(isToolOffer = false, plan = 'full') {
  const modal = document.getElementById('checkoutModal');
  const step1 = document.getElementById('checkoutStep1');
  const step2 = document.getElementById('checkoutStep2');

  currentPlan = isToolOffer ? 'tool' : plan;
  currentOrderAmount = BANK_CONFIG.prices[currentPlan] || BANK_CONFIG.prices.full;

  step1.style.display = 'block';
  step2.style.display = 'none';

  // Synchronize radio buttons if present
  const radio = document.querySelector(`input[name="pricingTier"][value="${currentPlan}"]`);
  if (radio) radio.checked = true;

  updateOrderPricingUI();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function updateOrderPricingUI() {
  const amountStr = currentOrderAmount.toLocaleString('vi-VN') + 'đ';
  const priceDisplay = document.getElementById('orderPriceDisplay');
  const productTitleDisplay = document.getElementById('orderProductTitle');

  if (priceDisplay) {
    priceDisplay.textContent = amountStr;
  }
  if (productTitleDisplay) {
    productTitleDisplay.textContent = BANK_CONFIG.planTitles[currentPlan] || BANK_CONFIG.planTitles.full;
  }
}

window.selectPricingTier = function(tier) {
  currentPlan = tier;
  currentOrderAmount = BANK_CONFIG.prices[tier] || BANK_CONFIG.prices.full;
  updateOrderPricingUI();
};

window.handleCheckoutSubmit = function(e) {
  e.preventDefault();

  const fullName = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();

  if (!fullName || !phone) {
    showToast('Vui lòng điền Họ tên và Số điện thoại!');
    return;
  }

  const orderCode = 'MV' + Math.floor(100000 + Math.random() * 900000);
  const transferNote = `${phone} MASTER-VIDEO`;

  renderVietQRScreen(fullName, phone, orderCode, transferNote, currentOrderAmount);

  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = 'block';
};

function renderVietQRScreen(name, phone, orderCode, note, amount) {
  const qrImgUrl = `https://img.vietqr.io/image/${BANK_CONFIG.bankId}-${BANK_CONFIG.accountNo}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(note)}&accountName=${encodeURIComponent(BANK_CONFIG.accountName)}`;

  const container = document.getElementById('qrResultContainer');
  container.innerHTML = `
    <div class="qr-payment-card">
      <div style="display:inline-flex;align-items:center;gap:0.4rem;padding:0.35rem 0.9rem;border-radius:9999px;background:var(--purple-light);color:var(--purple-main);font-size:0.8rem;font-weight:800;margin-bottom:0.75rem;">
        ⚡ Bước 2/2: Quét mã QR thanh toán
      </div>
      <h3 style="font-size:1.35rem;font-weight:900;color:var(--text-dark);">Xác nhận đăng ký của ${name}</h3>
      <p style="font-size:0.85rem;color:var(--text-dark-muted);margin-top:0.25rem;">
        Mở ứng dụng ngân hàng bất kỳ để quét mã QR bên dưới, hệ thống đối soát tự động:
      </p>

      <div class="qr-image-wrapper">
        <img src="${qrImgUrl}" alt="Mã VietQR thanh toán" id="vietQrImage">
      </div>

      <div style="text-align:left;max-width:390px;margin:0 auto;">
        <div class="bank-detail-item">
          <span style="color:var(--text-dark-muted);">Ngân hàng:</span>
          <span class="value">Quân Đội (MB Bank)</span>
        </div>
        <div class="bank-detail-item">
          <span style="color:var(--text-dark-muted);">Số tài khoản:</span>
          <span class="value">
            ${BANK_CONFIG.accountNo}
            <button class="btn-copy" onclick="copyToClipboard('${BANK_CONFIG.accountNo}', 'Đã sao chép số tài khoản!')">Copy</button>
          </span>
        </div>
        <div class="bank-detail-item">
          <span style="color:var(--text-dark-muted);">Chủ tài khoản:</span>
          <span class="value">${BANK_CONFIG.accountName}</span>
        </div>
        <div class="bank-detail-item">
          <span style="color:var(--text-dark-muted);">Số tiền:</span>
          <span class="value" style="font-size:1.15rem;color:var(--orange-main);">
            ${amount.toLocaleString('vi-VN')}đ
            <button class="btn-copy" onclick="copyToClipboard('${amount}', 'Đã sao chép số tiền!')">Copy</button>
          </span>
        </div>
        <div class="bank-detail-item" style="background:#fdf2e9;border:1.5px dashed #f97316;">
          <span style="color:var(--text-dark);font-weight:700;">Nội dung CK:</span>
          <span class="value" style="color:var(--orange-main);">
            ${note}
            <button class="btn-copy" onclick="copyToClipboard('${note}', 'Đã sao chép nội dung chuyển khoản!')">Copy</button>
          </span>
        </div>
      </div>

      <div style="margin-top:1.5rem;display:flex;flex-direction:column;gap:0.75rem;align-items:center;">
        <a href="${BANK_CONFIG.zaloLink}" target="_blank" rel="noopener noreferrer" class="btn-purple" style="width:100%;max-width:390px;padding:1rem;font-size:1rem;text-decoration:none;">
          ✅ Đã chuyển khoản – Vào nhóm Zalo ngay
        </a>
        <button type="button" onclick="document.getElementById('checkoutStep2').style.display='none';document.getElementById('checkoutStep1').style.display='block';" style="font-size:0.85rem;color:var(--purple-main);font-weight:700;text-decoration:underline;">
          ← Quay lại chọn gói hoặc đổi thông tin
        </button>
      </div>

      <p style="margin-top:1rem;font-size:0.75rem;color:var(--text-dark-muted);">
        🔒 Bảo mật thanh toán bởi VietQR Napas • Hỗ trợ trực tiếp Zalo 0933.750.577
      </p>
    </div>
  `;
}

// 7. COPY TO CLIPBOARD
window.copyToClipboard = function(text, successMsg = 'Đã sao chép thành công!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
};

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Lỗi sao chép, vui lòng nhập thủ công');
  }
  document.body.removeChild(textArea);
}

// 8. TOAST NOTIFICATION
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toast.timeoutId);
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 9. MODALS MANAGER
function initModals() {
  const backdrops = document.querySelectorAll('.modal-backdrop');

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

window.closeAllModals = function() {
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(b => b.classList.remove('active'));
  document.body.style.overflow = '';
};

// 10. SCROLL TO TOP
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 11. HASH ROUTING
function setupHashRouting() {
  const handleHash = () => {
    const hash = window.location.hash;
    if (hash === '#checkout') {
      openCheckoutModal();
    } else if (hash.startsWith('#video-')) {
      const slug = hash.replace('#video-', '');
      openVideoModal(slug);
    }
  };

  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) {
    handleHash();
  }
}
